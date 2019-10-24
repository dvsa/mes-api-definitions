declare var require: any
declare var process: any

const merge = require('deepmerge')
const common = require("./categories/Common/index.json")
const fs = require('fs');
const prettyJs = require('pretty-js');
const json2ts = require('json-schema-to-typescript');
const _ = require("lodash");

const categories = ['B', 'BE'];

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
    deleteFileIfExists(`./categories/${category}/index.d.ts`);
  }
  console.log('All categories have been cleaned');
}

if (cliArgument === 'generate') {
  // Generate common typescript file
  generateTypescriptInterfaces(`./categories/common/index.json`);
  for (let category of categories) {
    const partialSchema = `./categories/${category}/partial.json`;
    const combinedSchema = `./categories/${category}/index.json`;

    // Generate combined schemas
    generateCombinedSchema(partialSchema, combinedSchema);

    // Generate typescript files
    generateTypescriptInterfaces(partialSchema);
    // generateTypescriptInterfaces(combinedSchema);
  }
  console.log('All categories have been generated');
}

function generateCombinedSchema(partialSchemaLocation: string, combinedSchemaLocation: string) {
  const currentCategoryJson = require(partialSchemaLocation);
  currentCategoryJson['title'] = currentCategoryJson['title'].replace('Partial ', '');
  let combinedJsonString = JSON.stringify(merge(common, currentCategoryJson));
  combinedJsonString = combinedJsonString.replace(/..\/Common\/index.json/g, '');
  fs.writeFileSync(combinedSchemaLocation, prettyJs(combinedJsonString, options));
}

function generateTypescriptInterfaces(schemaLocation: string) {
  json2ts.compileFromFile(schemaLocation, {
    unreachableDefinitions: true
  })
    .then(ts => fs.writeFileSync(schemaLocation.replace('.json', '.d.ts'), ts))
}

function deleteFileIfExists(fileLocation: string) {
  try {
    fs.unlinkSync(fileLocation);
  } catch (e) { }
}

