/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Role of the user who uses the the App
 */
export type ExaminerRole = "LDTM" | "DE";

/**
 * JSON Schema definition for remote application configuration
 */
export interface RemoteConfig {
  /**
   * Google analytics id must be included in your tracking code to tell Analytics which account and property to send data to
   */
  googleAnalyticsId: string;
  /**
   * A collection of device ids that the App can be used on
   */
  approvedDeviceIdentifiers: string[];
  /**
   * A property which can be set to simulate a different date in the app as today
   */
  timeTravelDate?: string;
  role: ExaminerRole;
  journal: Journal;
  tests: Tests;
  user: User;
  /**
   * The number of milliseconds that we wait before a request times out in the App
   */
  requestTimeout: number;
}
/**
 * Journal related configuration properties
 */
export interface Journal {
  /**
   * Url for getting the journal
   */
  journalUrl: string;
  /**
   * Url for getting a booked test from the journal
   */
  searchBookingUrl: string;
  /**
   * A time interval in milliseconds that triggers an automatic journal refresh
   */
  autoRefreshInterval: number;
  /**
   * The number of days that the user can see in the journal
   */
  numberOfDaysToView: number;
  /**
   * The number of days that the journal data will be cached in the app
   */
  daysToCacheJournalData: number;
  /**
   * Allow tests to get started
   */
  allowTests: boolean;
  /**
   * Collection of test
   */
  allowedTestCategories: string[];
  /**
   * A collection of test permissions
   */
  testPermissionPeriods: TestPermissionPeriod[];
  /**
   * Flag which enables test report practice mode
   */
  enableTestReportPracticeMode: boolean;
  /**
   * Flag which enables end to end practice mode
   */
  enableEndToEndPracticeMode: boolean;
  /**
   * Flag which enables logout button
   */
  enableLogoutButton: boolean;
}
/**
 * Indicates the categories that the user can start in a time period
 */
export interface TestPermissionPeriod {
  /**
   * Test category on which this permission applies
   */
  testCategory: string;
  /**
   * Date when the permission is active from
   */
  from: string;
  /**
   * Date till the permission is active
   */
  to: null | string;
}
/**
 * Test related configuration properties
 */
export interface Tests {
  /**
   * Url for submitting a test
   */
  testSubmissionUrl: string;
  /**
   * A time interval in milliseconds that the test submission retries
   */
  autoSendInterval: number;
}
/**
 * User related configuration properties
 */
export interface User {
  /**
   * Url which is used for finding a user
   */
  findUserUrl: string;
}
