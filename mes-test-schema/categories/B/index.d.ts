/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The reason for the previous test cancellation
 */
export type Initiator = "Act of nature" | "DSA";
/**
 * The gender of an individual, limited to 'M' or 'F' as per TARS master data
 */
export type Gender = "M" | "F";
/**
 * Code representing the result of the test
 */
export type ActivityCode =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
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
 */
export type CommunicationMethod = "Email" | "Post" | "Support Centre" | "Not provided";
/**
 * The language in which a candidate agrees to perform a test
 */
export type ConductedLanguage = "English" | "Cymraeg" | "Not provided";
/**
 * Base 64 encoded binary data representing a PNG image of the candidates signature
 */
export type Signature = string;
/**
 * The type of gearbox
 */
export type GearboxCategory = "Manual" | "Automatic";
/**
 * Code representing the question that was asked
 */
export type QuestionCode = string;
/**
 * Description of the question that was asked
 */
export type QuestionDescription = string;
/**
 * Outcome of the question that was asked
 */
export type QuestionOutcome = "P" | "DF" | "S" | "D";
/**
 * Comments recorded against a fault
 */
export type FaultComments = string;
/**
 * Indicator for a manoeuvre being performed during the test
 */
export type ManoeuvreIndicator = boolean;
/**
 * The possible outcomes of any manoeuvre performed during the test
 */
export type ManoeuvreOutcome = "DF" | "S" | "D";
/**
 * The count of the number of driving faults recorded against a test element
 */
export type DrivingFaultCount = number;
/**
 * Indicator for a serious fault being recorded against a test element
 */
export type SeriousFaultIndicator = boolean;
/**
 * Indicator for a dangerous fault being recorded against a test element
 */
export type DangerousFaultIndicator = boolean;
/**
 * Method chosen to conduct the independent driving section of the test
 */
export type IndependentDriving = "Sat nav" | "Traffic signs" | "N/A";
/**
 * Indicates which form of ID was provided by the candidate
 */
export type Identification = "Licence" | "Passport";
/**
 * Predefined values for the type of weather encountered during the test
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

export interface StandardCarTestCATBSchema {
  /**
   * Category code for the test report
   */
  category: string;
  journalData: JournalData;
  activityCode: ActivityCode;
  communicationPreferences?: CommunicationPreferences;
  preTestDeclarations?: PreTestDeclarations;
  accompaniment?: Accompaniment;
  vehicleDetails?: VehicleDetails;
  instructorDetails?: InstructorDetails;
  testData?: TestData;
  passCompletion?: PassCompletion;
  postTestDeclarations?: PostTestDeclarations;
  testSummary?: TestSummary;
  /**
   * Whether the test was rekeyed or not
   */
  rekey: boolean;
}
/**
 * Data brought through from the journal
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
  previousCancellation?: Initiator[];
  /**
   * A description of the types of test intended to be conducted in this slot (e.g. Standard Test / Extended Special Needs Test)
   */
  slotType?: string;
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
export interface CommunicationPreferences {
  /**
   * The email address that the candidate agrees their results can be sent to
   */
  updatedEmail: string;
  communicationMethod: CommunicationMethod;
  conductedLanguage: ConductedLanguage;
}
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
 * Details about the vehicle to be used for the test
 */
export interface VehicleDetails {
  /**
   * The vehicle registration number
   */
  registrationNumber?: string;
  gearboxCategory?: GearboxCategory;
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
 * Details about the candidate's driving instructor
 */
export interface InstructorDetails {
  /**
   * The instructor's registration number
   */
  registrationNumber?: number;
}
/**
 * Data associated with the test
 */
export interface TestData {
  vehicleChecks?: VehicleChecks;
  testRequirements?: TestRequirements;
  manoeuvres?: Manoeuvres;
  controlledStop?: ControlledStop;
  drivingFaults?: DrivingFaults;
  seriousFaults?: SeriousFaults;
  dangerousFaults?: DangerousFaults;
  eco?: Eco;
  ETA?: ETA;
  faultSummary?: FaultSummary;
  eyesightTest?: EyesightTest;
}
/**
 * Details of the Show Me and Tell Me questions asked during the test
 */
export interface VehicleChecks {
  tellMeQuestion?: {
    code?: QuestionCode;
    description?: QuestionDescription;
    outcome?: QuestionOutcome;
  };
  showMeQuestion?: {
    code?: QuestionCode;
    description?: QuestionDescription;
    outcome?: QuestionOutcome;
  };
  showMeTellMeComments?: FaultComments;
}
/**
 * The test requirements that must be carried out during a test
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
 */
export interface Manoeuvres {
  reverseRight?: {
    selected?: ManoeuvreIndicator;
    controlFault?: ManoeuvreOutcome;
    observationFault?: ManoeuvreOutcome;
    controlFaultComments?: FaultComments;
    observationFaultComments?: FaultComments;
  };
  reverseParkRoad?: {
    selected?: ManoeuvreIndicator;
    controlFault?: ManoeuvreOutcome;
    observationFault?: ManoeuvreOutcome;
    controlFaultComments?: FaultComments;
    observationFaultComments?: FaultComments;
  };
  reverseParkCarpark?: {
    selected?: ManoeuvreIndicator;
    controlFault?: ManoeuvreOutcome;
    observationFault?: ManoeuvreOutcome;
    controlFaultComments?: FaultComments;
    observationFaultComments?: FaultComments;
  };
  forwardPark?: {
    selected?: ManoeuvreIndicator;
    controlFault?: ManoeuvreOutcome;
    observationFault?: ManoeuvreOutcome;
    controlFaultComments?: FaultComments;
    observationFaultComments?: FaultComments;
  };
}
export interface ControlledStop {
  selected?: ManoeuvreIndicator;
  fault?: ManoeuvreOutcome;
  faultComments?: FaultComments;
}
/**
 * The driving faults accumulated during the test
 */
export interface DrivingFaults {
  controlsAccelerator?: DrivingFaultCount;
  controlsAcceleratorComments?: FaultComments;
  controlsClutch?: DrivingFaultCount;
  controlsClutchComments?: FaultComments;
  controlsGears?: DrivingFaultCount;
  controlsGearsComments?: FaultComments;
  controlsFootbrake?: DrivingFaultCount;
  controlsFootbrakeComments?: FaultComments;
  controlsParkingBrake?: DrivingFaultCount;
  controlsParkingBrakeComments?: FaultComments;
  controlsSteering?: DrivingFaultCount;
  controlsSteeringComments?: FaultComments;
  precautions?: DrivingFaultCount;
  precautionsComments?: FaultComments;
  ancillaryControls?: DrivingFaultCount;
  ancillaryControlsComments?: FaultComments;
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
  clearance?: DrivingFaultCount;
  clearanceComments?: FaultComments;
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
}
/**
 * The serious faults accumulated during the test
 */
export interface SeriousFaults {
  controlsAccelerator?: SeriousFaultIndicator;
  controlsAcceleratorComments?: FaultComments;
  controlsClutch?: SeriousFaultIndicator;
  controlsClutchComments?: FaultComments;
  controlsGears?: SeriousFaultIndicator;
  controlsGearsComments?: FaultComments;
  controlsFootbrake?: SeriousFaultIndicator;
  controlsFootbrakeComments?: FaultComments;
  controlsParkingBrake?: SeriousFaultIndicator;
  controlsParkingBrakeComments?: FaultComments;
  controlsSteering?: SeriousFaultIndicator;
  controlsSteeringComments?: FaultComments;
  precautions?: SeriousFaultIndicator;
  precautionsComments?: FaultComments;
  ancillaryControls?: SeriousFaultIndicator;
  ancillaryControlsComments?: FaultComments;
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
  clearance?: SeriousFaultIndicator;
  clearanceComments?: FaultComments;
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
}
/**
 * The dangerous faults accumulated during the test
 */
export interface DangerousFaults {
  controlsAccelerator?: DangerousFaultIndicator;
  controlsAcceleratorComments?: FaultComments;
  controlsClutch?: DangerousFaultIndicator;
  controlsClutchComments?: FaultComments;
  controlsGears?: DangerousFaultIndicator;
  controlsGearsComments?: FaultComments;
  controlsFootbrake?: DangerousFaultIndicator;
  controlsFootbrakeComments?: FaultComments;
  controlsParkingBrake?: DangerousFaultIndicator;
  controlsParkingBrakeComments?: FaultComments;
  controlsSteering?: DangerousFaultIndicator;
  controlsSteeringComments?: FaultComments;
  precautions?: DangerousFaultIndicator;
  precautionsComments?: FaultComments;
  ancillaryControls?: DangerousFaultIndicator;
  ancillaryControlsComments?: FaultComments;
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
  clearance?: DangerousFaultIndicator;
  clearanceComments?: FaultComments;
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
}
/**
 * Assessment of the eco friendly manner of driving
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
 * Summary of the total number of each type of fault incurred during the test
 */
export interface FaultSummary {
  /**
   * Count of the total number of driving faults incurred during the test
   */
  totalDrivingFaults?: number;
  /**
   * Count of the total number of serious faults incurred during the test
   */
  totalSeriousFaults?: number;
  /**
   * Count of the total number of dangerous faults incurred during the test
   */
  totalDangerousFaults?: number;
}
export interface EyesightTest {
  complete?: boolean;
  /**
   * Whether the candidate has failed the eyesight test
   */
  seriousFault?: boolean;
  faultComments?: FaultComments;
}
/**
 * Finalisation of a successful test outcome
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
 */
export interface TestSummary {
  /**
   * Number of the route that was taken during the test
   */
  routeNumber?: number;
  independentDriving?: IndependentDriving;
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
  [k: string]: any;
}
