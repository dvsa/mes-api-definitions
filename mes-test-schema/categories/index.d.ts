import { StandardCarTestCATBSchema } from "./B";
import { StandardTrailerTestCATBESchema } from "./BE";
import { LargeLorriesTestCATCSchema } from "./C";

export type TestCategoryUnion = 
  | StandardCarTestCATBSchema
  | StandardTrailerTestCATBESchema
  | LargeLorriesTestCATCSchema;
