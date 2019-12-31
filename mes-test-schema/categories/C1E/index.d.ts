/* tslint:disable */
/**
 * This file was initially generated by json-schema-to-typescript.
 * IT HAS SINCE BEEN MOFIIED BY HAND. DO NOT REGENERATE
 */

// Always follow the order of the properties that are in partial.d.ts
import { PartialTestResultCatC1ESchema } from './partial';
import { TestResultCommonSchema } from '../common/index';
import { PassCompletion as CommonPassCompletion } from '../common/index';
import { TestData as PartialCatC1ETestData } from './partial';
import { TestData as CommonTestData } from '../common';
import { TestRequirements as PartialCatC1ETestRequirements } from './partial';
import { TestRequirements as CommonTestRequirements } from '../common/index';
import { Manoeuvres as PartialCatC1EManoeuvres } from './partial';
import { VehicleChecks as PartialCatC1EVehicleChecks } from './partial';
import { JournalData as PartialCatC1EJournalData } from './partial';
import { JournalData as CommonJournalData } from '../common/index';
import { Candidate as PartialCatC1ECandidate } from './partial';
import { Candidate as CommonCandidate } from '../common/index';
import { VehicleDetails as PartialCatC1EVehicleDetails } from './partial';
import { VehicleDetails as CommonVehicleDetails } from '../common/index';
import { UncoupleRecouple as PartialCatC1EUncoupleRecouple } from './partial';

export declare namespace CatC1EUniqueTypes {
  type TestResult = PartialTestResultCatC1ESchema & TestResultCommonSchema;

  type TestData = PartialCatC1ETestData & CommonTestData;

  type TestRequirements = PartialCatC1ETestRequirements & CommonTestRequirements;

  type Manoeuvres = PartialCatC1EManoeuvres;

  type VehicleChecks = PartialCatC1EVehicleChecks;

  type JournalData = PartialCatC1EJournalData & CommonJournalData;

  type Candidate = PartialCatC1ECandidate & CommonCandidate;

  type VehicleDetails = PartialCatC1EVehicleDetails & CommonVehicleDetails;

  type UncoupleRecouple = PartialCatC1EUncoupleRecouple;
}