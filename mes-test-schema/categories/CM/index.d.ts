/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Category code for the test report
 *
 * This interface was referenced by `TestResultCatCMSchema`'s JSON-Schema
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
 * Code representing the result of the test
 *
 * This interface was referenced by `TestResultCatCMSchema`'s JSON-Schema
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
  | "76"
  | "77"
  | "78"
  | "79"
  | "80"
  | "81"
  | "82"
  | "83";
/**
 * The type of gearbox
 *
 * This interface was referenced by `TestResultCatCMSchema`'s JSON-Schema
 * via the `definition` "gearboxCategory".
 */
export type GearboxCategory = "Manual" | "Automatic";

export interface TestResultCatCMSchema {
  /**
   * Version number
   */
  version: string;
  /**
   * App version number
   */
  appVersion?: string;
  category: CategoryCode;
  journalData: JournalData;
  activityCode: ActivityCode;
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
  examinerBooked: number | string;
  /**
   * The examiner who conducted the test
   */
  examinerConducted: number | string;
  /**
   * The examiner who keyed the test into the iPad
   */
  examinerKeyed: number;
  passCompletion?: PassCompletion;
  vehicleDetails?: VehicleDetails;
  communicationPreferences?: CommunicationPreferences;
  testSummary?: TestSummary;
}
/**
 * Data brought through from the journal
 *
 * This interface was referenced by `TestResultCatCMSchema`'s JSON-Schema
 * via the `definition` "journalData".
 */
export interface JournalData {
  /**
   * The examiner details
   */
  examiner: {
    /**
     * The examiner's DSA staff number
     */
    staffNumber: string;
    /**
     * The individual ID of the examiner
     */
    individualId?: number;
  };
  /**
   * Details of the test centre
   */
  testCentre: {
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
  };
  /**
   * The additional attributes of the test slot such as Slot Id, Category, Start Time, etc.
   */
  testSlotAttributes: {
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
  };
  /**
   * Details of the candidate booked into the test slot
   */
  candidate: {
    /**
     * The id of the test candidate
     */
    candidateId?: number;
    /**
     * Details of the individual's name
     */
    candidateName?: {
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
    };
    /**
     * The candidate's driver number, typically (though not always) 16 characters if UK, or 8 digits if NI
     */
    driverNumber?: string;
    /**
     * The candidate's date of birth, formatted as an ISO 8601 date (YYYY-MM-DD)
     */
    dateOfBirth?: string;
    /**
     * The gender of an individual, limited to 'M' or 'F' as per TARS master data
     */
    gender?: "M" | "F";
    /**
     * Details of the address
     */
    candidateAddress?: {
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
    };
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
  };
  /**
   * The full application identifier, including applicationId, bookingSequence and checkDigit
   */
  applicationReference: {
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
  };
}
/**
 * Recording of the rekey reason
 *
 * This interface was referenced by `TestResultCatCMSchema`'s JSON-Schema
 * via the `definition` "rekeyReason".
 */
export interface RekeyReason {
  /**
   * Recording of if a rekey was due to a transfer
   */
  transfer?: {
    /**
     * If this option was selected
     */
    selected?: boolean;
  };
  /**
   * Recording of if a rekey was due to a iPad issue
   */
  ipadIssue?: {
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
  };
  /**
   * Recording of if a rekey was due to a different reason
   */
  other?: {
    /**
     * If this option was selected
     */
    selected?: boolean;
    /**
     * The reason this option was selected
     */
    reason?: string;
  };
}
/**
 * Finalisation of a successful test outcome
 *
 * This interface was referenced by `TestResultCatCMSchema`'s JSON-Schema
 * via the `definition` "passCompletion".
 */
export interface PassCompletion {
  /**
   * The PCN issued to the candidate
   */
  passCertificateNumber: string;
}
/**
 * This interface was referenced by `TestResultCatCMSchema`'s JSON-Schema
 * via the `definition` "vehicleDetails".
 */
export interface VehicleDetails {
  gearboxCategory?: GearboxCategory;
}
/**
 * This interface was referenced by `TestResultCatCMSchema`'s JSON-Schema
 * via the `definition` "communicationPreferences".
 */
export interface CommunicationPreferences {
  /**
   * The language in which a candidate agrees to perform a test
   */
  conductedLanguage: "English" | "Cymraeg" | "Not provided";
}
/**
 * Recording of other characteristics of the test
 *
 * This interface was referenced by `TestResultCatCMSchema`'s JSON-Schema
 * via the `definition` "testSummary".
 */
export interface TestSummary {
  /**
   * Indicates whether a D255 form needs to be completed
   */
  D255?: boolean;
}
