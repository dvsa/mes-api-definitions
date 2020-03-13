/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Comments recorded against a fault
 *
 * This interface was referenced by `PartialTestResultADI2Schema`'s JSON-Schema
 * via the `definition` "faultComments".
 */
export type FaultComments = string;
/**
 * The possible outcomes of any manoeuvre performed during the test
 *
 * This interface was referenced by `PartialTestResultADI2Schema`'s JSON-Schema
 * via the `definition` "manoeuvreOutcome".
 */
export type ManoeuvreOutcome = "DF" | "S" | "D";

export interface PartialTestResultADI2Schema {
  testData?: TestData;
  vehicleDetails?: VehicleDetails;
  preTestDeclarations?: PreTestDeclarations;
}
/**
 * This interface was referenced by `PartialTestResultADI2Schema`'s JSON-Schema
 * via the `definition` "testData".
 */
export interface TestData {
  eyesightTest?: EyesightTest;
  testRequirements?: TestRequirements;
  manoeuvres?: Manoeuvres[];
  vehicleChecks?: VehicleChecks;
  controlledStop?: ControlledStop;
}
/**
 * This interface was referenced by `PartialTestResultADI2Schema`'s JSON-Schema
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
 * This interface was referenced by `PartialTestResultADI2Schema`'s JSON-Schema
 * via the `definition` "testRequirements".
 */
export interface TestRequirements {
  /**
   * Indicates whether or not this test requirement was carried out
   */
  uphillStart?: boolean;
  /**
   * Indicates whether or not this test requirement was carried out
   */
  downhillStart?: boolean;
  /**
   * Indicates whether or not this test requirement was carried out
   */
  angledStart?: boolean;
}
/**
 * The manoeuvres that were carried out during the test and any faults recorded against them
 *
 * This interface was referenced by `PartialTestResultADI2Schema`'s JSON-Schema
 * via the `definition` "manoeuvres".
 */
export interface Manoeuvres {
  forwardPark?: Manoeuvre;
  reverseParkCarpark?: Manoeuvre;
  reverseParkRoad?: Manoeuvre;
  reverseRight?: Manoeuvre;
}
/**
 * Data needs capturing for a manoeuvre competency
 *
 * This interface was referenced by `PartialTestResultADI2Schema`'s JSON-Schema
 * via the `definition` "manoeuvre".
 */
export interface Manoeuvre {
  controlFault?: ManoeuvreOutcome;
  controlFaultComments?: FaultComments;
  observationFault?: ManoeuvreOutcome;
  observationFaultComments?: FaultComments;
  /**
   * Indicator for a manoeuvre being performed during the test
   */
  selected?: boolean;
}
/**
 * Details of the Show Me and Tell Me questions asked during the test
 *
 * This interface was referenced by `PartialTestResultADI2Schema`'s JSON-Schema
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
 * This interface was referenced by `PartialTestResultADI2Schema`'s JSON-Schema
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
 * This interface was referenced by `PartialTestResultADI2Schema`'s JSON-Schema
 * via the `definition` "controlledStop".
 */
export interface ControlledStop {
  fault?: ManoeuvreOutcome;
  faultComments?: FaultComments;
  /**
   * Indicator for a manoeuvre being performed during the test
   */
  selected?: boolean;
}
/**
 * This interface was referenced by `PartialTestResultADI2Schema`'s JSON-Schema
 * via the `definition` "vehicleDetails".
 */
export interface VehicleDetails {
  /**
   * Indicates whether the vehicle belongs to a driving school
   */
  schoolCar?: boolean;
  /**
   * Indicates whether or not the vehicle has dual controls fitted
   */
  dualControls?: boolean;
}
/**
 * This interface was referenced by `PartialTestResultADI2Schema`'s JSON-Schema
 * via the `definition` "preTestDeclarations".
 */
export interface PreTestDeclarations {
  /**
   * Whether or not the candidate has declared that their test vehicle has a valid insurance policy
   */
  insuranceDeclarationAccepted: boolean;
  /**
   * Base 64 encoded binary data representing a PNG image of the candidates signature
   */
  preTestSignature: string;
}
