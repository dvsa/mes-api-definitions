# mes-api-definitions

These are the REST API definitions (OpenAPI and JSON Schema) for the Mobile Examiner Services project, for our backend microservices to implement, and our frontend mobile app to consume.

# API Docs
See [OpenAPI Definition](https://combinatronics.com/dvsa/mes-api-definitions/develop/redoc-static.html).

# Usage

Example category B schema usage:  
`import { StandardCarTestCATBSchema } from '@dvsa/mes-test-schema/categories/B';`

# Generating schemas for mes-test-schema

To clean current schemas, run the command:
`npm run clean`

To generate new schemas, (Combining the partials and common schema), run the command:
`npm run generate`

NOTE: The category specific index.d.ts files were initially generated but have been modified by hand
      to create the category specific namespaces. These files should not be deleted nor regenerated
      but any new types should be added manually.

# Updating a schema

Always make your edits to the **json schema files** (except for the category `index.json` files, these are auto-generated) and not the generated TypeScript definition files (ending in .d.ts). The general process for updating a schema is:-
1. Navigate into the relevent schema (ie. mes-test-schema)
2. Make edits to the relevant json schema file
3. Generate the new TypeScript definitions using `npm run generate` - _Ensure you are in the correct directory_
4. If necessary, update the `index.d.ts`
5. Bump the version of the package using `npm version {major|minor|patch}` - _Ensure you are in the correct directory_
6. Raise a Pull Request on Github and await approvals
7. After merging into `develop`, we can now use GitHub actions to publish a given package for us - this can be found via the `Actions` tab, then click the workflow on the left i.e. `Publish package` - You will then be presented with a `Run worfklow` option in which you can specify which of the schemas to publish.
