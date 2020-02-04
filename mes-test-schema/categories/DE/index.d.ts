/* tslint:disable */
/**
 * This file was initially generated by json-schema-to-typescript.
 * IT HAS SINCE BEEN MOFIIED BY HAND. DO NOT REGENERATE
 */

// Always follow the order of the properties that are in partial.d.ts
import { PartialTestResultCatDESchema } from './partial';
import { TestResultCommonSchema } from '../common/index';
import { TestData as PartialCatDETestData } from './partial';
import { TestData as CommonTestData } from '../common';
import { TestRequirements as PartialCatDETestRequirements } from './partial';
import { TestRequirements as CommonTestRequirements } from '../common/index';
import { Manoeuvres as PartialCatDEManoeuvres } from './partial';
import { VehicleChecks as PartialCatDEVehicleChecks } from './partial';
import { JournalData as PartialCatDEJournalData } from './partial';
import { JournalData as CommonJournalData } from '../common/index';
import { Candidate as PartialCatDECandidate } from './partial';
import { Candidate as CommonCandidate } from '../common/index';
import { VehicleDetails as PartialCatDEVehicleDetails } from './partial';
import { VehicleDetails as CommonVehicleDetails } from '../common/index';
import { PassCompletion as PartialPassCompletion } from './partial';
import { UncoupleRecouple as PartialCatDEEUncoupleRecouple } from './partial';
import { SafetyQuestionResult as PartialSafetyQuestionResult } from './partial';
import { PcvDoorExercise as PartialPcvDoorExercise } from './partial';

export declare namespace CatDEUniqueTypes {
  type TestResult = PartialTestResultCatDESchema & TestResultCommonSchema;

  type TestData = PartialCatDETestData & CommonTestData;

  type TestRequirements = PartialCatDETestRequirements & CommonTestRequirements;

  type Manoeuvres = PartialCatDEManoeuvres;

  type VehicleChecks = PartialCatDEVehicleChecks;

  type JournalData = PartialCatDEJournalData & CommonJournalData;

  type Candidate = PartialCatDECandidate & CommonCandidate;

  type VehicleDetails = PartialCatDEVehicleDetails & CommonVehicleDetails;

  type PassCompletion = PartialPassCompletion;

  type UncoupleRecouple = PartialCatDEEUncoupleRecouple;

  type SafetyQuestion = PartialSafetyQuestionResult;

  type PcvDoorExercise = PartialPcvDoorExercise;
}