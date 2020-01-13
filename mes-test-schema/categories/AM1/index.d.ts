import { TestResultCatAM1Schema } from './partial';
import { TestData as CatAM1TestData } from './partial';
import { VehicleDetails as CatAM1VehicleDetails } from './partial';
import { JournalData as CommonJournalData } from '../common';
import { Candidate as CommonCandidate } from '../common';
import { Circuit as CatAM1Circuit } from './partial';
import { CategoryCode as CatAM1CategoryCode } from './partial';
import { Avoidance as CatAM1Avoidance } from './partial';
import { EmergencyStop as CatAM1EmergencyStop } from './partial'

export declare namespace CatAMod1UniqueTypes {

  type TestResult = TestResultCatAM1Schema;

  type TestData = CatAM1TestData;

  type VehicleDetails = CatAM1VehicleDetails;

  type JournalData = CommonJournalData;

  type Candidate = CommonCandidate;

  type Circuit = CatAM1Circuit;

  type CategoryCode = CatAM1CategoryCode;

  type Avoidance = CatAM1Avoidance;

  type EmergencyStop = CatAM1EmergencyStop;

}