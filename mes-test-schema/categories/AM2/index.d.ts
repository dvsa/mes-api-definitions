/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Category code for the test report
 *
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
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
  | "C1+EM"
  | "C1M"
  | "CCPC"
  | "C+E"
  | "C+EM"
  | "CM"
  | "D"
  | "D1"
  | "D1+E"
  | "D1+EM"
  | "D1M"
  | "DCPC"
  | "D+E"
  | "D+EM"
  | "DM"
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
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
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
 * Base 64 encoded binary data representing a PNG image of the candidates signature
 *
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "signature".
 */
export type Signature = string;
/**
 * The number of the DL196 CBT certificate presented by the candidate
 *
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "DL196CBTCertNumber".
 */
export type DL196CBTCertNumber = string;
/**
 * Method chosen to conduct the independent driving section of the test
 *
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "independentDriving".
 */
export type IndependentDriving = "Sat nav" | "Diagram" | "Traffic signs" | "N/A";
/**
 * Method of transportation the driving examiner conducted the test on
 *
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "modeOfTransport".
 */
export type ModeOfTransport = "Bike to bike" | "Car to bike" | "N/A";
/**
 * Indicates which form of ID was provided by the candidate
 *
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "identification".
 */
export type Identification = "Licence" | "Passport";
/**
 * Predefined values for the type of weather encountered during the test
 *
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
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
 * Indicates whether the bike belongs to a driving school
 *
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "schoolBike".
 */
export type SchoolBike = boolean;
/**
 * The type of gearbox
 *
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "gearboxCategory".
 */
export type GearboxCategory = "Manual" | "Automatic";
/**
 * The count of the number of driving faults recorded against a test element
 *
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "drivingFaultCount".
 */
export type DrivingFaultCount = number;
/**
 * Comments recorded against a fault
 *
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "faultComments".
 */
export type FaultComments = string;
/**
 * Indicator for a serious fault being recorded against a test element
 *
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "seriousFaultIndicator".
 */
export type SeriousFaultIndicator = boolean;
/**
 * Indicator for a dangerous fault being recorded against a test element
 *
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "dangerousFaultIndicator".
 */
export type DangerousFaultIndicator = boolean;

export interface TestResultCatAM2Schema {
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
  testData?: TestData;
}
/**
 * Data brought through from the journal
 *
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
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
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "communicationPreferences".
 */
export interface CommunicationPreferences {
  /**
   * The email address that the candidate agrees their results can be sent to
   */
  updatedEmail: string;
  /**
   * The method of communication by which the candidate agrees to receive their results
   */
  communicationMethod: "Email" | "Post" | "Support Centre" | "Not provided";
  /**
   * The language in which a candidate agrees to perform a test
   */
  conductedLanguage: "English" | "Cymraeg" | "Not provided";
}
/**
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
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
  DL196CBTCertNumber?: DL196CBTCertNumber;
}
/**
 * Indicators for anybody else overseeing the test
 *
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "accompaniment".
 */
export interface Accompaniment {
  /**
   * Indicates whether the ADI was present during the test
   */
  ADI?: boolean;
  /**
   * Indicates whether a DVSA supervisor was present during the test
   */
  supervisor?: boolean;
  /**
   * Indicates whether an interpreter was present during the test
   */
  interpreter?: boolean;
  /**
   * Indicates whether another individual was present during the test
   */
  other?: boolean;
}
/**
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
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
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "testSummary".
 */
export interface TestSummary {
  /**
   * Number of the route that was taken during the test
   */
  routeNumber?: number;
  independentDriving?: IndependentDriving;
  modeOfTransport?: ModeOfTransport;
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
}
/**
 * Recording of the rekey reason
 *
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
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
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "passCompletion".
 */
export interface PassCompletion {
  /**
   * Indicates whether the candidate submitted their provisional driving licence
   */
  provisionalLicenceProvided: boolean;
  /**
   * The PCN issued to the candidate
   */
  passCertificateNumber: string;
}
/**
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "vehicleDetails".
 */
export interface VehicleDetails {
  schoolBike?: SchoolBike;
  gearboxCategory?: GearboxCategory;
  /**
   * The vehicle registration number
   */
  registrationNumber?: string;
}
/**
 * Data associated with the test
 *
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "testData".
 */
export interface TestData {
  testRequirements?: TestRequirements;
  ETA?: ETA;
  drivingFaults?: DrivingFaults;
  seriousFaults?: SeriousFaults;
  dangerousFaults?: DangerousFaults;
  safetyAndBalanceQuestions?: SafetyAndBalanceQuestions;
  eco?: Eco;
  eyesightTest?: EyesightTest;
}
/**
 * The test requirements that must be carried out during a test
 *
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
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
 * Indicates whether the examiner had to take verbal action during the test
 *
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "ETA".
 */
export interface ETA {
  /**
   * Indicates that the examiner had to take verbal action
   */
  verbal?: boolean;
}
/**
 * The driving faults accumulated during the test
 *
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "drivingFaults".
 */
export interface DrivingFaults {
  controlsThrottle?: DrivingFaultCount;
  controlsThrottleComments?: FaultComments;
  controlsClutch?: DrivingFaultCount;
  controlsClutchComments?: FaultComments;
  controlsGears?: DrivingFaultCount;
  controlsGearsComments?: FaultComments;
  controlsFrontBrake?: DrivingFaultCount;
  controlsFrontBrakeComments?: FaultComments;
  controlsRearBrake?: DrivingFaultCount;
  controlsRearBrakeComments?: FaultComments;
  controlsSteering?: DrivingFaultCount;
  controlsSteeringComments?: FaultComments;
  controlsBalanceSlowControl?: DrivingFaultCount;
  controlsBalanceSlowControlComments?: FaultComments;
  ancillaryControls?: DrivingFaultCount;
  ancillaryControlsComments?: FaultComments;
  precautions?: DrivingFaultCount;
  precautionsComments?: FaultComments;
  moveOffSafety?: DrivingFaultCount;
  moveOffSafetyComments?: FaultComments;
  moveOffControl?: DrivingFaultCount;
  moveOffControlComments?: FaultComments;
  useOfMirrorsSignalling?: DrivingFaultCount;
  useOfMirrorsSignallingComments?: FaultComments;
  useOfMirrorsChangeDirection?: DrivingFaultCount;
  useOfMirrorsChangeDirectionComments?: FaultComments;
  useOfMirrorsChangeSpeed?: DrivingFaultCount;
  useOfMirrorsChangeSpeedComments?: FaultComments;
  signalsNecessary?: DrivingFaultCount;
  signalsNecessaryComments?: FaultComments;
  signalsCorrectly?: DrivingFaultCount;
  signalsCorrectlyComments?: FaultComments;
  signalsTimed?: DrivingFaultCount;
  signalsTimedComments?: FaultComments;
  junctionsApproachSpeed?: DrivingFaultCount;
  junctionsApproachSpeedComments?: FaultComments;
  junctionsObservation?: DrivingFaultCount;
  junctionsObservationComments?: FaultComments;
  junctionsTurningRight?: DrivingFaultCount;
  junctionsTurningRightComments?: FaultComments;
  junctionsTurningLeft?: DrivingFaultCount;
  junctionsTurningLeftComments?: FaultComments;
  junctionsCuttingCorners?: DrivingFaultCount;
  junctionsCuttingCornersComments?: FaultComments;
  judgementOvertaking?: DrivingFaultCount;
  judgementOvertakingComments?: FaultComments;
  judgementMeeting?: DrivingFaultCount;
  judgementMeetingComments?: FaultComments;
  judgementCrossing?: DrivingFaultCount;
  judgementCrossingComments?: FaultComments;
  positioningNormalDriving?: DrivingFaultCount;
  positioningNormalDrivingComments?: FaultComments;
  positioningLaneDiscipline?: DrivingFaultCount;
  positioningLaneDisciplineComments?: FaultComments;
  clearanceOrObstructions?: DrivingFaultCount;
  clearanceOrObstructionsComments?: FaultComments;
  followingDistance?: DrivingFaultCount;
  followingDistanceComments?: FaultComments;
  useOfSpeed?: DrivingFaultCount;
  useOfSpeedComments?: FaultComments;
  progressAppropriateSpeed?: DrivingFaultCount;
  progressAppropriateSpeedComments?: FaultComments;
  progressUndueHesitation?: DrivingFaultCount;
  progressUndueHesitationComments?: FaultComments;
  responseToSignsTrafficSigns?: DrivingFaultCount;
  responseToSignsTrafficSignsComments?: FaultComments;
  responseToSignsRoadMarkings?: DrivingFaultCount;
  responseToSignsRoadMarkingsComments?: FaultComments;
  responseToSignsTrafficLights?: DrivingFaultCount;
  responseToSignsTrafficLightsComments?: FaultComments;
  responseToSignsTrafficControllers?: DrivingFaultCount;
  responseToSignsTrafficControllersComments?: FaultComments;
  responseToSignsOtherRoadUsers?: DrivingFaultCount;
  responseToSignsOtherRoadUsersComments?: FaultComments;
  pedestrianCrossings?: DrivingFaultCount;
  pedestrianCrossingsComments?: FaultComments;
  positionNormalStops?: DrivingFaultCount;
  positionNormalStopsComments?: FaultComments;
  awarenessPlanning?: DrivingFaultCount;
  awarenessPlanningComments?: FaultComments;
  bends?: DrivingFaultCount;
  bendsComments?: FaultComments;
  rearObservationSignalling?: DrivingFaultCount;
  rearObservationSignallingComments?: FaultComments;
  rearObservationChangeDirection?: DrivingFaultCount;
  rearObservationChangeDirectionComments?: FaultComments;
  rearObservationChangeSpeed?: DrivingFaultCount;
  rearObservationChangeSpeedComments?: FaultComments;
  positionNormalRiding?: DrivingFaultCount;
  positionNormalRidingComments?: FaultComments;
  judgementOvertakingFiltering?: DrivingFaultCount;
  judgementOvertakingFilteringComments?: FaultComments;
}
/**
 * The serious faults accumulated during the test
 *
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "seriousFaults".
 */
export interface SeriousFaults {
  controlsThrottle?: SeriousFaultIndicator;
  controlsThrottleComments?: FaultComments;
  controlsClutch?: SeriousFaultIndicator;
  controlsClutchComments?: FaultComments;
  controlsGears?: SeriousFaultIndicator;
  controlsGearsComments?: FaultComments;
  controlsFrontBrake?: SeriousFaultIndicator;
  controlsFrontBrakeComments?: FaultComments;
  controlsRearBrake?: SeriousFaultIndicator;
  controlsRearBrakeComments?: FaultComments;
  controlsSteering?: SeriousFaultIndicator;
  controlsSteeringComments?: FaultComments;
  controlsBalanceSlowControl?: SeriousFaultIndicator;
  controlsBalanceSlowControlComments?: FaultComments;
  ancillaryControls?: SeriousFaultIndicator;
  ancillaryControlsComments?: FaultComments;
  precautions?: SeriousFaultIndicator;
  precautionsComments?: FaultComments;
  moveOffSafety?: SeriousFaultIndicator;
  moveOffSafetyComments?: FaultComments;
  moveOffControl?: SeriousFaultIndicator;
  moveOffControlComments?: FaultComments;
  useOfMirrorsSignalling?: SeriousFaultIndicator;
  useOfMirrorsSignallingComments?: FaultComments;
  useOfMirrorsChangeDirection?: SeriousFaultIndicator;
  useOfMirrorsChangeDirectionComments?: FaultComments;
  useOfMirrorsChangeSpeed?: SeriousFaultIndicator;
  useOfMirrorsChangeSpeedComments?: FaultComments;
  signalsNecessary?: SeriousFaultIndicator;
  signalsNecessaryComments?: FaultComments;
  signalsCorrectly?: SeriousFaultIndicator;
  signalsCorrectlyComments?: FaultComments;
  signalsTimed?: SeriousFaultIndicator;
  signalsTimedComments?: FaultComments;
  junctionsApproachSpeed?: SeriousFaultIndicator;
  junctionsApproachSpeedComments?: FaultComments;
  junctionsObservation?: SeriousFaultIndicator;
  junctionsObservationComments?: FaultComments;
  junctionsTurningRight?: SeriousFaultIndicator;
  junctionsTurningRightComments?: FaultComments;
  junctionsTurningLeft?: SeriousFaultIndicator;
  junctionsTurningLeftComments?: FaultComments;
  junctionsCuttingCorners?: SeriousFaultIndicator;
  junctionsCuttingCornersComments?: FaultComments;
  judgementOvertaking?: SeriousFaultIndicator;
  judgementOvertakingComments?: FaultComments;
  judgementMeeting?: SeriousFaultIndicator;
  judgementMeetingComments?: FaultComments;
  judgementCrossing?: SeriousFaultIndicator;
  judgementCrossingComments?: FaultComments;
  positioningNormalDriving?: SeriousFaultIndicator;
  positioningNormalDrivingComments?: FaultComments;
  positioningLaneDiscipline?: SeriousFaultIndicator;
  positioningLaneDisciplineComments?: FaultComments;
  clearanceOrObstructions?: SeriousFaultIndicator;
  clearanceOrObstructionsComments?: FaultComments;
  followingDistance?: SeriousFaultIndicator;
  followingDistanceComments?: FaultComments;
  useOfSpeed?: SeriousFaultIndicator;
  useOfSpeedComments?: FaultComments;
  progressAppropriateSpeed?: SeriousFaultIndicator;
  progressAppropriateSpeedComments?: FaultComments;
  progressUndueHesitation?: SeriousFaultIndicator;
  progressUndueHesitationComments?: FaultComments;
  responseToSignsTrafficSigns?: SeriousFaultIndicator;
  responseToSignsTrafficSignsComments?: FaultComments;
  responseToSignsRoadMarkings?: SeriousFaultIndicator;
  responseToSignsRoadMarkingsComments?: FaultComments;
  responseToSignsTrafficLights?: SeriousFaultIndicator;
  responseToSignsTrafficLightsComments?: FaultComments;
  responseToSignsTrafficControllers?: SeriousFaultIndicator;
  responseToSignsTrafficControllersComments?: FaultComments;
  responseToSignsOtherRoadUsers?: SeriousFaultIndicator;
  responseToSignsOtherRoadUsersComments?: FaultComments;
  pedestrianCrossings?: SeriousFaultIndicator;
  pedestrianCrossingsComments?: FaultComments;
  positionNormalStops?: SeriousFaultIndicator;
  positionNormalStopsComments?: FaultComments;
  awarenessPlanning?: SeriousFaultIndicator;
  awarenessPlanningComments?: FaultComments;
  bends?: SeriousFaultIndicator;
  bendsComments?: FaultComments;
  rearObservationSignalling?: SeriousFaultIndicator;
  rearObservationSignallingComments?: FaultComments;
  rearObservationChangeDirection?: SeriousFaultIndicator;
  rearObservationChangeDirectionComments?: FaultComments;
  rearObservationChangeSpeed?: SeriousFaultIndicator;
  rearObservationChangeSpeedComments?: FaultComments;
  positionNormalRiding?: SeriousFaultIndicator;
  positionNormalRidingComments?: FaultComments;
  judgementOvertakingFiltering?: SeriousFaultIndicator;
  judgementOvertakingFilteringComments?: FaultComments;
}
/**
 * The dangerous faults accumulated during the test
 *
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "dangerousFaults".
 */
export interface DangerousFaults {
  controlsThrottle?: DangerousFaultIndicator;
  controlsThrottleComments?: FaultComments;
  controlsClutch?: DangerousFaultIndicator;
  controlsClutchComments?: FaultComments;
  controlsGears?: DangerousFaultIndicator;
  controlsGearsComments?: FaultComments;
  controlsFrontBrake?: DangerousFaultIndicator;
  controlsFrontBrakeComments?: FaultComments;
  controlsRearBrake?: DangerousFaultIndicator;
  controlsRearBrakeComments?: FaultComments;
  controlsSteering?: DangerousFaultIndicator;
  controlsSteeringComments?: FaultComments;
  controlsBalanceSlowControl?: DangerousFaultIndicator;
  controlsBalanceSlowControlComments?: FaultComments;
  ancillaryControls?: DangerousFaultIndicator;
  ancillaryControlsComments?: FaultComments;
  precautions?: DangerousFaultIndicator;
  precautionsComments?: FaultComments;
  moveOffSafety?: DangerousFaultIndicator;
  moveOffSafetyComments?: FaultComments;
  moveOffControl?: DangerousFaultIndicator;
  moveOffControlComments?: FaultComments;
  useOfMirrorsSignalling?: DangerousFaultIndicator;
  useOfMirrorsSignallingComments?: FaultComments;
  useOfMirrorsChangeDirection?: DangerousFaultIndicator;
  useOfMirrorsChangeDirectionComments?: FaultComments;
  useOfMirrorsChangeSpeed?: DangerousFaultIndicator;
  useOfMirrorsChangeSpeedComments?: FaultComments;
  signalsNecessary?: DangerousFaultIndicator;
  signalsNecessaryComments?: FaultComments;
  signalsCorrectly?: DangerousFaultIndicator;
  signalsCorrectlyComments?: FaultComments;
  signalsTimed?: DangerousFaultIndicator;
  signalsTimedComments?: FaultComments;
  junctionsApproachSpeed?: DangerousFaultIndicator;
  junctionsApproachSpeedComments?: FaultComments;
  junctionsObservation?: DangerousFaultIndicator;
  junctionsObservationComments?: FaultComments;
  junctionsTurningRight?: DangerousFaultIndicator;
  junctionsTurningRightComments?: FaultComments;
  junctionsTurningLeft?: DangerousFaultIndicator;
  junctionsTurningLeftComments?: FaultComments;
  junctionsCuttingCorners?: DangerousFaultIndicator;
  junctionsCuttingCornersComments?: FaultComments;
  judgementOvertaking?: DangerousFaultIndicator;
  judgementOvertakingComments?: FaultComments;
  judgementMeeting?: DangerousFaultIndicator;
  judgementMeetingComments?: FaultComments;
  judgementCrossing?: DangerousFaultIndicator;
  judgementCrossingComments?: FaultComments;
  positioningNormalDriving?: DangerousFaultIndicator;
  positioningNormalDrivingComments?: FaultComments;
  positioningLaneDiscipline?: DangerousFaultIndicator;
  positioningLaneDisciplineComments?: FaultComments;
  clearanceOrObstructions?: DangerousFaultIndicator;
  clearanceOrObstructionsComments?: FaultComments;
  followingDistance?: DangerousFaultIndicator;
  followingDistanceComments?: FaultComments;
  useOfSpeed?: DangerousFaultIndicator;
  useOfSpeedComments?: FaultComments;
  progressAppropriateSpeed?: DangerousFaultIndicator;
  progressAppropriateSpeedComments?: FaultComments;
  progressUndueHesitation?: DangerousFaultIndicator;
  progressUndueHesitationComments?: FaultComments;
  responseToSignsTrafficSigns?: DangerousFaultIndicator;
  responseToSignsTrafficSignsComments?: FaultComments;
  responseToSignsRoadMarkings?: DangerousFaultIndicator;
  responseToSignsRoadMarkingsComments?: FaultComments;
  responseToSignsTrafficLights?: DangerousFaultIndicator;
  responseToSignsTrafficLightsComments?: FaultComments;
  responseToSignsTrafficControllers?: DangerousFaultIndicator;
  responseToSignsTrafficControllersComments?: FaultComments;
  responseToSignsOtherRoadUsers?: DangerousFaultIndicator;
  responseToSignsOtherRoadUsersComments?: FaultComments;
  pedestrianCrossings?: DangerousFaultIndicator;
  pedestrianCrossingsComments?: FaultComments;
  positionNormalStops?: DangerousFaultIndicator;
  positionNormalStopsComments?: FaultComments;
  awarenessPlanning?: DangerousFaultIndicator;
  awarenessPlanningComments?: FaultComments;
  bends?: DangerousFaultIndicator;
  bendsComments?: FaultComments;
  rearObservationSignalling?: DangerousFaultIndicator;
  rearObservationSignallingComments?: FaultComments;
  rearObservationChangeDirection?: DangerousFaultIndicator;
  rearObservationChangeDirectionComments?: FaultComments;
  rearObservationChangeSpeed?: DangerousFaultIndicator;
  rearObservationChangeSpeedComments?: FaultComments;
  positionNormalRiding?: DangerousFaultIndicator;
  positionNormalRidingComments?: FaultComments;
  judgementOvertakingFiltering?: DangerousFaultIndicator;
  judgementOvertakingFilteringComments?: FaultComments;
}
/**
 * Details of the safety and balance questions asked during the test
 *
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "safetyAndBalanceQuestions".
 */
export interface SafetyAndBalanceQuestions {
  safetyQuestions?: QuestionResult[];
  safetyAndBalanceComments?: FaultComments;
  balanceQuestions?: QuestionResult[];
}
/**
 * Result of a vehicle checks question
 *
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
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
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
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
 * This interface was referenced by `TestResultCatAM2Schema`'s JSON-Schema
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
