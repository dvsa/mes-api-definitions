import { TestResultCommonSchema } from "./common/index";
import { CatBUniqueTypes } from "./B";
import { CatBEUniqueTypes } from "./BE";
import { CatCUniqueTypes } from "./C";

export type TestResultSchemasUnion =
  | CatBUniqueTypes.TestResult
  | CatBEUniqueTypes.TestResult
  | CatCUniqueTypes.TestResult;
