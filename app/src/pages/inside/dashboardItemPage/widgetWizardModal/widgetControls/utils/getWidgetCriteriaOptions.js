import { defineMessages } from 'react-intl';
import {
  STATS_TOTAL,
  STATS_FAILED,
  STATS_PASSED,
  STATS_SKIPPED,
} from 'common/constants/statistics';
import {
  PRODUCT_BUG,
  AUTOMATION_BUG,
  SYSTEM_ISSUE,
  TO_INVESTIGATE,
  NO_DEFECT,
} from 'common/constants/defectTypes';
import { LAUNCH_STATUSES_OPTIONS, DEFECT_TYPES_OPTIONS } from '../constants';

const messages = defineMessages({
  CriteriaTotal: {
    id: 'WidgetCriteriaOption.CriteriaTotal',
    defaultMessage: 'Total',
  },
  CriteriaPassed: {
    id: 'WidgetCriteriaOption.CriteriaPassed',
    defaultMessage: 'Passed',
  },
  CriteriaFailed: {
    id: 'WidgetCriteriaOption.CriteriaFailed',
    defaultMessage: 'Failed',
  },
  CriteriaSkipped: {
    id: 'WidgetCriteriaOption.CriteriaSkipped',
    defaultMessage: 'Skipped',
  },
  PRODUCT_BUG_TOTAL: {
    id: 'WidgetCriteriaOption.PRODUCT_BUG_TOTAL',
    defaultMessage: 'Total product bugs',
  },
  AUTOMATION_BUG_TOTAL: {
    id: 'WidgetCriteriaOption.AUTOMATION_BUG_TOTAL',
    defaultMessage: 'Total automation bug',
  },
  SYSTEM_ISSUE_TOTAL: {
    id: 'WidgetCriteriaOption.SYSTEM_ISSUE_TOTAL',
    defaultMessage: 'Total system issues',
  },
  NO_DEFECT_TOTAL: {
    id: 'WidgetCriteriaOption.NO_DEFECT_TOTAL',
    defaultMessage: 'Total no defects',
  },
  Defect_Type_AB001: {
    id: 'WidgetCriteriaOption.Defect_Type_AB001',
    defaultMessage: 'Automation bug',
  },
  Defect_Type_PB001: {
    id: 'WidgetCriteriaOption.Defect_Type_PB001',
    defaultMessage: 'Product bug',
  },
  Defect_Type_SI001: {
    id: 'WidgetCriteriaOption.Defect_Type_SI001',
    defaultMessage: 'System issue',
  },
  Defect_Type_TI001: {
    id: 'WidgetCriteriaOption.Defect_Type_TI001',
    defaultMessage: 'To investigate',
  },
  Defect_Type_ND001: {
    id: 'WidgetCriteriaOption.Defect_Type_ND001',
    defaultMessage: 'No defect',
  },
});

const DEFECT_STATISTICS_BASE = 'statistics$defects$';

const DEFECT_TYPES_SEQUENCE = [
  PRODUCT_BUG.toUpperCase(),
  AUTOMATION_BUG.toUpperCase(),
  SYSTEM_ISSUE.toUpperCase(),
  NO_DEFECT.toUpperCase(),
  TO_INVESTIGATE.toUpperCase(),
];

const getLaunchStatusesOptions = (formatMessage) => [
  { value: STATS_TOTAL, label: formatMessage(messages.CriteriaTotal) },
  { value: STATS_PASSED, label: formatMessage(messages.CriteriaPassed) },
  { value: STATS_FAILED, label: formatMessage(messages.CriteriaFailed) },
  { value: STATS_SKIPPED, label: formatMessage(messages.CriteriaSkipped) },
];

const getDefectTypesOptions = (defectTypes, formatMessage) => {
  let defectTypesOptions = [];
  DEFECT_TYPES_SEQUENCE.forEach((defectTypeId) => {
    const defectTypeGroup = defectTypes[defectTypeId];
    const hasSubTypes = defectTypeGroup.length > 1;
    if (hasSubTypes) {
      defectTypesOptions.push({
        label: formatMessage(messages[`${defectTypeGroup[0].typeRef}_TOTAL`]),
        value: `${DEFECT_STATISTICS_BASE}${defectTypeGroup[0].typeRef.toLowerCase()}$total`,
        groupId: defectTypeGroup[0].typeRef,
      });
      defectTypesOptions = defectTypesOptions.concat(
        defectTypeGroup.map((defectType) => ({
          groupRef: defectType.typeRef,
          value: `${DEFECT_STATISTICS_BASE}${defectType.typeRef.toLowerCase()}$${
            defectType.locator
          }`,
          label: messages[defectType.locator]
            ? formatMessage(messages[`Defect_Type_${defectType.locator}`])
            : defectType.longName,
        })),
      );
    } else {
      defectTypesOptions = defectTypesOptions.concat(
        defectTypeGroup.map((defectType) => ({
          value: `${DEFECT_STATISTICS_BASE}${defectType.typeRef.toLowerCase()}$${
            defectType.locator
          }`,
          label: messages[defectType.locator]
            ? formatMessage(messages[`Defect_Type_${defectType.locator}`])
            : defectType.longName,
        })),
      );
    }
  });
  return defectTypesOptions;
};

export const getWidgetCriteriaOptions = (optionGroups, defectTypes, formatMessage) => {
  let options = [];
  optionGroups.forEach((optionGroup) => {
    switch (optionGroup) {
      case LAUNCH_STATUSES_OPTIONS:
        options = options.concat(getLaunchStatusesOptions(formatMessage));
        break;
      case DEFECT_TYPES_OPTIONS:
        options = options.concat(getDefectTypesOptions(defectTypes, formatMessage));
        break;
      default:
    }
  });

  return options;
};
