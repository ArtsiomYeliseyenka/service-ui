import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFormValues, initialize } from 'redux-form';
import { injectIntl, intlShape } from 'react-intl';
import {
  STATS_TOTAL,
  STATS_FAILED,
  STATS_PASSED,
  STATS_SKIPPED,
  STATS_AB_TOTAL,
  STATS_ND_TOTAL,
  STATS_PB_TOTAL,
  STATS_SI_TOTAL,
  STATS_TI_TOTAL,
} from 'common/constants/statistics';
import { METADATA_FIELDS } from './constants';
import { FiltersControl } from './controls';
import { WIDGET_WIZARD_FORM } from '../widgetWizardContent/wizardControlsSection/constants';

const DEFAULT_ITEMS_COUNT = '2';

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
export class DifferentLaunchesComparisonControls extends Component {
  static propTypes = {
    intl: intlShape.isRequired,
    widgetSettings: PropTypes.object.isRequired,
    initializeWizardSecondStepForm: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    const { initializeWizardSecondStepForm } = props;
    initializeWizardSecondStepForm({
      content_fields: [
        STATS_TOTAL,
        STATS_PASSED,
        STATS_FAILED,
        STATS_SKIPPED,
        STATS_PB_TOTAL,
        STATS_AB_TOTAL,
        STATS_SI_TOTAL,
        STATS_ND_TOTAL,
        STATS_TI_TOTAL,
      ],
      itemsCount: DEFAULT_ITEMS_COUNT,
      metadata_fields: [METADATA_FIELDS.NAME, METADATA_FIELDS.NUMBER, METADATA_FIELDS.START_TIME],
    });
  }

  render() {
    return <FiltersControl />;
  }
}
