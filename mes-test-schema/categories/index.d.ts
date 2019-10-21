import { PartialTestResultCatBSchema } from "./B/partial";
import { PartialTestResultCatBESchema } from "./BE/partial";
import { PartialTestResultCatCSchema } from "./C/partial";
import { TestResultCommonSchema } from "./Common/index";

export type TestResultSchemasUnion =
  | TestResultCatBSchema
  | TestResultCatBESchema
  | TestResultCatCSchema;

export type TestResultCatBSchema = PartialTestResultCatBSchema & TestResultCommonSchema;
export type TestResultCatBESchema = PartialTestResultCatBESchema & TestResultCommonSchema;
export type TestResultCatCSchema = PartialTestResultCatCSchema & TestResultCommonSchema;
