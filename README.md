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
