/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Whether the test is to be conducted using the welsh language
 */
export type WelshTest = boolean;
/**
 * Base 64 encoded binary data representing a PNG image of the candidates signature
 */
export type Signature = string;
/**
 * Outcome of the Eyesight Test
 */
export type EyesightTestResult = "P" | "F";
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
  welshTest: WelshTest;
  /**
   * Category code for the test report
   */
  category: string;
  /**
   * Unique identifier for the test
   */
  id: string;
  /**
   * Unique identifier for the journal test slot
   */
  slotId: number;
  /**
   * Code representing the result of the test
   */
  activityCode: string;
  candidate: Candidate;
  applicationReference: ApplicationReference;
  preTestDeclarations?: PreTestDeclarations;
  eyesightTestResult?: EyesightTestResult;
  accompaniment?: Accompaniment;
  vehicleDetails?: VehicleDetails;
  instructorDetails?: InstructorDetails;
  testData?: TestData;
  passCompletion?: PassCompletion;
  postTestDeclarations?: PostTestDeclarations;
  testSummary?: TestSummary;
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
  drivingFaults?: DrivingFaults;
  seriousFaults?: SeriousFaults;
  dangerousFaults?: DangerousFaults;
  eco?: Eco;
  ETA?: ETA;
  faultSummary?: FaultSummary;
}
/**
 * Details of the Show Me and Tell Me questions asked during the test
 */
export interface VehicleChecks {
  tellMeQuestionCode?: QuestionCode;
  tellMeQuestionDescription?: QuestionDescription;
  tellMeQuestionOutcome?: QuestionOutcome;
  showMeQuestionCode?: QuestionCode;
  showMeQuestionDescription?: QuestionDescription;
  showMeQuestionOutcome?: QuestionOutcome;
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
  selectedReverseLeft?: ManoeuvreIndicator;
  outcomeReverseLeftControl?: ManoeuvreOutcome;
  outcomeReverseLeftObservation?: ManoeuvreOutcome;
  selectedReverseRight?: ManoeuvreIndicator;
  outcomeReverseRightControl?: ManoeuvreOutcome;
  outcomeReverseRightObservation?: ManoeuvreOutcome;
  selectedReverseParkRoad?: ManoeuvreIndicator;
  outcomeReverseParkRoadControl?: ManoeuvreOutcome;
  outcomeReverseParkRoadObservation?: ManoeuvreOutcome;
  selectedReverseParkCarpark?: ManoeuvreIndicator;
  outcomeReverseParkCarparkControl?: ManoeuvreOutcome;
  outcomeReverseParkCarparkObservation?: ManoeuvreOutcome;
  selectedForwardPark?: ManoeuvreIndicator;
  outcomeForwardParkControl?: ManoeuvreOutcome;
  outcomeForwardParkObservation?: ManoeuvreOutcome;
  selectedControlledStop?: ManoeuvreIndicator;
  outcomeControlledStop?: ManoeuvreOutcome;
}
/**
 * The driving faults accumulated during the test
 */
export interface DrivingFaults {
  controlsAccelerator?: DrivingFaultCount;
  controlsClutch?: DrivingFaultCount;
  controlsGears?: DrivingFaultCount;
  controlsFootbrake?: DrivingFaultCount;
  controlsParkingBrake?: DrivingFaultCount;
  controlsSteering?: DrivingFaultCount;
  precautions?: DrivingFaultCount;
  ancillaryControls?: DrivingFaultCount;
  moveOffSafety?: DrivingFaultCount;
  moveOffControl?: DrivingFaultCount;
  useOfMirrorsSignalling?: DrivingFaultCount;
  useOfMirrorsChangeDirection?: DrivingFaultCount;
  useOfMirrorsChangeSpeed?: DrivingFaultCount;
  signalsNecessary?: DrivingFaultCount;
  signalsCorrectly?: DrivingFaultCount;
  signalsTimed?: DrivingFaultCount;
  junctionsApproachSpeed?: DrivingFaultCount;
  junctionsObservation?: DrivingFaultCount;
  junctionsTurningRight?: DrivingFaultCount;
  junctionsTurningLeft?: DrivingFaultCount;
  junctionsCuttingCorners?: DrivingFaultCount;
  judgementOvertaking?: DrivingFaultCount;
  judgementMeeting?: DrivingFaultCount;
  judgementCrossing?: DrivingFaultCount;
  positioningNormalDriving?: DrivingFaultCount;
  positioningLaneDiscipline?: DrivingFaultCount;
  clearance?: DrivingFaultCount;
  followingDistance?: DrivingFaultCount;
  useOfSpeed?: DrivingFaultCount;
  progressAppropriateSpeed?: DrivingFaultCount;
  progressUndueHesitation?: DrivingFaultCount;
  responseToSignsTrafficSigns?: DrivingFaultCount;
  responseToSignsRoadMarkings?: DrivingFaultCount;
  responseToSignsTrafficLights?: DrivingFaultCount;
  responseToSignsTrafficControllers?: DrivingFaultCount;
  responseToSignsOtherRoadUsers?: DrivingFaultCount;
  pedestrianCrossings?: DrivingFaultCount;
  positionNormalStops?: DrivingFaultCount;
  awarenessPlanning?: DrivingFaultCount;
}
/**
 * The serious faults accumulated during the test
 */
export interface SeriousFaults {
  controlsAccelerator?: SeriousFaultIndicator;
  controlsClutch?: SeriousFaultIndicator;
  controlsGears?: SeriousFaultIndicator;
  controlsFootbrake?: SeriousFaultIndicator;
  controlsParkingBrake?: SeriousFaultIndicator;
  controlsSteering?: SeriousFaultIndicator;
  precautions?: SeriousFaultIndicator;
  ancillaryControls?: SeriousFaultIndicator;
  moveOffSafety?: SeriousFaultIndicator;
  moveOffControl?: SeriousFaultIndicator;
  useOfMirrorsSignalling?: SeriousFaultIndicator;
  useOfMirrorsChangeDirection?: SeriousFaultIndicator;
  useOfMirrorsChangeSpeed?: SeriousFaultIndicator;
  signalsNecessary?: SeriousFaultIndicator;
  signalsCorrectly?: SeriousFaultIndicator;
  signalsTimed?: SeriousFaultIndicator;
  junctionsApproachSpeed?: SeriousFaultIndicator;
  junctionsObservation?: SeriousFaultIndicator;
  junctionsTurningRight?: SeriousFaultIndicator;
  junctionsTurningLeft?: SeriousFaultIndicator;
  junctionsCuttingCorners?: SeriousFaultIndicator;
  judgementOvertaking?: SeriousFaultIndicator;
  judgementMeeting?: SeriousFaultIndicator;
  judgementCrossing?: SeriousFaultIndicator;
  positioningNormalDriving?: SeriousFaultIndicator;
  positioningLaneDiscipline?: SeriousFaultIndicator;
  clearance?: SeriousFaultIndicator;
  followingDistance?: SeriousFaultIndicator;
  useOfSpeed?: SeriousFaultIndicator;
  progressAppropriateSpeed?: SeriousFaultIndicator;
  progressUndueHesitation?: SeriousFaultIndicator;
  responseToSignsTrafficSigns?: SeriousFaultIndicator;
  responseToSignsRoadMarkings?: SeriousFaultIndicator;
  responseToSignsTrafficLights?: SeriousFaultIndicator;
  responseToSignsTrafficControllers?: SeriousFaultIndicator;
  responseToSignsOtherRoadUsers?: SeriousFaultIndicator;
  pedestrianCrossings?: SeriousFaultIndicator;
  positionNormalStops?: SeriousFaultIndicator;
  awarenessPlanning?: SeriousFaultIndicator;
}
/**
 * The dangerous faults accumulated during the test
 */
export interface DangerousFaults {
  controlsAccelerator?: DangerousFaultIndicator;
  controlsClutch?: DangerousFaultIndicator;
  controlsGears?: DangerousFaultIndicator;
  controlsFootbrake?: DangerousFaultIndicator;
  controlsParkingBrake?: DangerousFaultIndicator;
  controlsSteering?: DangerousFaultIndicator;
  precautions?: DangerousFaultIndicator;
  ancillaryControls?: DangerousFaultIndicator;
  moveOffSafety?: DangerousFaultIndicator;
  moveOffControl?: DangerousFaultIndicator;
  useOfMirrorsSignalling?: DangerousFaultIndicator;
  useOfMirrorsChangeDirection?: DangerousFaultIndicator;
  useOfMirrorsChangeSpeed?: DangerousFaultIndicator;
  signalsNecessary?: DangerousFaultIndicator;
  signalsCorrectly?: DangerousFaultIndicator;
  signalsTimed?: DangerousFaultIndicator;
  junctionsApproachSpeed?: DangerousFaultIndicator;
  junctionsObservation?: DangerousFaultIndicator;
  junctionsTurningRight?: DangerousFaultIndicator;
  junctionsTurningLeft?: DangerousFaultIndicator;
  junctionsCuttingCorners?: DangerousFaultIndicator;
  judgementOvertaking?: DangerousFaultIndicator;
  judgementMeeting?: DangerousFaultIndicator;
  judgementCrossing?: DangerousFaultIndicator;
  positioningNormalDriving?: DangerousFaultIndicator;
  positioningLaneDiscipline?: DangerousFaultIndicator;
  clearance?: DangerousFaultIndicator;
  followingDistance?: DangerousFaultIndicator;
  useOfSpeed?: DangerousFaultIndicator;
  progressAppropriateSpeed?: DangerousFaultIndicator;
  progressUndueHesitation?: DangerousFaultIndicator;
  responseToSignsTrafficSigns?: DangerousFaultIndicator;
  responseToSignsRoadMarkings?: DangerousFaultIndicator;
  responseToSignsTrafficLights?: DangerousFaultIndicator;
  responseToSignsTrafficControllers?: DangerousFaultIndicator;
  responseToSignsOtherRoadUsers?: DangerousFaultIndicator;
  pedestrianCrossings?: DangerousFaultIndicator;
  positionNormalStops?: DangerousFaultIndicator;
  awarenessPlanning?: DangerousFaultIndicator;
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
  [k: string]: any;
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
  /**
   * Method chosen to conduct the independent driving section of the test
   */
  independentDriving?: "Sat nav" | "Traffic signs";
  /**
   * Physical description of the candidate
   */
  candidateDescription?: string;
  /**
   * Indicates whether anybody else (e.g. ADI) was present for the debrief
   */
  debriefWitnessed?: boolean;
  /**
   * Indicates which form of ID was provided by the candidate
   */
  identification?: "Licence" | "Passport";
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
