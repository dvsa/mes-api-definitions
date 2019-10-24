// Always follow the order of the properties that are in partial.d.ts

import { PartialTestResultCatBSchema } from './partial';
import { TestResultCommonSchema } from '../common';

import { InstructorDetails as PartialCatBInstructorDetails } from './partial';

import { TestData as PartialCatBTestData } from './partial';
import { TestData as CommonTestData } from '../common/index';

import { ControlledStop as PartialCatBControlledStop } from './partial';

import { TestRequirements as PartialCatBTestRequirements } from './partial';
import { TestRequirements as CommonTestRequirements } from '../common/index';

import { Manoeuvres as PartialCatBManoeuvres } from './partial';

import { VehicleChecks as PartialCatBVehicleChecks } from './partial';

export declare namespace CatBUnique {
  type TestResult = PartialTestResultCatBSchema & TestResultCommonSchema;

  type InstructorDetails = PartialCatBInstructorDetails;

  type TestData = PartialCatBTestData & CommonTestData;

  type ControlledStop = PartialCatBControlledStop;

  type TestRequirements = PartialCatBTestRequirements & CommonTestRequirements;

  type Manoeuvres = PartialCatBManoeuvres;

  type VehicleChecks = PartialCatBVehicleChecks;
}