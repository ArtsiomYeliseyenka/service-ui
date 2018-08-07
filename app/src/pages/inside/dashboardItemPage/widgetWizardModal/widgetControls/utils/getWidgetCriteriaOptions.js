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
import {
  START_LAUNCH,
  FINISH_LAUNCH,
  DELETE_LAUNCH,
  CREATE_USER,
  UPDATE_PROJECT,
  ACTIONS_WITH_ISSUES,
  ACTIONS_WITH_DASHBOARDS,
  ACTIONS_WITH_WIDGETS,
  ACTIONS_WITH_FILTERS,
  ACTIONS_WITH_BTS,
  ACTIONS_WITH_AA_SETTINGS,
  ACTIONS_WITH_DEFECTS,
  ACTIONS_WITH_IMPORT,
} from 'common/constants/actionTypes';
import {
  LAUNCH_STATUSES_OPTIONS,
  DEFECT_TYPES_OPTIONS,
  GROUPED_DEFECT_TYPES_OPTIONS,
  USER_ACTIONS_OPTIONS,
  LAUNCH_GRID_COLUMNS_OPTIONS,
  DEFECT_TYPES_GROUPS_OPTIONS,
} from '../constants';

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

  [PRODUCT_BUG]: {
    id: 'WidgetCriteriaOption.PRODUCT_BUG',
    defaultMessage: 'Product bug',
  },
  [AUTOMATION_BUG]: {
    id: 'WidgetCriteriaOption.AUTOMATION_BUG',
    defaultMessage: 'Automation bug',
  },
  [SYSTEM_ISSUE]: {
    id: 'WidgetCriteriaOption.SYSTEM_ISSUE',
    defaultMessage: 'System issue',
  },
  [TO_INVESTIGATE]: {
    id: 'WidgetCriteriaOption.TO_INVESTIGATE',
    defaultMessage: 'To investigate',
  },
  [NO_DEFECT]: {
    id: 'WidgetCriteriaOption.NO_DEFECT',
    defaultMessage: 'No defect',
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

  [START_LAUNCH]: {
    id: 'WidgetCriteriaOption.start_launch',
    defaultMessage: 'Start launch',
  },
  [FINISH_LAUNCH]: {
    id: 'WidgetCriteriaOption.finish_launch',
    defaultMessage: 'Finish launch',
  },
  [DELETE_LAUNCH]: {
    id: 'WidgetCriteriaOption.delete_launch',
    defaultMessage: 'Delete launch',
  },
  [ACTIONS_WITH_ISSUES]: {
    id: 'WidgetCriteriaOption.issues_actions',
    defaultMessage: 'Actions with issues',
  },
  [CREATE_USER]: {
    id: 'WidgetCriteriaOption.create_user',
    defaultMessage: 'Add, create user',
  },
  [ACTIONS_WITH_DASHBOARDS]: {
    id: 'WidgetCriteriaOption.dashboards_actions',
    defaultMessage: 'Update dashboard',
  },
  [ACTIONS_WITH_WIDGETS]: {
    id: 'WidgetCriteriaOption.widgets_actions',
    defaultMessage: 'Update widget',
  },
  [ACTIONS_WITH_FILTERS]: {
    id: 'WidgetCriteriaOption.filters_actions',
    defaultMessage: 'Update filter',
  },
  [ACTIONS_WITH_BTS]: {
    id: 'WidgetCriteriaOption.bts_actions',
    defaultMessage: 'Update BTS',
  },
  [UPDATE_PROJECT]: {
    id: 'WidgetCriteriaOption.update_project',
    defaultMessage: 'Update project settings',
  },
  [ACTIONS_WITH_AA_SETTINGS]: {
    id: 'WidgetCriteriaOption.aa_settings_actions',
    defaultMessage: 'Update Auto-Analysis settings',
  },
  [ACTIONS_WITH_DEFECTS]: {
    id: 'WidgetCriteriaOption.defects_actions',
    defaultMessage: 'Update defect types',
  },
  [ACTIONS_WITH_IMPORT]: {
    id: 'WidgetCriteriaOption.import_actions',
    defaultMessage: 'Import',
  },

  tags: {
    id: 'WidgetCriteriaOption.tags',
    defaultMessage: 'Tags',
  },
  user: {
    id: 'WidgetCriteriaOption.user',
    defaultMessage: 'User',
  },
  start_time: {
    id: 'WidgetCriteriaOption.start_time',
    defaultMessage: 'Start time',
  },
  end_time: {
    id: 'WidgetCriteriaOption.end_time',
    defaultMessage: 'Finish time',
  },
  description: {
    id: 'WidgetCriteriaOption.description',
    defaultMessage: 'Description',
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

const getGroupedDefectTypesOptions = (defectTypes, formatMessage) => {
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

const getDefectTypesOptions = (defectTypes, formatMessage) => {
  let defectTypesOptions = [];
  DEFECT_TYPES_SEQUENCE.forEach((defectTypeId) => {
    const defectTypeGroup = defectTypes[defectTypeId];

    defectTypesOptions = defectTypesOptions.concat(
      defectTypeGroup.map((defectType) => ({
        value: `${DEFECT_STATISTICS_BASE}${defectType.typeRef.toLowerCase()}$${defectType.locator}`,
        label: messages[defectType.locator]
          ? formatMessage(messages[`Defect_Type_${defectType.locator}`])
          : defectType.longName,
      })),
    );
  });
  return defectTypesOptions;
};

const getUserActionOptions = (formatMessage) => [
  { value: START_LAUNCH, label: formatMessage(messages[START_LAUNCH]) },
  { value: FINISH_LAUNCH, label: formatMessage(messages[FINISH_LAUNCH]) },
  { value: DELETE_LAUNCH, label: formatMessage(messages[DELETE_LAUNCH]) },
  { value: ACTIONS_WITH_ISSUES, label: formatMessage(messages[ACTIONS_WITH_ISSUES]) },
  { value: CREATE_USER, label: formatMessage(messages[CREATE_USER]) },
  { value: ACTIONS_WITH_DASHBOARDS, label: formatMessage(messages[ACTIONS_WITH_DASHBOARDS]) },
  { value: ACTIONS_WITH_WIDGETS, label: formatMessage(messages[ACTIONS_WITH_WIDGETS]) },
  { value: ACTIONS_WITH_FILTERS, label: formatMessage(messages[ACTIONS_WITH_FILTERS]) },
  { value: ACTIONS_WITH_BTS, label: formatMessage(messages[ACTIONS_WITH_BTS]) },
  { value: UPDATE_PROJECT, label: formatMessage(messages[UPDATE_PROJECT]) },
  { value: ACTIONS_WITH_AA_SETTINGS, label: formatMessage(messages[ACTIONS_WITH_AA_SETTINGS]) },
  { value: ACTIONS_WITH_DEFECTS, label: formatMessage(messages[ACTIONS_WITH_DEFECTS]) },
  { value: ACTIONS_WITH_IMPORT, label: formatMessage(messages[ACTIONS_WITH_IMPORT]) },
];

const getLaunchGridColumnsOptions = (formatMessage) => [
  { value: 'tags', label: formatMessage(messages.tags) },
  { value: 'user', label: formatMessage(messages.user) },
  { value: 'start_time', label: formatMessage(messages.start_time) },
  { value: 'end_time', label: formatMessage(messages.end_time) },
  { value: 'description', label: formatMessage(messages.description) },
];

const getDefectTypesGroupsOptions = (formatMessage) => [
  { value: PRODUCT_BUG, label: formatMessage(messages[PRODUCT_BUG]) },
  { value: AUTOMATION_BUG, label: formatMessage(messages[AUTOMATION_BUG]) },
  { value: SYSTEM_ISSUE, label: formatMessage(messages[SYSTEM_ISSUE]) },
  { value: TO_INVESTIGATE, label: formatMessage(messages[TO_INVESTIGATE]) },
  { value: NO_DEFECT, label: formatMessage(messages[NO_DEFECT]) },
];

export const getWidgetCriteriaOptions = (optionGroups, formatMessage, meta) => {
  let options = [];
  optionGroups.forEach((optionGroup) => {
    switch (optionGroup) {
      case LAUNCH_STATUSES_OPTIONS:
        options = options.concat(getLaunchStatusesOptions(formatMessage));
        break;
      case DEFECT_TYPES_OPTIONS:
        options = options.concat(getDefectTypesOptions(meta.defectTypes, formatMessage));
        break;
      case GROUPED_DEFECT_TYPES_OPTIONS:
        options = options.concat(getGroupedDefectTypesOptions(meta.defectTypes, formatMessage));
        break;
      case USER_ACTIONS_OPTIONS:
        options = options.concat(getUserActionOptions(formatMessage));
        break;
      case LAUNCH_GRID_COLUMNS_OPTIONS:
        options = options.concat(getLaunchGridColumnsOptions(formatMessage));
        break;
      case DEFECT_TYPES_GROUPS_OPTIONS:
        options = options.concat(
          meta.withoutNoDefect
            ? getDefectTypesGroupsOptions(formatMessage).slice(0, -1)
            : getDefectTypesGroupsOptions(formatMessage),
        );
        break;
      default:
    }
  });

  return options;
};
