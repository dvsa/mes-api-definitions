import { PartialTestResultCatBSchema } from "./B/partial";
import { PartialTestResultCatBESchema } from "./BE/partial";
import { PartialTestResultCatCSchema } from "./C/partial";

import { TestResultCommonSchema } from "./common/index";
import { CatBUniqueTypes } from "./B";
import { CatBEUniqueTypes } from "./BE";
import { CatCUniqueTypes } from "./C";

export type TestResultSchemasUnion =
  | CatBUniqueTypes.TestResult
  | CatBEUniqueTypes.TestResult
  | CatCUniqueTypes.TestResult;
