import { PartialTestResultCatBESchema, PassCompletion } from './partial';
import { TestResultCommonSchema } from '../common/index';

import { PassCompletion as CommonPassCompletion } from '../common/index';
import { PassCompletion as PartialCatBePassCompletion } from './partial';
import { VehicleChecks as CatBeVehicleChecks } from './partial';

export declare namespace CatBEUnique {
  type TestResult = PartialTestResultCatBESchema & TestResultCommonSchema;

  type PassCompletion = PartialCatBePassCompletion & CommonPassCompletion;

  type VehicleChecks = CatBeVehicleChecks;
}
