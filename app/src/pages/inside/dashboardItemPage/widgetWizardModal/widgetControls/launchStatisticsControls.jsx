import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';
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
import {
  FiltersControl,
  DropdownControl,
  InputControl,
  TogglerControl,
  CheckboxControl,
} from './controls';
import { WIDGET_WIZARD_FORM } from '../widgetWizardContent/wizardControlsSection/constants';

const messages = defineMessages({
  CriteriaFiledLabel: {
    id: 'LaunchStatisticsControls.CriteriaFiledLabel',
    defaultMessage: 'Criteria for widget',
  },
  ItemsFiledLabel: {
    id: 'LaunchStatisticsControls.ItemsFiledLabel',
    defaultMessage: 'Items',
  },
  ZoomControlText: {
    id: 'LaunchStatisticsControls.ZoomControlText',
    defaultMessage: 'Zoom widget area',
  },
});

@injectIntl
@connect(
  (state) => ({
    defectTypes: defectTypesSelector(state),
  }),
  {
    initializeWizardSecondStepForm: (data) => initialize(WIDGET_WIZARD_FORM, data, true),
  },
)
export class LaunchStatisticsControls extends Component {
  static propTypes = {
    intl: intlShape.isRequired,
    defectTypes: PropTypes.object.isRequired,
    initializeWizardSecondStepForm: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.criteria = getWidgetCriteriaOptions(
      [LAUNCH_STATUSES_OPTIONS, DEFECT_TYPES_OPTIONS],
      props.defectTypes,
      props.intl.formatMessage,
    );
    props.initializeWizardSecondStepForm({
      criteria: this.criteria.map((criteria) => criteria.value),
      items: '10',
      mode: CHART_MODES.LAUNCH_MODE,
      viewMode: CHART_MODES.AREA_VIEW,
      zoom: false,
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
        <FieldProvider name="mode">
          <TogglerControl
            fieldLabel={' '}
            items={getWidgetModeOptions(
              [CHART_MODES.LAUNCH_MODE, CHART_MODES.TIMELINE_MODE],
              intl.formatMessage,
            )}
          />
        </FieldProvider>
        <FieldProvider name="viewMode">
          <TogglerControl
            fieldLabel={' '}
            items={getWidgetModeOptions(
              [CHART_MODES.AREA_VIEW, CHART_MODES.BAR_VIEW],
              intl.formatMessage,
            )}
          />
        </FieldProvider>
        <FieldProvider name="zoom">
          <CheckboxControl fieldLabel={' '} text={intl.formatMessage(messages.ZoomControlText)} />
        </FieldProvider>
      </Fragment>
    );
  }
}
