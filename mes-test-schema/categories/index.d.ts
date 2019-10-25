import { PartialTestResultCatBSchema } from "./B/partial";
import { PartialTestResultCatBESchema, PassCompletion } from "./BE/partial";

import { TestResultCommonSchema } from "./Common/index";
import { CatBUniqueTypes } from "./B";
import { CatBEUniqueTypes } from "./BE";

export type TestResultSchemasUnion =
  | CatBUniqueTypes.TestResult
  | CatBEUniqueTypes.TestResult;
