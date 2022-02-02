/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The possible outcomes of any manoeuvre performed during the test
 *
 * This interface was referenced by `PartialTestResultCatD1EMSchema`'s JSON-Schema
 * via the `definition` "manoeuvreOutcome".
 */
export type ManoeuvreOutcome = "DF" | "S" | "D";
/**
 * Comments recorded against a fault
 *
 * This interface was referenced by `PartialTestResultCatD1EMSchema`'s JSON-Schema
 * via the `definition` "faultComments".
 */
export type FaultComments = string;
/**
 * Indicator for a manoeuvre being performed during the test
 *
 * This interface was referenced by `PartialTestResultCatD1EMSchema`'s JSON-Schema
 * via the `definition` "manoeuvreIndicator".
 */
export type ManoeuvreIndicator = boolean;
/**
 * Name of the business the candidate relates to
 *
 * This interface was referenced by `PartialTestResultCatD1EMSchema`'s JSON-Schema
 * via the `definition` "businessName".
 */
export type BusinessName = string;
/**
 * Telephone number of the business the candidate relates to
 *
 * This interface was referenced by `PartialTestResultCatD1EMSchema`'s JSON-Schema
 * via the `definition` "businessTelephone".
 */
export type BusinessTelephone = string;

export interface PartialTestResultCatD1EMSchema {
  testData?: TestData;
  vehicleDetails?: VehicleDetails;
}
/**
 * Data associated with the test
 *
 * This interface was referenced by `PartialTestResultCatD1EMSchema`'s JSON-Schema
 * via the `definition` "testData".
 */
export interface TestData {
  manoeuvres?: Manoeuvres;
  uncoupleRecouple?: UncoupleRecouple;
}
/**
 * The manoeuvres that were carried out during the test and any faults recorded against them
 *
 * This interface was referenced by `PartialTestResultCatD1EMSchema`'s JSON-Schema
 * via the `definition` "manoeuvres".
 */
export interface Manoeuvres {
  reverseManoeuvre?: Manoeuvre;
}
/**
 * Data needs capturing for a manoeuvre competency
 *
 * This interface was referenced by `PartialTestResultCatD1EMSchema`'s JSON-Schema
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
 * This interface was referenced by `PartialTestResultCatD1EMSchema`'s JSON-Schema
 * via the `definition` "uncoupleRecouple".
 */
export interface UncoupleRecouple {
  fault?: ManoeuvreOutcome;
  faultComments?: FaultComments;
  selected?: ManoeuvreIndicator;
}
/**
 * This interface was referenced by `PartialTestResultCatD1EMSchema`'s JSON-Schema
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
  /**
   * Indicates the number of seats in the vehicle
   */
  numberOfSeats?: number;
  /**
   * The vehicle registration number
   */
  registrationNumber?: string;
}
/**
 * Details of the address
 *
 * This interface was referenced by `PartialTestResultCatD1EMSchema`'s JSON-Schema
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
 * This interface was referenced by `PartialTestResultCatD1EMSchema`'s JSON-Schema
 * via the `definition` "candidate".
 */
export interface Candidate {
  businessAddress?: Address;
  businessName?: BusinessName;
  businessTelephone?: BusinessTelephone;
}
