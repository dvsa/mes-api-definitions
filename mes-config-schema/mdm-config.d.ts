/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * JSON Schema definition for application configuration
 */
export interface AppConfig {
  isRemote?: boolean;
  configUrl?: string;
  daysToCacheJournalData?: number;
  daysToCacheLogs?: number;
  enableDevTools?: boolean;
  logoutClearsTestPersistence?: boolean;
  logsPostApiKey?: string;
  logsApiUrl?: string;
  logsAutoSendInterval?: number;
  authentication?: Authentication;
}
/**
 * Journal related configuration properties
 */
export interface Authentication {
  context?: string;
  resourceUrl?: string;
  clientId?: string;
  redirectUrl?: string;
  logoutUrl?: string;
  employeeIdKey?: string;
}
