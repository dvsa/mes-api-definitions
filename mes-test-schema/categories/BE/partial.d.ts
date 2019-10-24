/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The possible outcomes of any manoeuvre performed during the test
 *
 * This interface was referenced by `PartialTestResultCatBESchema`'s JSON-Schema
 * via the `definition` "manoeuvreOutcome".
 */
export type ManoeuvreOutcome = "DF" | "S" | "D";
/**
 * Comments recorded against a fault
 *
 * This interface was referenced by `PartialTestResultCatBESchema`'s JSON-Schema
 * via the `definition` "faultComments".
 */
export type FaultComments = string;
/**
 * Indicator for a manoeuvre being performed during the test
 *
 * This interface was referenced by `PartialTestResultCatBESchema`'s JSON-Schema
 * via the `definition` "manoeuvreIndicator".
 */
export type ManoeuvreIndicator = boolean;
/**
 * Code representing the question that was asked
 *
 * This interface was referenced by `PartialTestResultCatBESchema`'s JSON-Schema
 * via the `definition` "questionCode".
 */
export type QuestionCode = string;
/**
 * Description of the question that was asked
 *
 * This interface was referenced by `PartialTestResultCatBESchema`'s JSON-Schema
 * via the `definition` "questionDescription".
 */
export type QuestionDescription = string;
/**
 * Outcome of the question that was asked
 *
 * This interface was referenced by `PartialTestResultCatBESchema`'s JSON-Schema
 * via the `definition` "questionOutcome".
 */
export type QuestionOutcome = "P" | "DF" | "S" | "D";
/**
 * Name of the business the candidate relates to
 *
 * This interface was referenced by `PartialTestResultCatBESchema`'s JSON-Schema
 * via the `definition` "businessName".
 */
export type BusinessName = string;
/**
 * Telephone number of the business the candidate relates to
 *
 * This interface was referenced by `PartialTestResultCatBESchema`'s JSON-Schema
 * via the `definition` "businessTelephone".
 */
export type BusinessTelephone = string;

export interface PartialTestResultCatBESchema {
  passCompletion?: PassCompletion;
  testData?: TestData;
  journalData?: JournalData;
}
/**
 * Finalisation of a successful test outcome
 *
 * This interface was referenced by `PartialTestResultCatBESchema`'s JSON-Schema
 * via the `definition` "passCompletion".
 */
export interface PassCompletion {
  /**
   * Indicate presence of code 78 (automatic) on candidates license
   */
  code78Present: boolean;
}
/**
 * Data associated with the test
 *
 * This interface was referenced by `PartialTestResultCatBESchema`'s JSON-Schema
 * via the `definition` "testData".
 */
export interface TestData {
  uncoupleRecouple?: UncoupleRecouple;
  testRequirements?: TestRequirements;
  manoeuvres?: Manoeuvres;
  vehicleChecks?: VehicleChecks;
}
/**
 * This interface was referenced by `PartialTestResultCatBESchema`'s JSON-Schema
 * via the `definition` "uncoupleRecouple".
 */
export interface UncoupleRecouple {
  fault?: ManoeuvreOutcome;
  faultComments?: FaultComments;
  selected?: ManoeuvreIndicator;
}
/**
 * The test requirements that must be carried out during a test
 *
 * This interface was referenced by `PartialTestResultCatBESchema`'s JSON-Schema
 * via the `definition` "testRequirements".
 */
export interface TestRequirements {
  /**
   * Indicates whether or not this test requirement was carried out
   */
  angledStartControlledStop?: boolean;
  /**
   * Indicates whether or not this test requirement was carried out
   */
  downhillStart?: boolean;
  /**
   * Indicates whether or not this test requirement was carried out
   */
  uphillStart?: boolean;
}
/**
 * The manoeuvres that were carried out during the test and any faults recorded against them
 *
 * This interface was referenced by `PartialTestResultCatBESchema`'s JSON-Schema
 * via the `definition` "manoeuvres".
 */
export interface Manoeuvres {
  reverseLeft?: {
    controlFault?: ManoeuvreOutcome;
    controlFaultComments?: FaultComments;
    observationFault?: ManoeuvreOutcome;
    observationFaultComments?: FaultComments;
    selected?: ManoeuvreIndicator;
  };
}
/**
 * Details of the Show Me and Tell Me questions asked during the test
 *
 * This interface was referenced by `PartialTestResultCatBESchema`'s JSON-Schema
 * via the `definition` "vehicleChecks".
 */
export interface VehicleChecks {
  showMeQuestion?: {
    code?: QuestionCode;
    description?: QuestionDescription;
    outcome?: QuestionOutcome;
  }[];
  showMeTellMeComments?: FaultComments;
  tellMeQuestions?: {
    code?: QuestionCode;
    description?: QuestionDescription;
    outcome?: QuestionOutcome;
  }[];
}
/**
 * This interface was referenced by `PartialTestResultCatBESchema`'s JSON-Schema
 * via the `definition` "journalData".
 */
export interface JournalData {
  candidate?: Candidate;
}
/**
 * This interface was referenced by `PartialTestResultCatBESchema`'s JSON-Schema
 * via the `definition` "candidate".
 */
export interface Candidate {
  businessAddress?: Address;
  businessName?: BusinessName;
  businessTelephone?: BusinessTelephone;
}
/**
 * Details of the address
 *
 * This interface was referenced by `PartialTestResultCatBESchema`'s JSON-Schema
 * via the `definition` "address".
 */
export interface Address {
  /**
   * First line of address
   */
  addressLine1?: string;
  /**
   * Second line of address
   */
  addressLine2?: string;
  /**
   * Third line of address
   */
  addressLine3?: string;
  /**
   * Fourth line of address
   */
  addressLine4?: string;
  /**
   * Fifth line of address
   */
  addressLine5?: string;
  /**
   * The address postcode
   */
  postcode?: string;
}
/**
 * This interface was referenced by `PartialTestResultCatBESchema`'s JSON-Schema
 * via the `definition` "vehicleDetails".
 */
export interface VehicleDetails {
  /**
   * Indicates the height of the vehicle
   */
  vehicleHeight?: number;
  /**
   * Indicates the width of the vehicle
   */
  vehicleWidth?: number;
}
