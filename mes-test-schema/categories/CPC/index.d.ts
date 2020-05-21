/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Category code for the test report
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "categoryCode".
 */
export type CategoryCode =
  | "A"
  | "A1"
  | "A2"
  | "ADI2"
  | "ADI3"
  | "AM"
  | "B"
  | "B1"
  | "B+E"
  | "C"
  | "C1"
  | "C1+E"
  | "CCPC"
  | "C+E"
  | "D"
  | "D1"
  | "D1+E"
  | "DCPC"
  | "D+E"
  | "EUA1M1"
  | "EUA1M2"
  | "EUA2M1"
  | "EUA2M2"
  | "EUAM1"
  | "EUAM2"
  | "EUAMM1"
  | "EUAMM2"
  | "F"
  | "G"
  | "H"
  | "K"
  | "SC";
/**
 * The gender of an individual, limited to 'M' or 'F' as per TARS master data
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "gender".
 */
export type Gender = "M" | "F";
/**
 * Code representing the result of the test
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "activityCode".
 */
export type ActivityCode =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "11"
  | "20"
  | "21"
  | "22"
  | "23"
  | "24"
  | "25"
  | "26"
  | "27"
  | "28"
  | "32"
  | "33"
  | "34"
  | "35"
  | "36"
  | "37"
  | "38"
  | "40"
  | "41"
  | "51"
  | "52"
  | "55"
  | "58"
  | "59"
  | "60"
  | "61"
  | "62"
  | "63"
  | "64"
  | "66"
  | "67"
  | "68"
  | "69"
  | "70"
  | "71"
  | "73"
  | "74"
  | "75"
  | "82"
  | "83";
/**
 * The method of communication by which the candidate agrees to receive their results
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "communicationMethod".
 */
export type CommunicationMethod = "Email" | "Post" | "Support Centre" | "Not provided";
/**
 * The language in which a candidate agrees to perform a test
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "conductedLanguage".
 */
export type ConductedLanguage = "English" | "Cymraeg" | "Not provided";
/**
 * Base 64 encoded binary data representing a PNG image of the candidates signature
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "signature".
 */
export type Signature = string;
/**
 * Indicates which form of ID was provided by the candidate
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "identification".
 */
export type Identification = "Licence" | "Passport";
/**
 * Predefined values for the type of weather encountered during the test
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "weatherConditions".
 */
export type WeatherConditions =
  | "Bright / dry roads"
  | "Bright / wet roads"
  | "Raining through test"
  | "Showers"
  | "Foggy / misty"
  | "Dull / wet roads"
  | "Dull / dry roads"
  | "Snowing"
  | "Icy"
  | "Windy";
/**
 * The type of gearbox
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "gearboxCategory".
 */
export type GearboxCategory = "Manual" | "Automatic";
/**
 * The vehicle configuration
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "configuration".
 */
export type Configuration = "Rigid" | "Articulated" | "Drawbar";
/**
 * Name of the business the candidate relates to
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "businessName".
 */
export type BusinessName = string;
/**
 * Telephone number of the business the candidate relates to
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "businessTelephone".
 */
export type BusinessTelephone = string;

export interface TestResultCatCPCSchema {
  /**
   * Version number
   */
  version: string;
  category: CategoryCode;
  journalData: JournalData;
  activityCode: ActivityCode;
  communicationPreferences?: CommunicationPreferences;
  preTestDeclarations?: PreTestDeclarations;
  accompaniment?: Accompaniment;
  postTestDeclarations?: PostTestDeclarations;
  testSummary?: TestSummary;
  rekeyReason?: RekeyReason;
  /**
   * Whether the test was rekeyed or not
   */
  rekey: boolean;
  /**
   * Date the test was rekeyed
   */
  rekeyDate?: string;
  /**
   * Whether the test was conducted by another examiner
   */
  changeMarker: boolean;
  /**
   * The examiner who the test was booked to
   */
  examinerBooked: number;
  /**
   * The examiner who conducted the test
   */
  examinerConducted: number;
  /**
   * The examiner who keyed the test into the iPad
   */
  examinerKeyed: number;
  passCompletion?: PassCompletion;
  vehicleDetails?: VehicleDetails;
  testData?: TestData;
}
/**
 * Data brought through from the journal
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "journalData".
 */
export interface JournalData {
  examiner: Examiner;
  testCentre: TestCentre;
  testSlotAttributes: TestSlotAttributes;
  candidate: Candidate;
  applicationReference: ApplicationReference;
}
/**
 * The examiner details
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "examiner".
 */
export interface Examiner {
  /**
   * The examiner's DSA staff number
   */
  staffNumber: string;
  /**
   * The individual ID of the examiner
   */
  individualId?: number;
}
/**
 * Details of the test centre
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "testCentre".
 */
export interface TestCentre {
  /**
   * Identifer for the test centre
   */
  centreId: number;
  /**
   * Cost centre code for the test centre
   */
  costCode: string;
  /**
   * Name of the test centre
   */
  centreName?: string;
}
/**
 * The additional attributes of the test slot such as Slot Id, Category, Start Time, etc.
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "testSlotAttributes".
 */
export interface TestSlotAttributes {
  /**
   * Unique identifier for the journal test slot
   */
  slotId: number;
  /**
   * Start time of the test slot
   */
  start: string;
  /**
   * A short alpha (and sometimes numeric) code describing the vehicle type in vehicle slot type
   */
  vehicleTypeCode: string;
  /**
   * Whether the test is to be conducted using the welsh language
   */
  welshTest: boolean;
  /**
   * Special needs code
   */
  specialNeedsCode?: "NONE" | "YES" | "EXTRA";
  /**
   * Whether the candidate has any special needs that require the D255 form to be completed
   */
  specialNeeds: boolean;
  /**
   * The special needs
   */
  specialNeedsArray?: string[];
  /**
   * Whether this is an extended test
   */
  extendedTest: boolean;
  /**
   * Whether the examiner conducting the test slot is visiting a test centre that's not their home test centre
   */
  examinerVisiting?: boolean;
  /**
   * Indicates whether the examiner needs to check the candidates entitlement evidence(e.g. test application has not been checked with DVLA)
   */
  entitlementCheck?: boolean;
  /**
   * The details of any previous test cancellations
   */
  previousCancellation?: ("Act of nature" | "DSA")[];
  /**
   * A description of the types of test intended to be conducted in this slot (e.g. Standard Test / Extended Special Needs Test)
   */
  slotType?: string;
}
/**
 * Details of the candidate booked into the test slot
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "candidate".
 */
export interface Candidate {
  /**
   * The id of the test candidate
   */
  candidateId?: number;
  candidateName?: Name;
  /**
   * The candidate's driver number, typically (though not always) 16 characters if UK, or 8 digits if NI
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
 * Details of the individual's name
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "name".
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
 * Details of the address
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
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
 * The full application identifier, including applicationId, bookingSequence and checkDigit
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "applicationReference".
 */
export interface ApplicationReference {
  /**
   * Unique identifier for each test application
   */
  applicationId: number;
  /**
   * Booking sequence number of the test application
   */
  bookingSequence: number;
  /**
   * Reference checksum for the test application
   */
  checkDigit: number;
}
/**
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "communicationPreferences".
 */
export interface CommunicationPreferences {
  /**
   * The email address that the candidate agrees their results can be sent to
   */
  updatedEmail: string;
  communicationMethod: CommunicationMethod;
  conductedLanguage: ConductedLanguage;
}
/**
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "preTestDeclarations".
 */
export interface PreTestDeclarations {
  /**
   * Whether or not the candidate has declared that their test vehicle has a valid insurance policy
   */
  insuranceDeclarationAccepted: boolean;
  /**
   * Whether or not the candidate has declared that they have lived in the UK for a period acceptable for taking the test
   */
  residencyDeclarationAccepted: boolean;
  preTestSignature: Signature;
}
/**
 * Indicators for anybody else overseeing the test
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "accompaniment".
 */
export interface Accompaniment {
  /**
   * Indicates whether a DVSA supervisor was present during the test
   */
  supervisor?: boolean;
  /**
   * Indicates whether an interpreter was present during the test
   */
  interpreter?: boolean;
}
/**
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "postTestDeclarations".
 */
export interface PostTestDeclarations {
  /**
   * Whether or not the candidate has declared that their health status hasn't changed since their last application
   */
  healthDeclarationAccepted?: boolean;
  /**
   * Indicates whether the candidate acknowledges receipt of the PCN
   */
  passCertificateNumberReceived?: boolean;
  postTestSignature?: Signature;
}
/**
 * Recording of other characteristics of the test
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "testSummary".
 */
export interface TestSummary {
  /**
   * Physical description of the candidate
   */
  candidateDescription?: string;
  /**
   * Indicates whether anybody else (e.g. ADI) was present for the debrief
   */
  debriefWitnessed?: boolean;
  identification?: Identification;
  /**
   * Description of the type of weather encountered during the test
   */
  weatherConditions?: WeatherConditions[];
  /**
   * Indicates whether a D255 form needs to be completed
   */
  D255?: boolean;
  /**
   * Any comments that the DE wants to record about the test
   */
  additionalInformation?: string;
  /**
   * Assessment report for the test
   */
  assessmentReport?: string;
}
/**
 * Recording of the rekey reason
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "rekeyReason".
 */
export interface RekeyReason {
  transfer?: Transfer;
  ipadIssue?: IpadIssue;
  other?: Other;
}
/**
 * Recording of if a rekey was due to a transfer
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "transfer".
 */
export interface Transfer {
  /**
   * If this option was selected
   */
  selected?: boolean;
}
/**
 * Recording of if a rekey was due to a iPad issue
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "ipadIssue".
 */
export interface IpadIssue {
  /**
   * If this option was selected
   */
  selected?: boolean;
  /**
   * If the iPad was not used due to a technical fault
   */
  technicalFault?: boolean;
  /**
   * If the iPad was not used as it has been lost
   */
  lost?: boolean;
  /**
   * If the iPad was not used as it has been stolen
   */
  stolen?: boolean;
  /**
   * If the iPad was not used as it is broken
   */
  broken?: boolean;
}
/**
 * Recording of if a rekey was due to a different reason
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "other".
 */
export interface Other {
  /**
   * If this option was selected
   */
  selected?: boolean;
  /**
   * The reason this option was selected
   */
  reason?: string;
}
/**
 * Finalisation of a successful test outcome
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "passCompletion".
 */
export interface PassCompletion {
  /**
   * The PCN issued to the candidate
   */
  passCertificateNumber: string;
}
/**
 * Details about the vehicle to be used for the test
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "vehicleDetails".
 */
export interface VehicleDetails {
  /**
   * The vehicle registration number
   */
  registrationNumber: string;
  gearboxCategory: GearboxCategory;
  configuration: Configuration;
}
/**
 * Data associated with the test
 *
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "testData".
 */
export interface TestData {
  /**
   * Combination of questions selected
   */
  combination: string;
  questions: Question[];
}
/**
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "question".
 */
export interface Question {
  /**
   * Short code for Question
   */
  questionCode: string;
  /**
   * Question description
   */
  title: string;
  /**
   * Question sub-description
   */
  subtitle: string;
  /**
   * Additional questions that might be asked
   */
  additionalItems: string[];
  /**
   * Answers to the question
   */
  answers: Answers[];
  /**
   * Score in percent
   */
  score: number;
}
/**
 * This interface was referenced by `TestResultCatCPCSchema`'s JSON-Schema
 * via the `definition` "answers".
 */
export interface Answers {
  selected: boolean;
  label: string;
}
