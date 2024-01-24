import {TestCategory} from "../mes-test-schema/category-definitions/common/test-category";
import {IndependentDriving, QuestionResult, TestCentre} from "../mes-test-schema/categories/common";
import {Circuit} from "../mes-test-schema/categories/AM1";

export interface ExaminerRecordModel {
    appRef: number;
    testCategory: TestCategory;
    testCentre: TestCentre;
    routeNumber?: number;
    startDate: string;
    controlledStop?: boolean;
    independentDriving?: IndependentDriving;
    circuit?: Circuit;
    safetyQuestions?: QuestionResult[];
    balanceQuestions?: QuestionResult[];
    manoeuvres?: any;
    showMeQuestions?: QuestionResult[];
    tellMeQuestions?: QuestionResult[];
}
