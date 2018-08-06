import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFormValues, initialize } from 'redux-form';
import { defectTypesSelector } from 'controllers/project';
import { FieldProvider } from 'components/fields/fieldProvider';
import { injectIntl, defineMessages, intlShape } from 'react-intl';
import { getWidgetCriteriaOptions } from './utils/getWidgetCriteriaOptions';
import { getWidgetModeOptions } from './utils/getWidgetModeOptions';
import {
  LAUNCH_STATUSES_OPTIONS,
  DEFECT_TYPES_OPTIONS,
  ITEMS_INPUT_WIDTH,
  CHART_MODES,
} from './constants';
import { FiltersControl, DropdownControl, InputControl, TogglerControl } from './controls';
import { WIDGET_WIZARD_FORM } from '../widgetWizardContent/wizardControlsSection/constants';

const DEFAULT_ITEMS_COUNT = '50';
const messages = defineMessages({
  CriteriaFiledLabel: {
    id: 'OverallStatisticsControls.CriteriaFiledLabel',
    defaultMessage: 'Criteria for widget',
  },
  ItemsFiledLabel: {
    id: 'OverallStatisticsControls.ItemsFiledLabel',
    defaultMessage: 'Items',
  },
});

@injectIntl
@connect(
  (state) => ({
    widgetSettings: getFormValues(WIDGET_WIZARD_FORM)(state),
    defectTypes: defectTypesSelector(state),
  }),
  {
    initializeWizardSecondStepForm: (data) =>
      initialize(WIDGET_WIZARD_FORM, data, true, { keepValues: true }),
  },
)
export class OverallStatisticsControls extends Component {
  static propTypes = {
    intl: intlShape.isRequired,
    defectTypes: PropTypes.object.isRequired,
    widgetSettings: PropTypes.object.isRequired,
    initializeWizardSecondStepForm: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    const { intl, widgetSettings, defectTypes, initializeWizardSecondStepForm } = props;
    this.criteria = getWidgetCriteriaOptions(
      [LAUNCH_STATUSES_OPTIONS, DEFECT_TYPES_OPTIONS],
      intl.formatMessage,
      { defectTypes },
    );
    initializeWizardSecondStepForm({
      criteria: widgetSettings.criteria
        ? widgetSettings.criteria
        : this.criteria.map((criteria) => criteria.value),
      items: widgetSettings.items ? widgetSettings.items : DEFAULT_ITEMS_COUNT,
      viewMode: widgetSettings.viewMode ? widgetSettings.viewMode : CHART_MODES.PANEL_VIEW,
      mode: widgetSettings.mode ? widgetSettings.mode : CHART_MODES.ALL_LAUNCHES,
    });
  }

  render() {
    const { intl } = this.props;
    return (
      <Fragment>
        <FiltersControl />
        <FieldProvider name="criteria">
          <DropdownControl
            fieldLabel={intl.formatMessage(messages.CriteriaFiledLabel)}
            multiple
            selectAll
            options={this.criteria}
          />
        </FieldProvider>
        <FieldProvider name="items">
          <InputControl
            fieldLabel={intl.formatMessage(messages.ItemsFiledLabel)}
            inputWidth={ITEMS_INPUT_WIDTH}
            type="number"
          />
        </FieldProvider>
        <FieldProvider name="viewMode">
          <TogglerControl
            fieldLabel={' '}
            items={getWidgetModeOptions(
              [CHART_MODES.PANEL_VIEW, CHART_MODES.DONUT_VIEW],
              intl.formatMessage,
            )}
          />
        </FieldProvider>
        <FieldProvider name="mode">
          <TogglerControl
            fieldLabel={' '}
            items={getWidgetModeOptions(
              [CHART_MODES.ALL_LAUNCHES, CHART_MODES.LATEST_LAUNCHES],
              intl.formatMessage,
            )}
          />
        </FieldProvider>
      </Fragment>
    );
  }
}
