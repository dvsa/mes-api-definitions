declare var require: any;
declare var process: any;

const merge = require('deepmerge');
const common = require("./category-definitions/common/index.json");
const fs = require('fs');
const prettyJs = require('pretty-js');
const json2ts = require('json-schema-to-typescript');
const derefSchema = require('json-schema-deref-sync');

const categories = ['ADI2', 'B', 'BE', 'C', 'CE', 'C1', 'C1E', 'D', 'DE', 'D1', 'D1E', 'F', 'G', 'H', 'K'];

// Json styling config
const options = {
  indent: "\t",
  newline: "\r\n",
  quoteProperties: "true"
};

const cliArgument = process.argv[2];

// Clears and cleans the generated schemas/typescripts
if (cliArgument === 'clean') {
  deleteFileIfExists(`./categories/common/index.d.ts`);
  for (let category of categories) {
    deleteFileIfExists(`./categories/${category}/index.json`);
    deleteFileIfExists(`./categories/${category}/partial.d.ts`);
    // DO NOT DELETE THIS FILE IT HAS BEEN MODIFIED BY HAND
    // AND WILL NOT BE REGENERATED
    // deleteFileIfExists(`./categories/${category}/index.d.ts`);
  }
  console.log('All categories have been cleaned');
}

if (cliArgument === 'generate') {
  // Generate common typescript file
  generateTypescriptInterfaces(`./category-definitions/common/index.json`, `./categories/common/index.d.ts`);
  for (let category of categories) {
    const partialSchema = `./category-definitions/${category}/partial.json`;
    const combinedSchema = `./categories/${category}/index.json`;

    // Generate combined schemas
    generateCombinedSchema(partialSchema, combinedSchema);

    // Generate typescript files
    generateTypescriptInterfaces(partialSchema, `./categories/${category}/partial.d.ts`);
    // DO NOT REGENERATED THIS FILE. IT HAS BEEEN MODIFIED BY HAND
    // generateTypescriptInterfaces(combinedSchema);
  }
  // dereference and copy across Cat A mod 1 and Cat A mod 2 index.json files
  deReferenceJsonSchema('./category-definitions/AM1/index.json', './categories/AM1/index.json');
  deReferenceJsonSchema('./category-definitions/AM2/index.json', './categories/AM2/index.json');
  deReferenceJsonSchema('./category-definitions/CPC/index.json', './categories/CPC/index.json');
  // generate Cat A mod 1 and mod 2 typescript files (standalone)
  generateTypescriptInterfaces(`./category-definitions/AM1/index.json`, `./categories/AM1/index.d.ts`);
  generateTypescriptInterfaces(`./category-definitions/AM2/index.json`, `./categories/AM2/index.d.ts`);
  generateTypescriptInterfaces(`./category-definitions/CPC/index.json`, `./categories/CPC/index.d.ts`);
  // copy common index.json file across for consistency
  copyFile(`./category-definitions/common/index.json`, `./categories/common/index.json`);
  console.log('All categories have been generated');
}

function copyFile(source: string, destination: string) {
  fs.copyFile(source, destination, (err) => {
    if(err) throw err;
  });
}

function generateCombinedSchema(partialSchemaLocation: string, combinedSchemaLocation: string) {
  const currentCategoryJson = require(partialSchemaLocation);
  currentCategoryJson['title'] = currentCategoryJson['title'].replace('Partial ', '');
  const combinedJsonObject = removeRefs(merge(common, currentCategoryJson));
  let combinedJsonString = JSON.stringify(combinedJsonObject);
  combinedJsonString = combinedJsonString.replace(/..\/common\/index.json/g, '');
  fs.writeFileSync(combinedSchemaLocation, prettyJs(combinedJsonString, options));
}

function generateTypescriptInterfaces(schemaLocation: string, saveToLocation: string) {
  json2ts.compileFromFile(schemaLocation, {
    unreachableDefinitions: true
  })
    .then(ts => fs.writeFileSync(saveToLocation, ts))
}

function deleteFileIfExists(fileLocation: string) {
  try {
    fs.unlinkSync(fileLocation);
  } catch (e) { }
}

// Remove all $ref if they have siblings
function removeRefs(obj: any): any {
  const removeRefsFields = (obj: any) => {
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      if (key === '$ref' && Object.keys(obj).length > 1) delete obj[key];
      if (typeof value === 'object') removeRefsFields(value);
    });
    return obj;
  };
  return removeRefsFields(obj);
}

function deReferenceJsonSchema(sourcePath: string, targetPath: string): void {
  const originalSchema = require(sourcePath);
  const baseFolder = sourcePath.substring(0, sourcePath.lastIndexOf("/"));
  let deReferencedJsonSchema = derefSchema(originalSchema, {
    baseFolder: baseFolder,
  });
  let deReferencedSchema = prettyJs(JSON.stringify(deReferencedJsonSchema), options);
  fs.writeFile(targetPath, deReferencedSchema, 'utf8', (err) => {
    if (err) {
      console.error(`unable to write to file ${targetPath}`);
    }
  })
}
