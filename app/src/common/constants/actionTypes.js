export const START_LAUNCH = 'start_launch';
export const FINISH_LAUNCH = 'finish_launch';
export const DELETE_LAUNCH = 'delete_launch';
export const POST_ISSUE = 'post_issue';
export const LINK_ISSUE = 'link_issue';
export const UNLINK_ISSUE = 'unlink_issue';
export const CREATE_USER = 'create_user';
export const CREATE_DASHBOARD = 'create_dashboard';
export const UPDATE_DASHBOARD = 'update_dashboard';
export const DELETE_DASHBOARD = 'delete_dashboard';
export const CREATE_WIDGET = 'create_widget';
export const UPDATE_WIDGET = 'update_widget';
export const DELETE_WIDGET = 'delete_widget';
export const CREATE_FILTER = 'create_filter';
export const UPDATE_FILTER = 'update_filter';
export const DELETE_FILTER = 'delete_filter';
export const CREATE_BTS = 'create_bts';
export const UPDATE_BTS = 'update_bts';
export const DELETE_BTS = 'delete_bts';
export const UPDATE_PROJECT = 'update_project';
export const UPDATE_ANALYZER = 'update_analyzer';
export const GENERATE_INDEX = 'generate_index';
export const DELETE_INDEX = 'delete_index';
export const UPDATE_DEFECT = 'update_defect';
export const DELETE_DEFECT = 'delete_defect';
export const START_IMPORT = 'start_import';
export const FINISH_IMPORT = 'finish_import';

// grouped actions
export const ACTIONS_WITH_ISSUES = 'issues_actions';
export const ACTIONS_WITH_DASHBOARDS = 'dashboards_actions';
export const ACTIONS_WITH_WIDGETS = 'widgets_actions';
export const ACTIONS_WITH_FILTERS = 'filters_actions';
export const ACTIONS_WITH_BTS = 'bts_actions';
export const ACTIONS_WITH_AA_SETTINGS = 'aa_settings_actions';
export const ACTIONS_WITH_DEFECTS = 'defects_actions';
export const ACTIONS_WITH_IMPORT = 'import_actions';

export const GROUP_ACTION_TYPES = {
  [ACTIONS_WITH_ISSUES]: { id: ACTIONS_WITH_ISSUES, value: [POST_ISSUE, LINK_ISSUE, UNLINK_ISSUE] },
  [ACTIONS_WITH_DASHBOARDS]: {
    id: ACTIONS_WITH_DASHBOARDS,
    value: [CREATE_DASHBOARD, UPDATE_DASHBOARD, DELETE_DASHBOARD],
  },
  [ACTIONS_WITH_WIDGETS]: {
    id: ACTIONS_WITH_WIDGETS,
    value: [CREATE_WIDGET, UPDATE_WIDGET, DELETE_WIDGET],
  },
  [ACTIONS_WITH_FILTERS]: {
    id: ACTIONS_WITH_FILTERS,
    value: [CREATE_FILTER, UPDATE_FILTER, DELETE_FILTER],
  },
  [ACTIONS_WITH_BTS]: { id: ACTIONS_WITH_BTS, value: [CREATE_BTS, UPDATE_BTS, DELETE_BTS] },
  [ACTIONS_WITH_AA_SETTINGS]: {
    id: ACTIONS_WITH_AA_SETTINGS,
    value: [UPDATE_ANALYZER, GENERATE_INDEX, DELETE_INDEX],
  },
  [ACTIONS_WITH_DEFECTS]: { id: ACTIONS_WITH_DEFECTS, value: [UPDATE_DEFECT, DELETE_DEFECT] },
  [ACTIONS_WITH_IMPORT]: { id: ACTIONS_WITH_IMPORT, value: [START_IMPORT, FINISH_IMPORT] },
};
