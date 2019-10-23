import { PartialTestResultCatBSchema } from "./B/partial";
import { PartialTestResultCatBESchema, PassCompletion } from "./BE/partial";
import { PartialTestResultCatCSchema } from "./C/partial";
import { TestResultCommonSchema } from "./Common/index";

import { PassCompletion as CommonPassCompletion } from './common/index';
import { PassCompletion as PartialCatBePassCompletion } from './BE/partial';
export declare namespace CatBe {
  type PassCompletion = PartialCatBePassCompletion & CommonPassCompletion; 
  type TestResultSchema = PartialTestResultCatBSchema & TestResultCommonSchema
}

export type TestResultSchemasUnion =
  | TestResultCatBSchema
  | TestResultCatBESchema
  | TestResultCatCSchema;

export type TestResultCatBSchema = PartialTestResultCatBSchema & TestResultCommonSchema;
export type TestResultCatBESchema = PartialTestResultCatBESchema & TestResultCommonSchema;
export type TestResultCatCSchema = PartialTestResultCatCSchema & TestResultCommonSchema;

var cat: TestResultCatBESchema;

cat.testData.manoeuvres.reverseLeft
cat.passCompletion.

