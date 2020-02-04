import { TestResultCommonSchema } from './common/index';
import { CatBUniqueTypes } from './B';
import { CatBEUniqueTypes } from './BE';
import { CatCUniqueTypes } from './C';
import { CatCEUniqueTypes } from './CE';
import { CatC1UniqueTypes } from './C1';
import { CatC1EUniqueTypes } from './C1E';
import { CatDUniqueTypes } from './D';
import { CatDEUniqueTypes } from './DE';
import { CatD1UniqueTypes } from './D1';
import { CatD1EUniqueTypes } from './D1E';
import { TestResultCatAM1Schema } from './AM1';
import { TestResultCatAM2Schema } from './AM2';

export type TestResultSchemasUnion =
  | CatBUniqueTypes.TestResult
  | CatBEUniqueTypes.TestResult
  | CatCUniqueTypes.TestResult
  | CatCEUniqueTypes.TestResult
  | CatC1UniqueTypes.TestResult
  | CatC1EUniqueTypes.TestResult
  | CatDUniqueTypes.TestResult
  | CatDEUniqueTypes.TestResult
  | CatD1UniqueTypes.TestResult
  | CatD1EUniqueTypes.TestResult
  | TestResultCatAM1Schema
  | TestResultCatAM2Schema;
