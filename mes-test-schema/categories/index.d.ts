import { PartialTestResultCatBSchema } from "./B/partial";
import { PartialTestResultCatBESchema, PassCompletion } from "./BE/partial";

import { TestResultCommonSchema } from "./Common/index";

export type TestResultSchemasUnion =
  | TestResultCatBSchema
  | TestResultCatBESchema;

export type TestResultCatBSchema = PartialTestResultCatBSchema & TestResultCommonSchema;
export type TestResultCatBESchema = PartialTestResultCatBESchema & TestResultCommonSchema;
