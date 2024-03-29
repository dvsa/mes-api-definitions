/* tslint:disable */
/**
 * This file was initially generated by json-schema-to-typescript.
 * IT HAS SINCE BEEN MODIFIED BY HAND. DO NOT REGENERATE
 */

// Always follow the order of the properties that are in partial.d.ts
import { PartialTestResultCatDEMSchema } from './partial';
import { JournalData as CommonJournalData, TestResultCommonSchema } from '../common';
import { TestData as PartialCatDEMTestData } from './partial';
import { TestData as CommonTestData } from '../common';
import { Manoeuvres as PartialCatDManoeuvres } from './partial';
import { Candidate as PartialCatDEMCandidate } from './partial';
import { Candidate as CommonCandidate } from '../common/index';
import { VehicleDetails as PartialCatDEMVehicleDetails } from './partial';
import { JournalData as PartialCatDEMJournalData } from '../DEM/partial';

export declare namespace CatDEMUniqueTypes {
  type TestResult = PartialTestResultCatDEMSchema & TestResultCommonSchema;

  type TestData = PartialCatDEMTestData & CommonTestData;

  type Manoeuvres = PartialCatDManoeuvres;

  type JournalData = PartialCatDEMJournalData & CommonJournalData;

  type Candidate = PartialCatDEMCandidate & CommonCandidate;

  type VehicleDetails = PartialCatDEMVehicleDetails;
}
