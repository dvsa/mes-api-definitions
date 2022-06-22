import { CatADI2UniqueTypes } from './ADI2';
import { TestResultCatADI3Schema } from './ADI3';
import { CatBUniqueTypes } from './B';
import { CatBEUniqueTypes } from './BE';
import { CatCUniqueTypes } from './C';
import { CatCEUniqueTypes } from './CE';
import { CatC1UniqueTypes } from './C1';
import { CatC1EUniqueTypes } from './C1E';
import { CatCMUniqueTypes } from './CM';
import { CatC1MUniqueTypes } from './C1M';
import { CatCEMUniqueTypes } from './CEM';
import { CatC1EMUniqueTypes } from './C1EM';
import { CatDMUniqueTypes } from './DM';
import { CatD1MUniqueTypes } from './D1M';
import { CatDEMUniqueTypes } from './DEM';
import { CatD1EMUniqueTypes } from './D1EM';
import { CatDUniqueTypes } from './D';
import { CatDEUniqueTypes } from './DE';
import { CatD1UniqueTypes } from './D1';
import { CatD1EUniqueTypes } from './D1E';
import { TestResultCatAM1Schema } from './AM1';
import { TestResultCatAM2Schema } from './AM2';
import { CatFUniqueTypes } from './F';
import { CatGUniqueTypes } from './G';
import { CatHUniqueTypes } from './H';
import { CatKUniqueTypes } from './K';
import { TestResultCatCPCSchema } from './CPC';

export type TestResultSchemasUnion =
  | CatADI2UniqueTypes.TestResult
  | CatBUniqueTypes.TestResult
  | CatBEUniqueTypes.TestResult
  | CatCUniqueTypes.TestResult
  | CatCEUniqueTypes.TestResult
  | CatC1UniqueTypes.TestResult
  | CatC1EUniqueTypes.TestResult
  | CatCMUniqueTypes.TestResult
  | CatCEMUniqueTypes.TestResult
  | CatC1MUniqueTypes.TestResult
  | CatC1EMUniqueTypes.TestResult
  | CatDUniqueTypes.TestResult
  | CatDEUniqueTypes.TestResult
  | CatD1UniqueTypes.TestResult
  | CatD1EUniqueTypes.TestResult
  | CatDMUniqueTypes.TestResult
  | CatD1MUniqueTypes.TestResult
  | CatDEMUniqueTypes.TestResult
  | CatD1EMUniqueTypes.TestResult
  | TestResultCatAM1Schema
  | TestResultCatAM2Schema
  | CatFUniqueTypes.TestResult
  | CatGUniqueTypes.TestResult
  | CatHUniqueTypes.TestResult
  | CatKUniqueTypes.TestResult
  | TestResultCatCPCSchema
  | TestResultCatADI3Schema;
