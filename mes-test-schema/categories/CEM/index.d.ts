/* tslint:disable */
/**
 * This file was initially generated by json-schema-to-typescript.
 * IT HAS SINCE BEEN MODIFIED BY HAND. DO NOT REGENERATE
 */

// Always follow the order of the properties that are in partial.d.ts
import { PartialTestResultCatCEMSchema } from './partial';
import {
  JournalData as CommonJournalData,
  TestResultCommonSchema,
  VehicleDetails as CommonVehicleDetails
} from '../common';
import { TestData as PartialCatCEMTestData } from './partial';
import { TestData as CommonTestData } from '../common';
import { Manoeuvres as PartialCatCEManoeuvres } from './partial';
import { Candidate as PartialCatCEMCandidate } from './partial';
import { Candidate as CommonCandidate } from '../common/index';
import { VehicleDetails as PartialCatCEMVehicleDetails } from './partial';
import { JournalData as PartialCatCEMJournalData } from '../CEM/partial';

export declare namespace CatCEMUniqueTypes {
  type TestResult = PartialTestResultCatCEMSchema & TestResultCommonSchema;

  type TestData = PartialCatCEMTestData & CommonTestData;

  type Manoeuvres = PartialCatCEManoeuvres;

  type JournalData = PartialCatCEMJournalData & CommonJournalData;

  type Candidate = PartialCatCEMCandidate & CommonCandidate;

  type VehicleDetails = PartialCatCEMVehicleDetails & CommonVehicleDetails;
}
