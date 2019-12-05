/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The possible outcomes of any manoeuvre performed during the test
 */
export type ManoeuvreOutcome = "DF" | "S" | "D";
/**
 * Comments recorded against a fault
 */
export type FaultComments = string;
/**
 * Indicator for a manoeuvre being performed during the test
 */
export type ManoeuvreIndicator = boolean;
/**
 * Name of the business the candidate relates to
 */
export type BusinessName = string;
/**
 * Telephone number of the business the candidate relates to
 */
export type BusinessTelephone = string;

export interface PartialTestResultCatBESchema {
  passCompletion?: PassCompletion;
  testData?: TestData;
  journalData: JournalData;
}
/**
 * Finalisation of a successful test outcome
 */
export interface PassCompletion {}
/**
 * Data associated with the test
 */
export interface TestData {
  uncoupleRecouple?: UncoupleRecouple;
  testRequirements?: TestRequirements;
  manoeuvres?: Manoeuvres;
  vehicleChecks?: VehicleChecks;
}
export interface UncoupleRecouple {
  fault?: ManoeuvreOutcome;
  faultComments?: FaultComments;
  selected?: ManoeuvreIndicator;
}
/**
 * The test requirements that must be carried out during a test
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
 */
export interface Manoeuvres {
  reverseLeft?: Manoeuvre;
}
/**
 * Data needs capturing for a manoeuvre competency
 */
export interface Manoeuvre {
  controlFault?: ManoeuvreOutcome;
  controlFaultComments?: FaultComments;
  observationFault?: ManoeuvreOutcome;
  observationFaultComments?: FaultComments;
  selected?: ManoeuvreIndicator;
}
/**
 * Details of the Show Me and Tell Me questions asked during the test
 */
export interface VehicleChecks {
  showMeQuestions?: QuestionResult[];
  showMeTellMeComments?: FaultComments;
  tellMeQuestions?: QuestionResult[];
}
/**
 * Result of a vehicle checks question
 */
export interface QuestionResult {
  /**
   * Code representing the question that was asked
   */
  code?: string;
  /**
   * Description of the question that was asked
   */
  description?: string;
  /**
   * Outcome of the question that was asked
   */
  outcome?: "P" | "DF" | "S" | "D";
}
export interface JournalData {
  candidate: Candidate;
}
export interface Candidate {
  businessAddress?: Address;
  businessName?: BusinessName;
  businessTelephone?: BusinessTelephone;
}
/**
 * Details of the address
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
