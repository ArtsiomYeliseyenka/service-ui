import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFormValues, initialize } from 'redux-form';
import { FieldProvider } from 'components/fields/fieldProvider';
import { arrayRemoveDoubles } from 'common/utils';
import { injectIntl, defineMessages, intlShape } from 'react-intl';
import { defectTypesSelector } from 'controllers/project';
import {
  PRODUCT_BUG,
  AUTOMATION_BUG,
  SYSTEM_ISSUE,
  TO_INVESTIGATE,
  NO_DEFECT,
} from 'common/constants/defectTypes';
import { getWidgetCriteriaOptions } from './utils/getWidgetCriteriaOptions';
import {
  LAUNCH_GRID_COLUMNS_OPTIONS,
  LAUNCH_STATUSES_OPTIONS,
  DEFECT_TYPES_GROUPS_OPTIONS,
  STATIC_CRITERIA,
  METADATA_FIELDS,
  ITEMS_INPUT_WIDTH,
} from './constants';
import { FiltersControl, DropdownControl, InputControl } from './controls';
import { WIDGET_WIZARD_FORM } from '../widgetWizardContent/wizardControlsSection/constants';

const DEFECT_STATISTICS_BASE = 'statistics$defects$';
const DEFAULT_ITEMS_COUNT = '50';
const messages = defineMessages({
  CriteriaFiledLabel: {
    id: 'LaunchesTableControls.CriteriaFiledLabel',
    defaultMessage: 'Criteria for widget',
  },
  ItemsFiledLabel: {
    id: 'LaunchesTableControls.ItemsFiledLabel',
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
export class LaunchesTableControls extends Component {
  static propTypes = {
    intl: intlShape.isRequired,
    defectTypes: PropTypes.object.isRequired,
    widgetSettings: PropTypes.object.isRequired,
    initializeWizardSecondStepForm: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    const { intl, widgetSettings, initializeWizardSecondStepForm } = props;
    this.criteria = getWidgetCriteriaOptions(
      [LAUNCH_STATUSES_OPTIONS, DEFECT_TYPES_GROUPS_OPTIONS, LAUNCH_GRID_COLUMNS_OPTIONS],
      intl.formatMessage,
      { withoutNoDefect: true },
    );
    initializeWizardSecondStepForm({
      criteria: this.parseCriteria(widgetSettings.criteria || this.criteria),
      static_criteria: [
        STATIC_CRITERIA.NAME,
        STATIC_CRITERIA.NUMBER,
        STATIC_CRITERIA.LAST_MODIFIED,
        STATIC_CRITERIA.STATUS,
      ],
      items: widgetSettings.items || DEFAULT_ITEMS_COUNT,
      metadata_fields: [METADATA_FIELDS.NAME, METADATA_FIELDS.NUMBER, METADATA_FIELDS.START_TIME],
    });
  }

  formatCriteria = (criteries) =>
    arrayRemoveDoubles(
      criteries.map(
        (criteria) =>
          criteria.indexOf(DEFECT_STATISTICS_BASE) !== -1 ? criteria.split('$')[2] : criteria,
      ),
    );

  parseCriteria = (criteries) => {
    if (!criteries) {
      return this.props.widgetSettings.criteria;
    }
    return criteries
      .map((criteria) => {
        const value = criteria.value || criteria;
        return [PRODUCT_BUG, AUTOMATION_BUG, SYSTEM_ISSUE, TO_INVESTIGATE, NO_DEFECT].indexOf(
          value,
        ) + 1
          ? this.props.defectTypes[value.toUpperCase()].map(
              (defect) => `${DEFECT_STATISTICS_BASE}${value}$${defect.locator}`,
            )
          : value;
      })
      .reduce((acc, val) => acc.concat(val), []);
  };

  render() {
    const { intl } = this.props;
    return (
      <Fragment>
        <FiltersControl />
        <FieldProvider name="criteria" parse={this.parseCriteria} format={this.formatCriteria}>
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
      </Fragment>
    );
  }
}
