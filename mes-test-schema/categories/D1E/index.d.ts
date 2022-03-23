/* tslint:disable */
/**
 * This file was initially generated by json-schema-to-typescript.
 * IT HAS SINCE BEEN MOFIIED BY HAND. DO NOT REGENERATE
 */

// Always follow the order of the properties that are in partial.d.ts
import { PartialTestResultCatD1ESchema } from './partial';
import { PreTestDeclarations as CommonPreTestDeclarations, TestResultCommonSchema } from '../common/index';
import { TestData as PartialCatD1ETestData } from './partial';
import { TestData as CommonTestData } from '../common';
import { TestRequirements as PartialCatD1ETestRequirements } from './partial';
import { TestRequirements as CommonTestRequirements } from '../common/index';
import { Manoeuvres as PartialCatD1EManoeuvres } from './partial';
import { VehicleChecks as PartialCatD1EVehicleChecks } from './partial';
import { JournalData as PartialCatD1EJournalData } from './partial';
import { JournalData as CommonJournalData } from '../common/index';
import { Candidate as PartialCatD1ECandidate } from './partial';
import { Candidate as CommonCandidate } from '../common/index';
import { VehicleDetails as PartialCatD1EVehicleDetails } from './partial';
import { VehicleDetails as CommonVehicleDetails } from '../common/index';
import { UncoupleRecouple as PartialCatD1EUncoupleRecouple } from './partial';
import { SafetyQuestions as PartialSafetyQuestions } from './partial';
import { PcvDoorExercise as PartialPcvDoorExercise } from './partial';
import { PreTestDeclarations as PartialPreTestDeclarations } from '../D1E/partial';

export declare namespace CatD1EUniqueTypes {
  type TestResult = PartialTestResultCatD1ESchema & TestResultCommonSchema;

  type TestData = PartialCatD1ETestData & CommonTestData;

  type TestRequirements = PartialCatD1ETestRequirements & CommonTestRequirements;

  type Manoeuvres = PartialCatD1EManoeuvres;

  type VehicleChecks = PartialCatD1EVehicleChecks;

  type JournalData = PartialCatD1EJournalData & CommonJournalData;

  type Candidate = PartialCatD1ECandidate & CommonCandidate;

  type VehicleDetails = PartialCatD1EVehicleDetails & CommonVehicleDetails;

  type UncoupleRecouple = PartialCatD1EUncoupleRecouple;

  type PreTestDeclarations = PartialPreTestDeclarations & CommonPreTestDeclarations;

  type SafetyQuestions = PartialSafetyQuestions;

  type PcvDoorExercise = PartialPcvDoorExercise;
}
