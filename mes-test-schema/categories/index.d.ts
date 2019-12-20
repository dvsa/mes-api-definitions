import { TestResultCommonSchema } from "./common/index";
import { CatBUniqueTypes } from "./B";
import { CatBEUniqueTypes } from "./BE";
import { CatCUniqueTypes } from "./C";
import { CatC1UniqueTypes } from "./C1";
import { CatCEUniqueTypes } from "./CE";
import { CatC1EUniqueTypes } from "./C1E";

export type TestResultSchemasUnion =
  | CatBUniqueTypes.TestResult
  | CatBEUniqueTypes.TestResult
  | CatCUniqueTypes.TestResult
  | CatC1UniqueTypes.TestResult
  | CatC1EUniqueTypes.TestResult
  | CatCEUniqueTypes.TestResult;
