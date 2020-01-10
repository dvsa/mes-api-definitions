/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Comments recorded against a fault
 *
 * This interface was referenced by `PartialTestResultCatBSchema`'s JSON-Schema
 * via the `definition` "faultComments".
 */
export type FaultComments = string;
/**
 * The possible outcomes of any manoeuvre performed during the test
 *
 * This interface was referenced by `PartialTestResultCatBSchema`'s JSON-Schema
 * via the `definition` "manoeuvreOutcome".
 */
export type ManoeuvreOutcome = "DF" | "S" | "D";
/**
 * Indicator for a manoeuvre being performed during the test
 *
 * This interface was referenced by `PartialTestResultCatBSchema`'s JSON-Schema
 * via the `definition` "manoeuvreIndicator".
 */
export type ManoeuvreIndicator = boolean;
/**
 * Indicates whether the vehicle belongs to a driving school
 *
 * This interface was referenced by `PartialTestResultCatBSchema`'s JSON-Schema
 * via the `definition` "schoolCar".
 */
export type SchoolCar = boolean;
/**
 * Indicates whether or not the vehicle has dual controls fitted
 *
 * This interface was referenced by `PartialTestResultCatBSchema`'s JSON-Schema
 * via the `definition` "dualControls".
 */
export type DualControls = boolean;

export interface PartialTestResultCatBSchema {
  instructorDetails?: InstructorDetails;
  testData?: TestData;
  vehicleDetails?: VehicleDetails;
}
/**
 * Details about the candidate's driving instructor
 *
 * This interface was referenced by `PartialTestResultCatBSchema`'s JSON-Schema
 * via the `definition` "instructorDetails".
 */
export interface InstructorDetails {
  /**
   * The instructor's registration number
   */
  registrationNumber?: number;
}
/**
 * This interface was referenced by `PartialTestResultCatBSchema`'s JSON-Schema
 * via the `definition` "testData".
 */
export interface TestData {
  eyesightTest?: EyesightTest;
  controlledStop?: ControlledStop;
  testRequirements?: TestRequirements;
  manoeuvres?: Manoeuvres;
  vehicleChecks?: VehicleChecks;
  eco?: Eco;
  ETA?: ETA;
}
/**
 * This interface was referenced by `PartialTestResultCatBSchema`'s JSON-Schema
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
 * This interface was referenced by `PartialTestResultCatBSchema`'s JSON-Schema
 * via the `definition` "controlledStop".
 */
export interface ControlledStop {
  fault?: ManoeuvreOutcome;
  faultComments?: FaultComments;
  selected?: ManoeuvreIndicator;
}
/**
 * The test requirements that must be carried out during a test
 *
 * This interface was referenced by `PartialTestResultCatBSchema`'s JSON-Schema
 * via the `definition` "testRequirements".
 */
export interface TestRequirements {
  /**
   * Indicates whether or not this test requirement was carried out
   */
  normalStart1?: boolean;
  /**
   * Indicates whether or not this test requirement was carried out
   */
  normalStart2?: boolean;
  /**
   * Indicates whether or not this test requirement was carried out
   */
  angledStart?: boolean;
  /**
   * Indicates whether or not this test requirement was carried out
   */
  hillStart?: boolean;
}
/**
 * The manoeuvres that were carried out during the test and any faults recorded against them
 *
 * This interface was referenced by `PartialTestResultCatBSchema`'s JSON-Schema
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
 * This interface was referenced by `PartialTestResultCatBSchema`'s JSON-Schema
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
 * This interface was referenced by `PartialTestResultCatBSchema`'s JSON-Schema
 * via the `definition` "vehicleChecks".
 */
export interface VehicleChecks {
  showMeQuestion?: QuestionResult;
  showMeTellMeComments?: FaultComments;
  tellMeQuestion?: QuestionResult;
}
/**
 * Result of a vehicle checks question
 *
 * This interface was referenced by `PartialTestResultCatBSchema`'s JSON-Schema
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
 * Assessment of the eco friendly manner of driving
 *
 * This interface was referenced by `PartialTestResultCatBSchema`'s JSON-Schema
 * via the `definition` "eco".
 */
export interface Eco {
  /**
   * Indicates that the eco friendly manner of driving has been assessed
   */
  completed?: boolean;
  /**
   * Indicates that advice was given on the Control aspect of eco driving
   */
  adviceGivenControl?: boolean;
  /**
   * Indicates that advice was given on the Planning aspect of eco driving
   */
  adviceGivenPlanning?: boolean;
}
/**
 * Indicates whether the examiner had to take physical or verbal action during the test
 *
 * This interface was referenced by `PartialTestResultCatBSchema`'s JSON-Schema
 * via the `definition` "ETA".
 */
export interface ETA {
  /**
   * Indicates that the examiner had to take physical action
   */
  physical?: boolean;
  /**
   * Indicates that the examiner had to take verbal action
   */
  verbal?: boolean;
}
/**
 * This interface was referenced by `PartialTestResultCatBSchema`'s JSON-Schema
 * via the `definition` "vehicleDetails".
 */
export interface VehicleDetails {
  schoolCar?: SchoolCar;
  dualControls?: DualControls;
}
