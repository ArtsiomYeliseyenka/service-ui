import { defineMessages } from 'react-intl';

const messages = defineMessages({
  launchMode: {
    id: 'WidgetModes.launchMode',
    defaultMessage: 'Launch mode',
  },
  timelineMode: {
    id: 'WidgetModes.timelineMode',
    defaultMessage: 'Timeline mode',
  },
  areaView: {
    id: 'WidgetModes.areaViewMode',
    defaultMessage: 'Area view',
  },
  barView: {
    id: 'WidgetModes.barViewMode',
    defaultMessage: 'Bar view',
  },
});

export const getWidgetModeOptions = (viewModes, formatMessage) =>
  viewModes.map((viewMode) => ({
    value: viewMode,
    label: formatMessage(messages[`${viewMode}`]),
  }));
