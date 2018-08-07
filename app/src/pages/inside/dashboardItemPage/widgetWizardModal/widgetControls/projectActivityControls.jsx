import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFormValues, initialize } from 'redux-form';
import { FieldProvider } from 'components/fields/fieldProvider';
import { injectIntl, defineMessages, intlShape } from 'react-intl';
import { URLS } from 'common/urls';
import { activeProjectSelector } from 'controllers/user';
import { getWidgetCriteriaOptions } from './utils/getWidgetCriteriaOptions';
import { USER_ACTIONS_OPTIONS, ITEMS_INPUT_WIDTH } from './constants';
import { FiltersControl, DropdownControl, InputControl, TagsControl } from './controls';
import { WIDGET_WIZARD_FORM } from '../widgetWizardContent/wizardControlsSection/constants';

const DEFAULT_ITEMS_COUNT = '50';
const messages = defineMessages({
  CriteriaFiledLabel: {
    id: 'ProjectActivityControls.CriteriaFiledLabel',
    defaultMessage: 'Criteria for widget',
  },
  ItemsFiledLabel: {
    id: 'ProjectActivityControls.ItemsFiledLabel',
    defaultMessage: 'Items',
  },
  UsernameControlText: {
    id: 'ProjectActivityControls.UsernameControlText',
    defaultMessage: 'User name',
  },
  UsersPlaceholder: {
    id: 'ProjectActivityControls.UsersPlaceholder',
    defaultMessage: 'Enter user name',
  },
  UsersFocusPlaceholder: {
    id: 'ProjectActivityControls.UsersFocusPlaceholder',
    defaultMessage: 'At least 3 symbols required.',
  },
  UsersNoMatches: {
    id: 'ProjectActivityControls.UsersNoMatches',
    defaultMessage: 'No matches found.',
  },
});

@injectIntl
@connect(
  (state) => ({
    widgetSettings: getFormValues(WIDGET_WIZARD_FORM)(state),
    usernamesSearchUrl: URLS.projectUsernamesSearch(activeProjectSelector(state)),
  }),
  {
    initializeWizardSecondStepForm: (data) =>
      initialize(WIDGET_WIZARD_FORM, data, true, { keepValues: true }),
  },
)
export class ProjectActivityControls extends Component {
  static propTypes = {
    intl: intlShape.isRequired,
    widgetSettings: PropTypes.object.isRequired,
    usernamesSearchUrl: PropTypes.string.isRequired,
    initializeWizardSecondStepForm: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    const { intl, widgetSettings, initializeWizardSecondStepForm } = props;
    this.criteria = getWidgetCriteriaOptions([USER_ACTIONS_OPTIONS], intl.formatMessage);
    initializeWizardSecondStepForm({
      criteria: widgetSettings.criteria || this.criteria.map((criteria) => criteria.value),
      items: widgetSettings.items || DEFAULT_ITEMS_COUNT,
      usernames: widgetSettings.usernames || [],
    });
  }

  formatUsernames = (values) => values.map((value) => ({ value, label: value }));
  parseUsernames = (values) => values.map((value) => value.value);

  render() {
    const { intl, usernamesSearchUrl } = this.props;
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
        <FieldProvider name="usernames" format={this.formatUsernames} parse={this.parseUsernames}>
          <TagsControl
            fieldLabel={intl.formatMessage(messages.UsernameControlText)}
            placeholder={intl.formatMessage(messages.UsersPlaceholder)}
            focusPlaceholder={intl.formatMessage(messages.UsersFocusPlaceholder)}
            nothingFound={intl.formatMessage(messages.UsersNoMatches)}
            minLength={3}
            async
            uri={usernamesSearchUrl}
            makeOptions={this.formatUsernames}
            multi
            removeSelected
          />
        </FieldProvider>
      </Fragment>
    );
  }
}
