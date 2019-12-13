import { TestResultCommonSchema } from "./common/index";
import { CatBUniqueTypes } from "./B";
import { CatBEUniqueTypes } from "./BE";
import { CatCUniqueTypes } from "./C";
import { CatC1UniqueTypes } from "./C1";

export type TestResultSchemasUnion =
  | CatBUniqueTypes.TestResult
  | CatBEUniqueTypes.TestResult
  | CatCUniqueTypes.TestResult
  | CatC1UniqueTypes.TestResult;
