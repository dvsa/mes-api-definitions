/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The count of the number of driving faults recorded against a test element
 *
 * This interface was referenced by `PartialTestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "drivingFaultCount".
 */
export type DrivingFaultCount = number;
/**
 * Comments recorded against a fault
 *
 * This interface was referenced by `PartialTestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "faultComments".
 */
export type FaultComments = string;
/**
 * Indicator for a serious fault being recorded against a test element
 *
 * This interface was referenced by `PartialTestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "seriousFaultIndicator".
 */
export type SeriousFaultIndicator = boolean;
/**
 * Indicator for a dangerous fault being recorded against a test element
 *
 * This interface was referenced by `PartialTestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "dangerousFaultIndicator".
 */
export type DangerousFaultIndicator = boolean;
/**
 * Indicates whether the bike belongs to a driving school
 *
 * This interface was referenced by `PartialTestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "schoolBike".
 */
export type SchoolBike = boolean;

export interface PartialTestResultCatAM2Schema {
  testData?: TestData;
  vehicleDetails?: VehicleDetails;
}
/**
 * Data associated with the test
 *
 * This interface was referenced by `PartialTestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "testData".
 */
export interface TestData {
  ETA?: ETA;
  drivingFaults?: DrivingFaults;
  seriousFaults?: SeriousFaults;
  dangerousFaults?: DangerousFaults;
  safetyAndBalanceQuestions?: SafetyAndBalanceQuestions;
  eco?: Eco;
}
/**
 * Indicates whether the examiner had to take verbal action during the test
 *
 * This interface was referenced by `PartialTestResultCatAM2Schema`'s JSON-Schema
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
 * This interface was referenced by `PartialTestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "drivingFaults".
 */
export interface DrivingFaults {
  controlsThrottle?: DrivingFaultCount;
  controlsThrottleComments?: FaultComments;
  controlsClutch?: DrivingFaultCount;
  controlsClutchComments?: FaultComments;
  controlsGears?: DrivingFaultCount;
  controlsGearsComments?: FaultComments;
  controlsFrontbrake?: DrivingFaultCount;
  controlsFrontbrakeComments?: FaultComments;
  controlsRearBrake?: DrivingFaultCount;
  controlsRearBrakeComments?: FaultComments;
  controlsSteering?: DrivingFaultCount;
  controlsSteeringComments?: FaultComments;
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
}
/**
 * The serious faults accumulated during the test
 *
 * This interface was referenced by `PartialTestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "seriousFaults".
 */
export interface SeriousFaults {
  controlsThrottle?: SeriousFaultIndicator;
  controlsThrottleComments?: FaultComments;
  controlsClutch?: SeriousFaultIndicator;
  controlsClutchComments?: FaultComments;
  controlsGears?: SeriousFaultIndicator;
  controlsGearsComments?: FaultComments;
  controlsFrontbrake?: SeriousFaultIndicator;
  controlsFrontbrakeComments?: FaultComments;
  controlsRearBrake?: SeriousFaultIndicator;
  controlsRearBrakeComments?: FaultComments;
  controlsSteering?: SeriousFaultIndicator;
  controlsSteeringComments?: FaultComments;
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
}
/**
 * The dangerous faults accumulated during the test
 *
 * This interface was referenced by `PartialTestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "dangerousFaults".
 */
export interface DangerousFaults {
  controlsThrottle?: DangerousFaultIndicator;
  controlsThrottleComments?: FaultComments;
  controlsClutch?: DangerousFaultIndicator;
  controlsClutchComments?: FaultComments;
  controlsGears?: DangerousFaultIndicator;
  controlsGearsComments?: FaultComments;
  controlsFrontbrake?: DangerousFaultIndicator;
  controlsFrontbrakeComments?: FaultComments;
  controlsRearBrake?: DangerousFaultIndicator;
  controlsRearBrakeComments?: FaultComments;
  controlsSteering?: DangerousFaultIndicator;
  controlsSteeringComments?: FaultComments;
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
}
/**
 * Details of the safety and balance questions asked during the test
 *
 * This interface was referenced by `PartialTestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "safetyAndBalanceQuestions".
 */
export interface SafetyAndBalanceQuestions {
  safetyQuestions?: QuestionResult[];
  safetyComments?: FaultComments;
  balanceQuestions?: QuestionResult[];
  balanceComments?: FaultComments;
}
/**
 * Result of a vehicle checks question
 *
 * This interface was referenced by `PartialTestResultCatAM2Schema`'s JSON-Schema
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
 * This interface was referenced by `PartialTestResultCatAM2Schema`'s JSON-Schema
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
 * This interface was referenced by `PartialTestResultCatAM2Schema`'s JSON-Schema
 * via the `definition` "vehicleDetails".
 */
export interface VehicleDetails {
  schoolBike?: SchoolBike;
}
