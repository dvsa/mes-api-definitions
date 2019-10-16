import { PartialStandardCarTestCATBSchema } from "./B/partial";
import { PartialStandardTrailerTestCATBESchema } from "./BE/partial";
import { PartialLargeLorriesTestCATCSchema } from "./C/partial";
import { CommonTestSchema } from "./Common/index";

export type TestCategoryUnion =
  | StandardCarTestCATBSchema
  | StandardTrailerTestCATBESchema
  | LargeLorriesTestCATCSchema;

export type StandardCarTestCATBSchema = PartialStandardCarTestCATBSchema & CommonTestSchema;
export type StandardTrailerTestCATBESchema = PartialStandardTrailerTestCATBESchema & CommonTestSchema;
export type LargeLorriesTestCATCSchema = PartialLargeLorriesTestCATCSchema & CommonTestSchema;
