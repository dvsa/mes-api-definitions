/* tslint:disable */
/**
 * This file was initially generated by json-schema-to-typescript.
 * IT HAS SINCE BEEN MODIFIED BY HAND. DO NOT REGENERATE
 */

// Always follow the order of the properties that are in partial.d.ts
import { PartialTestResultCatC1MSchema } from './partial';
import { TestResultCommonSchema } from '../common';
import { TestData as PartialCatC1MTestData } from './partial';
import { TestData as CommonTestData } from '../common';
import { Manoeuvres as PartialCatC1Manoeuvres } from './partial';
import { Candidate as PartialCatC1MCandidate } from './partial';
import { Candidate as CommonCandidate } from '../common/index';
import { VehicleDetails as PartialCatC1MVehicleDetails } from './partial';

export declare namespace CatC1MUniqueTypes {
  type TestResult = PartialTestResultCatC1MSchema & TestResultCommonSchema;

  type TestData = PartialCatC1MTestData & CommonTestData;

  type Manoeuvres = PartialCatC1Manoeuvres;

  type Candidate = PartialCatC1MCandidate & CommonCandidate;

  type VehicleDetails = PartialCatC1MVehicleDetails;
}
