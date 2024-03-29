/* tslint:disable */
/**
 * This file was initially generated by json-schema-to-typescript.
 * IT HAS SINCE BEEN MODIFIED BY HAND. DO NOT REGENERATE
 */

// Always follow the order of the properties that are in partial.d.ts
import { PartialTestResultCatD1EMSchema } from './partial';
import { JournalData as CommonJournalData, TestResultCommonSchema } from '../common';
import { TestData as PartialCatD1EMTestData } from './partial';
import { TestData as CommonTestData } from '../common';
import { Manoeuvres as PartialCatDManoeuvres } from './partial';
import { Candidate as PartialCatD1EMCandidate } from './partial';
import { Candidate as CommonCandidate } from '../common/index';
import { VehicleDetails as PartialCatD1EMVehicleDetails } from './partial';
import { JournalData as PartialCatD1EMJournalData } from '../D1EM/partial';

export declare namespace CatD1EMUniqueTypes {
  type TestResult = PartialTestResultCatD1EMSchema & TestResultCommonSchema;

  type TestData = PartialCatD1EMTestData & CommonTestData;

  type Manoeuvres = PartialCatDManoeuvres;

  type JournalData = PartialCatD1EMJournalData & CommonJournalData;

  type Candidate = PartialCatD1EMCandidate & CommonCandidate;

  type VehicleDetails = PartialCatD1EMVehicleDetails;
}
