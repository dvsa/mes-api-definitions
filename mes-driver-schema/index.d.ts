/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface DriverLicenceSchema {
  driverPhotograph: DriverPhotograph;
  driverSignature: DriverSignature;
  driverStandard: DriverStandard;
}
/**
 * Driver photograph wrapper
 */
export interface DriverPhotograph {
  photograph: Photograph;
}
/**
 * Image data pertaining to the photograph
 */
export interface Photograph {
  /**
   * Image string representing the signature
   */
  image: string;
  /**
   * Image format of the signature
   */
  imageFormat: string;
}
/**
 * Driver signature wrapper
 */
export interface DriverSignature {
  signature: Signature;
}
/**
 * Image data pertaining to the signature
 */
export interface Signature {
  /**
   * Image string representing the photo
   */
  image: string;
  /**
   * Image format of the photo
   */
  imageFormat: string;
}
/**
 * Standard candidate data
 */
export interface DriverStandard {
  driver: Driver;
  licence: Licence;
  /**
   * Entitlements of the candidate
   */
  entitlement: Entitlement[];
  token: Token;
}
/**
 * Basic driver info
 */
export interface Driver {
  /**
   * Last name of candidate
   */
  lastName: string;
  /**
   * First name(s) of candidate
   */
  firstNames: string;
  /**
   * Driving licence number of candidate
   */
  drivingLicenceNumber: string;
  /**
   * Title of candidate
   */
  title: string;
  /**
   * Format of the candidates name
   */
  nameFormat: string;
  /**
   * Full mode of address
   */
  fullModeOfAddress: string;
  /**
   * Gender of candidate
   */
  gender: string;
  /**
   * Date of birth
   */
  dateOfBirth: string;
  /**
   * Place of birth
   */
  placeOfBirth: string;
  address: Address;
  /**
   * Does image exist
   */
  imagesExist: boolean;
}
/**
 * Candidate address
 */
export interface Address {
  unstructuredAddress?: UnstructuredAddress;
  structuredAddress?: StructuredAddress;
}
/**
 * Unstructured subsection of address
 */
export interface UnstructuredAddress {
  /**
   * Candidate address line 1
   */
  line1: string;
  /**
   * Candidate address line 2
   */
  line2: string;
  /**
   * Candidate address line 3
   */
  line3: string;
  /**
   * Candidate address line 4
   */
  line4: string;
  /**
   * Candidate address line 5
   */
  line5: string;
  /**
   * Candidate postcode
   */
  postcode: string;
  /**
   * Candidate county
   */
  county: string;
  /**
   * Candidate language
   */
  language: string;
  /**
   * Candidate dps
   */
  dps: string;
  /**
   * Candidate mail sort
   */
  mailsort: string;
}
/**
 * Unstructured subsection of address
 */
export interface StructuredAddress {
  /**
   * PO box number
   */
  poBoxNumber: string;
  /**
   * Org name
   */
  organisationName: string;
  /**
   * Department name
   */
  departmentName: string;
  /**
   * Sub building name
   */
  subBuildingName: string;
  /**
   * Building name
   */
  buildingName: string;
  /**
   * Building number
   */
  buildingNumber: string;
  /**
   * Dependent thoroughfare name
   */
  dependentThoroughfareName: string;
  /**
   * Thoroughfare name name
   */
  thoroughfareName: string;
  /**
   * Double dependent locality
   */
  doubleDependentLocality: string;
  /**
   * Dependent locality
   */
  dependentLocality: string;
  /**
   * Post-town
   */
  postTown: string;
  /**
   * Postcode
   */
  postcode: string;
  /**
   * Country
   */
  country: string;
  /**
   * Language
   */
  language: string;
  /**
   * DPS
   */
  dps: string;
  /**
   * UPRN
   */
  uprn: string;
  /**
   * UDPRN
   */
  udprn: string;
  /**
   * Mail sort
   */
  mailsort: string;
}
/**
 * Basic licence info
 */
export interface Licence {
  /**
   * Status of licence
   */
  status: string;
  /**
   * Type of licence
   */
  type: string;
}
/**
 * Basic driver info
 */
export interface Entitlement {
  /**
   * Category code
   */
  categoryCode: string;
  /**
   * Category legal literal
   */
  categoryLegalLiteral: string;
  /**
   * Category short literal
   */
  categoryShortLiteral: string;
  /**
   * Category type
   */
  categoryType: string;
  /**
   * From date
   */
  fromDate: string;
  /**
   * Expiry date
   */
  expiryDate: string;
  /**
   * Category status
   */
  categoryStatus: string;
  /**
   * Restrictions on licence
   */
  restrictions: Restriction[];
}
/**
 * Restriction
 */
export interface Restriction {
  /**
   * Restriction Code
   */
  restrictionCode: string;
  /**
   * Restriction Literal
   */
  restrictionLiteral: string;
}
/**
 * Token
 */
export interface Token {
  /**
   * Card valid from date
   */
  validFromDate: string;
  /**
   * Card valid to date
   */
  validToDate: string;
  /**
   * Card type
   */
  type: string;
  /**
   * Driving licence number on card
   */
  drivingLicenceNumber: string;
  /**
   * Issue number of card
   */
  issueNumber: string;
  /**
   * Token entitlements on card
   */
  entitlements: TokenEntitlement[];
  /**
   * Is provisional card
   */
  isProvisional: string;
}
/**
 * Token entitlement
 */
export interface TokenEntitlement {
  /**
   * Category
   */
  category?: string;
  /**
   * Category legal literal
   */
  categoryLegalLiteral?: string;
  /**
   * Category short literal
   */
  categoryShortLiteral?: string;
  /**
   * Category type
   */
  categoryType?: string;
  /**
   * Category legal literal
   */
  categoryFromDate?: string;
  /**
   * Category short literal
   */
  categoryExpiryDate?: string;
  /**
   * Category restrictions
   */
  categoryRestrictions?: CategoryRestrictions[];
  /**
   * Group
   */
  group?: string;
  /**
   * Category legal literal
   */
  groupShortLiteral?: string;
  /**
   * Category short literal
   */
  groupLegalLiteral?: string;
  /**
   * Group
   */
  groupType?: string;
  /**
   * Category legal literal
   */
  groupFromDate?: string;
  /**
   * Category short literal
   */
  groupExpiryDate?: string;
  groupRestrictions?: GroupRestrictions;
}
/**
 * Category restrictions
 */
export interface CategoryRestrictions {
  /**
   * Category restriction code
   */
  categoryRestrictionCode: string;
  /**
   * Category restriction literal
   */
  categoryRestrictionLiteral: string;
}
/**
 * Group restrictions
 */
export interface GroupRestrictions {
  /**
   * Group restriction code
   */
  groupRestrictionCode: string;
  /**
   * Group restriction literal
   */
  groupRestrictionLiteral: string;
}
