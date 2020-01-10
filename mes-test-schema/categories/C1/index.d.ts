/* tslint:disable */
/**
 * This file was initially generated by json-schema-to-typescript.
 * IT HAS SINCE BEEN MOFIIED BY HAND. DO NOT REGENERATE
 */

// Always follow the order of the properties that are in partial.d.ts
import { PartialTestResultCatC1Schema } from './partial';
import { TestResultCommonSchema } from '../common/index';
import { PassCompletion as CommonPassCompletion } from '../common/index';
import { TestData as PartialCatC1TestData } from './partial';
import { TestData as CommonTestData } from '../common';
import { TestRequirements as PartialCatC1TestRequirements } from './partial';
import { Manoeuvres as PartialCatC1Manoeuvres } from './partial';
import { VehicleChecks as PartialCatC1VehicleChecks } from './partial';
import { JournalData as PartialCatC1JournalData } from './partial';
import { JournalData as CommonJournalData } from '../common/index';
import { Candidate as PartialCatC1Candidate } from './partial';
import { Candidate as CommonCandidate } from '../common/index';
import { VehicleDetails as PartialCatC1VehicleDetails } from './partial';
import { VehicleDetails as CommonVehicleDetails } from '../common/index';

export declare namespace CatC1UniqueTypes {
  type TestResult = PartialTestResultCatC1Schema & TestResultCommonSchema;

  type TestData = PartialCatC1TestData & CommonTestData;

  type TestRequirements = PartialCatC1TestRequirements;

  type Manoeuvres = PartialCatC1Manoeuvres;

  type VehicleChecks = PartialCatC1VehicleChecks;

  type JournalData = PartialCatC1JournalData & CommonJournalData;

  type Candidate = PartialCatC1Candidate & CommonCandidate;

  type VehicleDetails = PartialCatC1VehicleDetails & CommonVehicleDetails;
}