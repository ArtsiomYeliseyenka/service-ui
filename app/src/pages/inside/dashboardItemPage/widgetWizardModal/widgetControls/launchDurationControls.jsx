import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFormValues, initialize } from 'redux-form';
import { FieldProvider } from 'components/fields/fieldProvider';
import { injectIntl, defineMessages, intlShape } from 'react-intl';
import { getWidgetModeOptions } from './utils/getWidgetModeOptions';
import { ITEMS_INPUT_WIDTH, CHART_MODES } from './constants';
import { FiltersControl, InputControl, TogglerControl } from './controls';
import { WIDGET_WIZARD_FORM } from '../widgetWizardContent/wizardControlsSection/constants';

const DEFAULT_ITEMS_COUNT = '50';
const messages = defineMessages({
  ItemsFiledLabel: {
    id: 'LaunchDurationControls.ItemsFiledLabel',
    defaultMessage: 'Items',
  },
});

@injectIntl
@connect(
  (state) => ({
    widgetSettings: getFormValues(WIDGET_WIZARD_FORM)(state),
  }),
  {
    initializeWizardSecondStepForm: (data) =>
      initialize(WIDGET_WIZARD_FORM, data, true, { keepValues: true }),
  },
)
export class LaunchDurationControls extends Component {
  static propTypes = {
    intl: intlShape.isRequired,
    widgetSettings: PropTypes.object.isRequired,
    initializeWizardSecondStepForm: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    const { widgetSettings, initializeWizardSecondStepForm } = props;
    initializeWizardSecondStepForm({
      items: widgetSettings.items || DEFAULT_ITEMS_COUNT,
      mode: widgetSettings.mode || CHART_MODES.ALL_LAUNCHES,
    });
  }

  render() {
    const { intl } = this.props;
    return (
      <Fragment>
        <FiltersControl />
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
              [CHART_MODES.ALL_LAUNCHES, CHART_MODES.LATEST_LAUNCHES],
              intl.formatMessage,
            )}
          />
        </FieldProvider>
      </Fragment>
    );
  }
}
