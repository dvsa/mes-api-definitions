/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The gender of an individual, limited to 'M' or 'F' as per TARS master data
 */
export type Gender = "M" | "F";
/**
 * The type of special needs test can be YES, NONE or EXTRA
 */
export type SpecialNeedsCode = "NONE" | "YES" | "EXTRA";
/**
 * The type of vehicle gearbox, if captured
 */
export type VehicleGearbox = "Manual" | "Semi-Automatic" | "Automatic";
/**
 * The reason for the previous test cancellation
 */
export type Initiator = "Act of nature" | "DSA";
/**
 * The details of any previous test cancellations
 */
export type PreviousCancellation = Initiator[];

/**
 * JSON Schema definition for Examiner Work Schedule
 */
export interface ExaminerWorkSchedule {
  examiner?: Examiner;
  /**
   * A collection of test slots, possibly populated with booking data
   */
  testSlots?: TestSlot[];
  /**
   * A collection of the examiner's personal commitment(s)
   */
  personalCommitments?: PersonalCommitment[];
  /**
   * A collection of the examiner's non test activity(s) (associated with a test slot duration)
   */
  nonTestActivities?: NonTestActivity[];
  /**
   * A collection of an examiner's future test slots
   */
  advanceTestSlots?: AdvanceTestSlot[];
  /**
   * A collection of temporary secondments of the examiner to an alternative test centre
   */
  deployments?: Deployment[];
}
/**
 * The examiner details
 */
export interface Examiner {
  /**
   * The examiner's DSA staff number
   */
  staffNumber?: string;
  /**
   * The individual ID of the examiner
   */
  individualId?: number;
  examinerName?: Name;
}
/**
 * Details of the individual's name
 */
export interface Name {
  /**
   * The individual's title
   */
  title?: string;
  /**
   * The individual's forename
   */
  firstName?: string;
  /**
   * The individual's second name
   */
  secondName?: string;
  /**
   * The individual's third name
   */
  thirdName?: string;
  /**
   * The individual's surname
   */
  lastName?: string;
}
/**
 * Details of the test slot
 */
export interface TestSlot {
  slotDetail?: SlotDetail;
  /**
   * A short alpha (and sometimes numeric) code describing the vehicle type in vehicle slot type
   */
  vehicleTypeCode?: string;
  /**
   * A numeric code representing the Vehicle Slot Type
   */
  vehicleSlotTypeCode?: number;
  testCentre?: TestCentre;
  booking?: Booking;
  /**
   * Whether the examiner conducting the test slot is visiting a test centre that's not their home test centre
   */
  examinerVisiting?: boolean;
}
/**
 * Identifier, start time and duration of the slot
 */
export interface SlotDetail {
  /**
   * Unique identifier for the test slot
   */
  slotId?: number;
  /**
   * Start time of the test slot
   */
  start?: string;
  /**
   * The length in minutes of the test slot
   */
  duration?: number;
}
/**
 * Details of the test centre
 */
export interface TestCentre {
  /**
   * Identifier for the test centre
   */
  centreId?: number;
  /**
   * Name of the test centre
   */
  centreName?: string;
  /**
   * Cost centre code for the test centre
   */
  costCode?: string;
}
/**
 * If this slot is booked, this contains the details
 */
export interface Booking {
  candidate?: Candidate;
  application?: Application;
  previousCancellation?: PreviousCancellation;
  business?: Business;
}
/**
 * Details of the candidate booked into the test slot
 */
export interface Candidate {
  /**
   * The id of the test candidate
   */
  candidateId?: number;
  candidateName?: Name;
  /**
   * The candidate's driver number if any, typically (though not always) 16 characters if UK, or 8 digits if NI
   */
  driverNumber?: string;
  /**
   * The candidate's date of birth, formatted as an ISO 8601 date (YYYY-MM-DD)
   */
  dateOfBirth?: string;
  gender?: Gender;
  candidateAddress?: Address;
  /**
   * The candidate's primary telephone number, if any (and consent to leave voicemail has been given)
   */
  primaryTelephone?: string;
  /**
   * The candidate's secondary telephone number, if any (and consent to leave voicemail has been given)
   */
  secondaryTelephone?: string;
  /**
   * The candidate's mobile telephone number, if any (and consent to leave voicemail has been given)
   */
  mobileTelephone?: string;
  /**
   * The candidate's email address, if any
   */
  emailAddress?: string;
  /**
   * The candidate's ADI PRN (potential register number), if an ADI test
   */
  prn?: number;
  /**
   * The number of previous test attempts, if an ADI test
   */
  previousADITests?: number;
  /**
   * A character between A and G representing different categories of ethnicity
   */
  ethnicityCode?: string;
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
/**
 * Details of the test application
 */
export interface Application {
  /**
   * The application's id
   */
  applicationId: number;
  /**
   * The application's booking sequence number
   */
  bookingSequence: number;
  /**
   * The application's reference checksum
   */
  checkDigit: number;
  /**
   * Whether the test is to be conducted using the welsh language
   */
  welshTest?: boolean;
  /**
   * Whether this is an extended test
   */
  extendedTest?: boolean;
  /**
   * Offsite Test location, if any
   */
  meetingPlace?: string;
  /**
   * Whether this is a progressive access test
   */
  progressiveAccess?: boolean;
  /**
   *  The candidate's special test needs, if any
   */
  specialNeeds?: string;
  /**
   * Whether the slot is booked for an extended test
   */
  specialNeedsExtendedTest?: boolean;
  specialNeedsCode?: SpecialNeedsCode;
  /**
   * Indicates whether the examiner needs to check the candidates entitlement evidence(e.g. test application has not been checked with DVLA)
   */
  entitlementCheck?: boolean;
  /**
   * Indicates whether the candidate has previously had a fraud marker set against them
   */
  fitMarker?: boolean;
  /**
   * The integrity case number associated to the candidate
   */
  fitCaseNumber?: string;
  /**
   * Indicates whether the examiner needs to check the candidates entitlement based on new legislation around booking vocational categories
   */
  categoryEntitlementCheck?: boolean;
  /**
   * The number of seats in the vehicle, if captured
   */
  vehicleSeats?: number;
  /**
   * The height of the vehicle in metres, if captured
   */
  vehicleHeight?: number;
  /**
   * The width of the vehicle in metres, if captured
   */
  vehicleWidth?: number;
  /**
   * The length of the vehicle in metres, if captured
   */
  vehicleLength?: number;
  /**
   * The test category reference, if any
   */
  testCategory?: string;
  vehicleGearbox?: VehicleGearbox;
}
/**
 * The business details, only for tests that are booked by a business or trainer booker
 */
export interface Business {
  /**
   * The business id
   */
  businessId?: number;
  /**
   * The business name
   */
  businessName?: string;
  businessAddress?: Address;
  /**
   * The business telephone number, if any
   */
  telephone?: string;
}
/**
 * Details of the test slot
 */
export interface PersonalCommitment {
  /**
   * The commitment id
   */
  commitmentId?: number;
  /**
   * Unique identifier for the test slot
   */
  slotId?: number;
  /**
   * The start date of the personal commitment
   */
  startDate?: string;
  /**
   * The start time of the personal commitment, if any (in practice this will always be populated)
   */
  startTime?: string;
  /**
   * The end date of the personal commitment
   */
  endDate?: string;
  /**
   * The end time of the personal commitment, if any(in practice this will always be populated)
   */
  endTime?: string;
  /**
   * The personal commitment activity code
   */
  activityCode?: string;
  /**
   * The personal commitment activity description
   */
  activityDescription?: string;
}
/**
 * An examiner's non test activity (associated with a test slot duration)
 */
export interface NonTestActivity {
  slotDetail?: SlotDetail;
  /**
   * The non test activity code
   */
  activityCode?: string;
  /**
   * The non test activity description
   */
  activityDescription?: string;
  testCentre?: TestCentre;
}
/**
 * Details of an examiner's future test slot
 */
export interface AdvanceTestSlot {
  slotDetail?: SlotDetail;
  testCentre?: TestCentre;
  /**
   * A short alpha (and sometimes numeric) code describing the vehicle type in vehicle slot type
   */
  vehicleTypeCode?: string;
}
/**
 * Temporary secondment of the examiner to an alternative test centre
 */
export interface Deployment {
  /**
   * The deployment id
   */
  deploymentId?: number;
  testCentre?: TestCentre;
  /**
   * Date of the deployment
   */
  date?: string;
}
