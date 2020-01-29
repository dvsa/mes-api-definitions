/* tslint:disable */
/**
 * This file was initially generated by json-schema-to-typescript.
 * IT HAS SINCE BEEN MOFIIED BY HAND. DO NOT REGENERATE
 */

// Always follow the order of the properties that are in partial.d.ts
import { PartialTestResultCatCSchema } from './partial';
import { TestResultCommonSchema } from '../common/index';
import { TestData as PartialCatCTestData } from './partial';
import { TestData as CommonTestData } from '../common';
import { TestRequirements as PartialCatCTestRequirements } from './partial';
import { TestRequirements as CommonTestRequirements } from '../common/index';
import { Manoeuvres as PartialCatCManoeuvres } from './partial';
import { VehicleChecks as PartialCatCVehicleChecks } from './partial';
import { JournalData as PartialCatCJournalData } from './partial';
import { JournalData as CommonJournalData } from '../common/index';
import { Candidate as PartialCatCCandidate } from './partial';
import { Candidate as CommonCandidate } from '../common/index';
import { VehicleDetails as PartialCatCVehicleDetails } from './partial';
import { VehicleDetails as CommonVehicleDetails } from '../common/index';
import { PassCompletion as PartialPassCompletion } from './partial';

export declare namespace CatCUniqueTypes {
  type TestResult = PartialTestResultCatCSchema & TestResultCommonSchema;

  type TestData = PartialCatCTestData & CommonTestData;

  type TestRequirements = PartialCatCTestRequirements & CommonTestRequirements;

  type Manoeuvres = PartialCatCManoeuvres;

  type VehicleChecks = PartialCatCVehicleChecks;

  type JournalData = PartialCatCJournalData & CommonJournalData;

  type Candidate = PartialCatCCandidate & CommonCandidate;

  type VehicleDetails = PartialCatCVehicleDetails & CommonVehicleDetails;

  type PassCompletion = PartialPassCompletion;
}
