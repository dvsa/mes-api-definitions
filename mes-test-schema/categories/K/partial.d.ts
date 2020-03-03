/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The possible outcomes of any manoeuvre performed during the test
 *
 * This interface was referenced by `PartialTestResultCatKSchema`'s JSON-Schema
 * via the `definition` "manoeuvreOutcome".
 */
export type ManoeuvreOutcome = "DF" | "S" | "D";
/**
 * Comments recorded against a fault
 *
 * This interface was referenced by `PartialTestResultCatKSchema`'s JSON-Schema
 * via the `definition` "faultComments".
 */
export type FaultComments = string;
/**
 * Indicator for a manoeuvre being performed during the test
 *
 * This interface was referenced by `PartialTestResultCatKSchema`'s JSON-Schema
 * via the `definition` "manoeuvreIndicator".
 */
export type ManoeuvreIndicator = boolean;
/**
 * Name of the business the candidate relates to
 *
 * This interface was referenced by `PartialTestResultCatKSchema`'s JSON-Schema
 * via the `definition` "businessName".
 */
export type BusinessName = string;
/**
 * Telephone number of the business the candidate relates to
 *
 * This interface was referenced by `PartialTestResultCatKSchema`'s JSON-Schema
 * via the `definition` "businessTelephone".
 */
export type BusinessTelephone = string;

export interface PartialTestResultCatKSchema {
  testData?: TestData;
  journalData: JournalData;
}
/**
 * Data associated with the test
 *
 * This interface was referenced by `PartialTestResultCatKSchema`'s JSON-Schema
 * via the `definition` "testData".
 */
export interface TestData {
  controlledStop?: ControlledStop;
  eyesightTest?: EyesightTest;
  testRequirements?: TestRequirements;
  vehicleChecks?: VehicleChecks;
  highwayCodeSafety?: HighwayCodeSafety;
}
/**
 * This interface was referenced by `PartialTestResultCatKSchema`'s JSON-Schema
 * via the `definition` "controlledStop".
 */
export interface ControlledStop {
  fault?: ManoeuvreOutcome;
  faultComments?: FaultComments;
  selected?: ManoeuvreIndicator;
}
/**
 * This interface was referenced by `PartialTestResultCatKSchema`'s JSON-Schema
 * via the `definition` "eyesightTest".
 */
export interface EyesightTest {
  complete?: boolean;
  /**
   * Whether the candidate has failed the eyesight test
   */
  seriousFault?: boolean;
  faultComments?: FaultComments;
}
/**
 * The test requirements that must be carried out during a test
 *
 * This interface was referenced by `PartialTestResultCatKSchema`'s JSON-Schema
 * via the `definition` "testRequirements".
 */
export interface TestRequirements {
  /**
   * Indicates whether or not this test requirement was carried out
   */
  angledStart?: boolean;
  /**
   * Indicates whether or not this test requirement was carried out
   */
  uphillStartDesignatedStart?: boolean;
}
/**
 * Details of the Show Me and Tell Me questions asked during the test
 *
 * This interface was referenced by `PartialTestResultCatKSchema`'s JSON-Schema
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
 * This interface was referenced by `PartialTestResultCatKSchema`'s JSON-Schema
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
 * This interface was referenced by `PartialTestResultCatKSchema`'s JSON-Schema
 * via the `definition` "highwayCodeSafety".
 */
export interface HighwayCodeSafety {
  /**
   * Whether a driving fault was marked on Highway Code Safety
   */
  drivingFault?: boolean;
  /**
   * Whether a serious fault was marked on Highway Code Safety
   */
  seriousFault?: boolean;
  faultComments?: FaultComments;
}
/**
 * This interface was referenced by `PartialTestResultCatKSchema`'s JSON-Schema
 * via the `definition` "journalData".
 */
export interface JournalData {
  candidate: Candidate;
}
/**
 * This interface was referenced by `PartialTestResultCatKSchema`'s JSON-Schema
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
 * This interface was referenced by `PartialTestResultCatKSchema`'s JSON-Schema
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
