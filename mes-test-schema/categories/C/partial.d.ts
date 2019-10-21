/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface PartialLargeLorriesTestCATCSchema {}
/**
 * This interface was referenced by `PartialLargeLorriesTestCATCSchema`'s JSON-Schema
 * via the `definition` "candidate".
 */
export interface Candidate {
  /**
   * Address of the business the candidate relates to
   */
  businessAddress?: {
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
   * Name of the business the candidate relates to
   */
  businessName?: string;
  /**
   * Telephone number of the business the candidate relates to
   */
  businessTelephone?: string;
  [k: string]: any;
}
/**
 * This interface was referenced by `PartialLargeLorriesTestCATCSchema`'s JSON-Schema
 * via the `definition` "testData".
 */
export interface TestData {
  /**
   * The dangerous faults accumulated during the test
   */
  dangerousFaults?: {
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    controlsAccelerator?: boolean;
    /**
     * Comments recorded against a fault
     */
    controlsAcceleratorComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    controlsClutch?: boolean;
    /**
     * Comments recorded against a fault
     */
    controlsClutchComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    controlsGears?: boolean;
    /**
     * Comments recorded against a fault
     */
    controlsGearsComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    controlsFootbrake?: boolean;
    /**
     * Comments recorded against a fault
     */
    controlsFootbrakeComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    controlsParkingBrake?: boolean;
    /**
     * Comments recorded against a fault
     */
    controlsParkingBrakeComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    controlsSteering?: boolean;
    /**
     * Comments recorded against a fault
     */
    controlsSteeringComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    precautions?: boolean;
    /**
     * Comments recorded against a fault
     */
    precautionsComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    ancillaryControls?: boolean;
    /**
     * Comments recorded against a fault
     */
    ancillaryControlsComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    moveOffSafety?: boolean;
    /**
     * Comments recorded against a fault
     */
    moveOffSafetyComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    moveOffControl?: boolean;
    /**
     * Comments recorded against a fault
     */
    moveOffControlComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    useOfMirrorsSignalling?: boolean;
    /**
     * Comments recorded against a fault
     */
    useOfMirrorsSignallingComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    useOfMirrorsChangeDirection?: boolean;
    /**
     * Comments recorded against a fault
     */
    useOfMirrorsChangeDirectionComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    useOfMirrorsChangeSpeed?: boolean;
    /**
     * Comments recorded against a fault
     */
    useOfMirrorsChangeSpeedComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    signalsNecessary?: boolean;
    /**
     * Comments recorded against a fault
     */
    signalsNecessaryComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    signalsCorrectly?: boolean;
    /**
     * Comments recorded against a fault
     */
    signalsCorrectlyComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    signalsTimed?: boolean;
    /**
     * Comments recorded against a fault
     */
    signalsTimedComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    junctionsApproachSpeed?: boolean;
    /**
     * Comments recorded against a fault
     */
    junctionsApproachSpeedComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    junctionsObservation?: boolean;
    /**
     * Comments recorded against a fault
     */
    junctionsObservationComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    junctionsTurningRight?: boolean;
    /**
     * Comments recorded against a fault
     */
    junctionsTurningRightComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    junctionsTurningLeft?: boolean;
    /**
     * Comments recorded against a fault
     */
    junctionsTurningLeftComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    junctionsCuttingCorners?: boolean;
    /**
     * Comments recorded against a fault
     */
    junctionsCuttingCornersComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    judgementOvertaking?: boolean;
    /**
     * Comments recorded against a fault
     */
    judgementOvertakingComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    judgementMeeting?: boolean;
    /**
     * Comments recorded against a fault
     */
    judgementMeetingComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    judgementCrossing?: boolean;
    /**
     * Comments recorded against a fault
     */
    judgementCrossingComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    positioningNormalDriving?: boolean;
    /**
     * Comments recorded against a fault
     */
    positioningNormalDrivingComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    positioningLaneDiscipline?: boolean;
    /**
     * Comments recorded against a fault
     */
    positioningLaneDisciplineComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    clearance?: boolean;
    /**
     * Comments recorded against a fault
     */
    clearanceComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    followingDistance?: boolean;
    /**
     * Comments recorded against a fault
     */
    followingDistanceComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    useOfSpeed?: boolean;
    /**
     * Comments recorded against a fault
     */
    useOfSpeedComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    progressAppropriateSpeed?: boolean;
    /**
     * Comments recorded against a fault
     */
    progressAppropriateSpeedComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    progressUndueHesitation?: boolean;
    /**
     * Comments recorded against a fault
     */
    progressUndueHesitationComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    responseToSignsTrafficSigns?: boolean;
    /**
     * Comments recorded against a fault
     */
    responseToSignsTrafficSignsComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    responseToSignsRoadMarkings?: boolean;
    /**
     * Comments recorded against a fault
     */
    responseToSignsRoadMarkingsComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    responseToSignsTrafficLights?: boolean;
    /**
     * Comments recorded against a fault
     */
    responseToSignsTrafficLightsComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    responseToSignsTrafficControllers?: boolean;
    /**
     * Comments recorded against a fault
     */
    responseToSignsTrafficControllersComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    responseToSignsOtherRoadUsers?: boolean;
    /**
     * Comments recorded against a fault
     */
    responseToSignsOtherRoadUsersComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    pedestrianCrossings?: boolean;
    /**
     * Comments recorded against a fault
     */
    pedestrianCrossingsComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    positionNormalStops?: boolean;
    /**
     * Comments recorded against a fault
     */
    positionNormalStopsComments?: string;
    /**
     * Indicator for a dangerous fault being recorded against a test element
     */
    awarenessPlanning?: boolean;
    /**
     * Comments recorded against a fault
     */
    awarenessPlanningComments?: string;
  };
  /**
   * The driving faults accumulated during the test
   */
  drivingFaults?: {
    /**
     * The count of the number of driving faults recorded against a test element
     */
    controlsAccelerator?: number;
    /**
     * Comments recorded against a fault
     */
    controlsAcceleratorComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    controlsClutch?: number;
    /**
     * Comments recorded against a fault
     */
    controlsClutchComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    controlsGears?: number;
    /**
     * Comments recorded against a fault
     */
    controlsGearsComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    controlsFootbrake?: number;
    /**
     * Comments recorded against a fault
     */
    controlsFootbrakeComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    controlsParkingBrake?: number;
    /**
     * Comments recorded against a fault
     */
    controlsParkingBrakeComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    controlsSteering?: number;
    /**
     * Comments recorded against a fault
     */
    controlsSteeringComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    precautions?: number;
    /**
     * Comments recorded against a fault
     */
    precautionsComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    ancillaryControls?: number;
    /**
     * Comments recorded against a fault
     */
    ancillaryControlsComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    moveOffSafety?: number;
    /**
     * Comments recorded against a fault
     */
    moveOffSafetyComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    moveOffControl?: number;
    /**
     * Comments recorded against a fault
     */
    moveOffControlComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    useOfMirrorsSignalling?: number;
    /**
     * Comments recorded against a fault
     */
    useOfMirrorsSignallingComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    useOfMirrorsChangeDirection?: number;
    /**
     * Comments recorded against a fault
     */
    useOfMirrorsChangeDirectionComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    useOfMirrorsChangeSpeed?: number;
    /**
     * Comments recorded against a fault
     */
    useOfMirrorsChangeSpeedComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    signalsNecessary?: number;
    /**
     * Comments recorded against a fault
     */
    signalsNecessaryComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    signalsCorrectly?: number;
    /**
     * Comments recorded against a fault
     */
    signalsCorrectlyComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    signalsTimed?: number;
    /**
     * Comments recorded against a fault
     */
    signalsTimedComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    junctionsApproachSpeed?: number;
    /**
     * Comments recorded against a fault
     */
    junctionsApproachSpeedComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    junctionsObservation?: number;
    /**
     * Comments recorded against a fault
     */
    junctionsObservationComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    junctionsTurningRight?: number;
    /**
     * Comments recorded against a fault
     */
    junctionsTurningRightComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    junctionsTurningLeft?: number;
    /**
     * Comments recorded against a fault
     */
    junctionsTurningLeftComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    junctionsCuttingCorners?: number;
    /**
     * Comments recorded against a fault
     */
    junctionsCuttingCornersComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    judgementOvertaking?: number;
    /**
     * Comments recorded against a fault
     */
    judgementOvertakingComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    judgementMeeting?: number;
    /**
     * Comments recorded against a fault
     */
    judgementMeetingComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    judgementCrossing?: number;
    /**
     * Comments recorded against a fault
     */
    judgementCrossingComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    positioningNormalDriving?: number;
    /**
     * Comments recorded against a fault
     */
    positioningNormalDrivingComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    positioningLaneDiscipline?: number;
    /**
     * Comments recorded against a fault
     */
    positioningLaneDisciplineComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    clearance?: number;
    /**
     * Comments recorded against a fault
     */
    clearanceComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    followingDistance?: number;
    /**
     * Comments recorded against a fault
     */
    followingDistanceComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    useOfSpeed?: number;
    /**
     * Comments recorded against a fault
     */
    useOfSpeedComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    progressAppropriateSpeed?: number;
    /**
     * Comments recorded against a fault
     */
    progressAppropriateSpeedComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    progressUndueHesitation?: number;
    /**
     * Comments recorded against a fault
     */
    progressUndueHesitationComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    responseToSignsTrafficSigns?: number;
    /**
     * Comments recorded against a fault
     */
    responseToSignsTrafficSignsComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    responseToSignsRoadMarkings?: number;
    /**
     * Comments recorded against a fault
     */
    responseToSignsRoadMarkingsComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    responseToSignsTrafficLights?: number;
    /**
     * Comments recorded against a fault
     */
    responseToSignsTrafficLightsComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    responseToSignsTrafficControllers?: number;
    /**
     * Comments recorded against a fault
     */
    responseToSignsTrafficControllersComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    responseToSignsOtherRoadUsers?: number;
    /**
     * Comments recorded against a fault
     */
    responseToSignsOtherRoadUsersComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    pedestrianCrossings?: number;
    /**
     * Comments recorded against a fault
     */
    pedestrianCrossingsComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    positionNormalStops?: number;
    /**
     * Comments recorded against a fault
     */
    positionNormalStopsComments?: string;
    /**
     * The count of the number of driving faults recorded against a test element
     */
    awarenessPlanning?: number;
    /**
     * Comments recorded against a fault
     */
    awarenessPlanningComments?: string;
  };
  /**
   * Assessment of the eco friendly manner of driving
   */
  eco?: {
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
  };
  /**
   * Indicates whether the examiner had to take physical or verbal action during the test
   */
  ETA?: {
    /**
     * Indicates that the examiner had to take physical action
     */
    physical?: boolean;
    /**
     * Indicates that the examiner had to take verbal action
     */
    verbal?: boolean;
  };
  /**
   * Summary of the total number of each type of fault incurred during the test
   */
  faultSummary?: {
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
  };
  manoeuvres?: Manoeuvres;
  /**
   * The serious faults accumulated during the test
   */
  seriousFaults?: {
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    controlsAccelerator?: boolean;
    /**
     * Comments recorded against a fault
     */
    controlsAcceleratorComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    controlsClutch?: boolean;
    /**
     * Comments recorded against a fault
     */
    controlsClutchComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    controlsGears?: boolean;
    /**
     * Comments recorded against a fault
     */
    controlsGearsComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    controlsFootbrake?: boolean;
    /**
     * Comments recorded against a fault
     */
    controlsFootbrakeComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    controlsParkingBrake?: boolean;
    /**
     * Comments recorded against a fault
     */
    controlsParkingBrakeComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    controlsSteering?: boolean;
    /**
     * Comments recorded against a fault
     */
    controlsSteeringComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    precautions?: boolean;
    /**
     * Comments recorded against a fault
     */
    precautionsComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    ancillaryControls?: boolean;
    /**
     * Comments recorded against a fault
     */
    ancillaryControlsComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    moveOffSafety?: boolean;
    /**
     * Comments recorded against a fault
     */
    moveOffSafetyComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    moveOffControl?: boolean;
    /**
     * Comments recorded against a fault
     */
    moveOffControlComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    useOfMirrorsSignalling?: boolean;
    /**
     * Comments recorded against a fault
     */
    useOfMirrorsSignallingComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    useOfMirrorsChangeDirection?: boolean;
    /**
     * Comments recorded against a fault
     */
    useOfMirrorsChangeDirectionComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    useOfMirrorsChangeSpeed?: boolean;
    /**
     * Comments recorded against a fault
     */
    useOfMirrorsChangeSpeedComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    signalsNecessary?: boolean;
    /**
     * Comments recorded against a fault
     */
    signalsNecessaryComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    signalsCorrectly?: boolean;
    /**
     * Comments recorded against a fault
     */
    signalsCorrectlyComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    signalsTimed?: boolean;
    /**
     * Comments recorded against a fault
     */
    signalsTimedComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    junctionsApproachSpeed?: boolean;
    /**
     * Comments recorded against a fault
     */
    junctionsApproachSpeedComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    junctionsObservation?: boolean;
    /**
     * Comments recorded against a fault
     */
    junctionsObservationComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    junctionsTurningRight?: boolean;
    /**
     * Comments recorded against a fault
     */
    junctionsTurningRightComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    junctionsTurningLeft?: boolean;
    /**
     * Comments recorded against a fault
     */
    junctionsTurningLeftComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    junctionsCuttingCorners?: boolean;
    /**
     * Comments recorded against a fault
     */
    junctionsCuttingCornersComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    judgementOvertaking?: boolean;
    /**
     * Comments recorded against a fault
     */
    judgementOvertakingComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    judgementMeeting?: boolean;
    /**
     * Comments recorded against a fault
     */
    judgementMeetingComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    judgementCrossing?: boolean;
    /**
     * Comments recorded against a fault
     */
    judgementCrossingComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    positioningNormalDriving?: boolean;
    /**
     * Comments recorded against a fault
     */
    positioningNormalDrivingComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    positioningLaneDiscipline?: boolean;
    /**
     * Comments recorded against a fault
     */
    positioningLaneDisciplineComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    clearance?: boolean;
    /**
     * Comments recorded against a fault
     */
    clearanceComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    followingDistance?: boolean;
    /**
     * Comments recorded against a fault
     */
    followingDistanceComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    useOfSpeed?: boolean;
    /**
     * Comments recorded against a fault
     */
    useOfSpeedComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    progressAppropriateSpeed?: boolean;
    /**
     * Comments recorded against a fault
     */
    progressAppropriateSpeedComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    progressUndueHesitation?: boolean;
    /**
     * Comments recorded against a fault
     */
    progressUndueHesitationComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    responseToSignsTrafficSigns?: boolean;
    /**
     * Comments recorded against a fault
     */
    responseToSignsTrafficSignsComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    responseToSignsRoadMarkings?: boolean;
    /**
     * Comments recorded against a fault
     */
    responseToSignsRoadMarkingsComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    responseToSignsTrafficLights?: boolean;
    /**
     * Comments recorded against a fault
     */
    responseToSignsTrafficLightsComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    responseToSignsTrafficControllers?: boolean;
    /**
     * Comments recorded against a fault
     */
    responseToSignsTrafficControllersComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    responseToSignsOtherRoadUsers?: boolean;
    /**
     * Comments recorded against a fault
     */
    responseToSignsOtherRoadUsersComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    pedestrianCrossings?: boolean;
    /**
     * Comments recorded against a fault
     */
    pedestrianCrossingsComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    positionNormalStops?: boolean;
    /**
     * Comments recorded against a fault
     */
    positionNormalStopsComments?: string;
    /**
     * Indicator for a serious fault being recorded against a test element
     */
    awarenessPlanning?: boolean;
    /**
     * Comments recorded against a fault
     */
    awarenessPlanningComments?: string;
  };
  testRequirements?: TestRequirements;
  vehicleChecks?: VehicleChecks;
  [k: string]: any;
}
/**
 * The manoeuvres that were carried out during the test and any faults recorded against them
 *
 * This interface was referenced by `PartialLargeLorriesTestCATCSchema`'s JSON-Schema
 * via the `definition` "manoeuvres".
 */
export interface Manoeuvres {
  reverseLeft?: {
    /**
     * The possible outcomes of any manoeuvre performed during the test
     */
    controlFault?: "DF" | "S" | "D";
    /**
     * Comments recorded against a fault
     */
    controlFaultComments?: string;
    /**
     * The possible outcomes of any manoeuvre performed during the test
     */
    observationFault?: "DF" | "S" | "D";
    /**
     * Comments recorded against a fault
     */
    observationFaultComments?: string;
    /**
     * Indicator for a manoeuvre being performed during the test
     */
    selected?: boolean;
  };
}
/**
 * The test requirements that must be carried out during a test
 *
 * This interface was referenced by `PartialLargeLorriesTestCATCSchema`'s JSON-Schema
 * via the `definition` "testRequirements".
 */
export interface TestRequirements {
  /**
   * Indicates whether or not this test requirement was carried out
   */
  angledStartControlledStop?: boolean;
  /**
   * Indicates whether or not this test requirement was carried out
   */
  downHillStart?: boolean;
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
  upHillStart?: boolean;
}
/**
 * Details of the Show Me and Tell Me questions asked during the test
 *
 * This interface was referenced by `PartialLargeLorriesTestCATCSchema`'s JSON-Schema
 * via the `definition` "vehicleChecks".
 */
export interface VehicleChecks {
  showMeQuestion?: {
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
  }[];
  /**
   * Comments recorded against a fault
   */
  showMeTellMeComments?: string;
  tellMeQuestions?: {
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
  }[];
}
/**
 * This interface was referenced by `PartialLargeLorriesTestCATCSchema`'s JSON-Schema
 * via the `definition` "passCompletion".
 */
export interface PassCompletion {
  /**
   * Indicate presence of code 78 (automatic) on candidates license
   */
  code78Present: boolean;
  [k: string]: any;
}
/**
 * Details about the vehicle to be used for the test
 *
 * This interface was referenced by `PartialLargeLorriesTestCATCSchema`'s JSON-Schema
 * via the `definition` "vehicleDetails".
 */
export interface VehicleDetails {
  /**
   * The type of gearbox
   */
  gearboxCategory?: "Manual" | "Automatic";
  /**
   * The vehicle registration number
   */
  registrationNumber?: string;
  /**
   * Indicates the height of the vehicle
   */
  vehicleHeight?: number;
  /**
   * Indicates the width of the vehicle
   */
  vehicleWidth?: number;
}
