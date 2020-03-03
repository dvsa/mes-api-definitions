/* tslint:disable */
/**
 * This file was initially generated by json-schema-to-typescript.
 * IT HAS SINCE BEEN MOFIIED BY HAND. DO NOT REGENERATE
 */

// Always follow the order of the properties that are in partial.d.ts
import { PartialTestResultCatGSchema } from './partial';
import { TestResultCommonSchema } from '../common/index';
import { TestData as PartialCatGTestData } from './partial';
import { TestData as CommonTestData } from '../common';
import { TestRequirements as PartialCatGTestRequirements } from './partial';
import { TestRequirements as CommonTestRequirements } from '../common/index';
import { Manoeuvres as PartialCatGManoeuvres } from './partial';
import { VehicleChecks as PartialCatGVehicleChecks } from './partial';
import { JournalData as PartialCatGJournalData } from './partial';
import { JournalData as CommonJournalData } from '../common/index';
import { Candidate as PartialCatGCandidate } from './partial';
import { Candidate as CommonCandidate } from '../common/index';
import { VehicleDetails as PartialCatGVehicleDetails } from './partial';
import { VehicleDetails as CommonVehicleDetails } from '../common/index';

export declare namespace CatGUniqueTypes {
  type TestResult = PartialTestResultCatGSchema & TestResultCommonSchema;

  type TestData = PartialCatGTestData & CommonTestData;

  type TestRequirements = PartialCatGTestRequirements & CommonTestRequirements;

  type Manoeuvres = PartialCatGManoeuvres;

  type VehicleChecks = PartialCatGVehicleChecks;

  type JournalData = PartialCatGJournalData & CommonJournalData;

  type Candidate = PartialCatGCandidate & CommonCandidate;

  type VehicleDetails = PartialCatGVehicleDetails & CommonVehicleDetails;

}
