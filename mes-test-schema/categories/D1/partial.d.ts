/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The possible outcomes of any manoeuvre performed during the test
 *
 * This interface was referenced by `PartialTestResultCatD1Schema`'s JSON-Schema
 * via the `definition` "manoeuvreOutcome".
 */
export type ManoeuvreOutcome = "DF" | "S" | "D";
/**
 * Comments recorded against a fault
 *
 * This interface was referenced by `PartialTestResultCatD1Schema`'s JSON-Schema
 * via the `definition` "faultComments".
 */
export type FaultComments = string;
/**
 * Indicator for a manoeuvre being performed during the test
 *
 * This interface was referenced by `PartialTestResultCatD1Schema`'s JSON-Schema
 * via the `definition` "manoeuvreIndicator".
 */
export type ManoeuvreIndicator = boolean;
/**
 * Name of the business the candidate relates to
 *
 * This interface was referenced by `PartialTestResultCatD1Schema`'s JSON-Schema
 * via the `definition` "businessName".
 */
export type BusinessName = string;
/**
 * Telephone number of the business the candidate relates to
 *
 * This interface was referenced by `PartialTestResultCatD1Schema`'s JSON-Schema
 * via the `definition` "businessTelephone".
 */
export type BusinessTelephone = string;
/**
 * Indicate presence of code 78 (automatic) on candidates license
 *
 * This interface was referenced by `PartialTestResultCatD1Schema`'s JSON-Schema
 * via the `definition` "code78Present".
 */
export type Code78Present = boolean;

export interface PartialTestResultCatD1Schema {
  testData?: TestData;
  journalData: JournalData;
  vehicleDetails?: VehicleDetails;
}
/**
 * Data associated with the test
 *
 * This interface was referenced by `PartialTestResultCatD1Schema`'s JSON-Schema
 * via the `definition` "testData".
 */
export interface TestData {
  testRequirements?: TestRequirements;
  manoeuvres?: Manoeuvres;
  vehicleChecks?: VehicleChecks;
  pcvDoorExercise?: PcvDoorExercise;
  safetyQuestions?: SafetyQuestionResult[];
}
/**
 * The test requirements that must be carried out during a test
 *
 * This interface was referenced by `PartialTestResultCatD1Schema`'s JSON-Schema
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
  /**
   * Indicates whether or not this test requirement was carried out
   */
  busStop1?: boolean;
  /**
   * Indicates whether or not this test requirement was carried out
   */
  busStop2?: boolean;
}
/**
 * The manoeuvres that were carried out during the test and any faults recorded against them
 *
 * This interface was referenced by `PartialTestResultCatD1Schema`'s JSON-Schema
 * via the `definition` "manoeuvres".
 */
export interface Manoeuvres {
  reverseLeft?: Manoeuvre;
}
/**
 * Data needs capturing for a manoeuvre competency
 *
 * This interface was referenced by `PartialTestResultCatD1Schema`'s JSON-Schema
 * via the `definition` "manoeuvre".
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
 *
 * This interface was referenced by `PartialTestResultCatD1Schema`'s JSON-Schema
 * via the `definition` "vehicleChecks".
 */
export interface VehicleChecks {
  showMeQuestions?: QuestionResult[];
  showMeTellMeComments?: FaultComments;
  tellMeQuestions?: QuestionResult[];
}
/**
 * Result of a vehicle checks question
 *
 * This interface was referenced by `PartialTestResultCatD1Schema`'s JSON-Schema
 * via the `definition` "questionResult".
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
/**
 * This interface was referenced by `PartialTestResultCatD1Schema`'s JSON-Schema
 * via the `definition` "pcvDoorExercise".
 */
export interface PcvDoorExercise {
  /**
   * Whether a driving fault was marked on the PCV Door Exercise
   */
  drivingFault?: boolean;
  /**
   * Whether a serious fault was marked on the PCV Door Exercise
   */
  seriousFault?: boolean;
  /**
   * Whether a dangerous fault was marked on the PCV Door Exercise
   */
  dangerousFault?: boolean;
  drivingFaultComments?: FaultComments;
  seriousFaultComments?: FaultComments;
  dangerousFaultComments?: FaultComments;
}
/**
 * Result of a safety question
 *
 * This interface was referenced by `PartialTestResultCatD1Schema`'s JSON-Schema
 * via the `definition` "safetyQuestionResult".
 */
export interface SafetyQuestionResult {
  /**
   * Description of the question that was asked
   */
  description?: string;
  /**
   * Outcome of the question that was asked
   */
  outcome?: "P" | "DF" | "S" | "D";
}
/**
 * This interface was referenced by `PartialTestResultCatD1Schema`'s JSON-Schema
 * via the `definition` "journalData".
 */
export interface JournalData {
  candidate: Candidate;
}
/**
 * This interface was referenced by `PartialTestResultCatD1Schema`'s JSON-Schema
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
 * This interface was referenced by `PartialTestResultCatD1Schema`'s JSON-Schema
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
 * This interface was referenced by `PartialTestResultCatD1Schema`'s JSON-Schema
 * via the `definition` "vehicleDetails".
 */
export interface VehicleDetails {
  /**
   * Indicates the length of the vehicle
   */
  vehicleLength?: number;
  /**
   * Indicates the width of the vehicle
   */
  vehicleWidth?: number;
}
