/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Code representing the result of the test
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

export interface SearchResultTestSchema {
  /**
   * The test center ID
   */
  costCode: string;
  /**
   * The date and time of the test
   */
  testDate: string;
  /**
   * The candidate's driver number, typically (though not always) 16 characters if UK, or 8 digits if NI
   */
  driverNumber: string;
  candidateName: Name;
  /**
   * The application ID
   */
  applicationReference: number;
  /**
   * Category code for the test report
   */
  category: string;
  activityCode: ActivityCode;
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
