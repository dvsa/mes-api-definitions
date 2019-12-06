import { PartialTestResultCatBSchema } from "./B/partial";
import { PartialTestResultCatBESchema } from "./BE/partial";

import { TestResultCommonSchema } from "./common/index";
import { CatBUniqueTypes } from "./B";
import { CatBEUniqueTypes } from "./BE";

export type TestResultSchemasUnion =
  | CatBUniqueTypes.TestResult
  | CatBEUniqueTypes.TestResult;
