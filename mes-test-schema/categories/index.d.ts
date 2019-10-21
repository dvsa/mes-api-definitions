import { PartialTestResultCatBSchema } from "./B/partial";
import { PartialTestResultCatBESchema } from "./BE/partial";
import { PartialTestResultCatCSchema } from "./C/partial";
import { TestResultCommonSchema } from "./Common/index";

export type TestResultSchemasUnion =
  | StandardCarTestCATBSchema
  | StandardTrailerTestCATBESchema
  | LargeLorriesTestCATCSchema;

export type StandardCarTestCATBSchema = PartialTestResultCatBSchema & TestResultCommonSchema;
export type StandardTrailerTestCATBESchema = PartialTestResultCatBESchema & TestResultCommonSchema;
export type LargeLorriesTestCATCSchema = PartialTestResultCatCSchema & TestResultCommonSchema;
