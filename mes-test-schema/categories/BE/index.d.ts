// Always follow the order of the properties that are in partial.d.ts

import { PartialTestResultCatBESchema, PassCompletion } from './partial';
import { TestResultCommonSchema } from '../common/index';

import { PassCompletion as CommonPassCompletion } from '../common/index';
import { PassCompletion as PartialCatBePassCompletion } from './partial';

import { TestData as PartialCatBETestData } from './partial';
import { TestData as CommonTestData } from '../common';

import { UncoupleRecouple as PartialCatBEUncoupleRecouple } from './partial';

import { TestRequirements as PartialCatBETestRequirements } from './partial';
import { TestRequirements as CommonTestRequirements } from '../common/index';

import { Manoeuvres as PartialCatBEManoeuvres } from './partial';

import { VehicleChecks as PartialCatBEVehicleChecks } from './partial';

import { JournalData as PartialCatBEJournalData } from './partial';
import { JournalData as CommonJournalData } from '../common/index';

import { Candidate as PartialCatBECandidate } from './partial';
import { Candidate as CommonCandidate } from '../common/index';

import { VehicleDetails as PartialCatBEVehicleDetails } from './partial';
import { VehicleDetails as CommonVehicleDetails } from '../common/index';

export declare namespace CatBEUniqueType {
  type TestResult = PartialTestResultCatBESchema & TestResultCommonSchema;

  type PassCompletion = PartialCatBePassCompletion & CommonPassCompletion;

  type TestData = PartialCatBETestData & CommonTestData;

  type UncoupleRecouple = PartialCatBEUncoupleRecouple;

  type TestRequirements = PartialCatBETestRequirements & CommonTestRequirements;

  type Manoeuvres = PartialCatBEManoeuvres;

  type VehicleChecks = PartialCatBEVehicleChecks;

  type JournalData = PartialCatBEJournalData & CommonJournalData;

  type Candidate = PartialCatBECandidate & CommonCandidate;

  type VehicleDetails = PartialCatBEVehicleDetails & CommonVehicleDetails;
}
