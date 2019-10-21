import { PartialTestResultCatBSchema } from "./B/partial";
import { PartialTestResultCatBESchema } from "./BE/partial";
import { PartialTestResultCatCSchema } from "./C/partial";
import { TestResultCommonSchema } from "./Common/index";

export type TestResultSchemasUnion =
  | StandardTestResultCatBSchema
  | StandardTestResultCatBESchema
  | StandardTestResultCatCSchema;

export type StandardTestResultCatBSchema = PartialTestResultCatBSchema & TestResultCommonSchema;
export type StandardTestResultCatBESchema = PartialTestResultCatBESchema & TestResultCommonSchema;
export type StandardTestResultCatCSchema = PartialTestResultCatCSchema & TestResultCommonSchema;
