import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { ModalField } from 'components/main/modal';
import { InputDropdown } from 'components/inputs/inputDropdown';
import { FIELD_LABEL_WIDTH } from '../constants';
import styles from './dropdownControl.scss';

const cx = classNames.bind(styles);

export const DropdownControl = ({ fieldLabel, ...rest }) => (
  <div className={cx('dropdown-control')}>
    <ModalField label={fieldLabel} labelWidth={FIELD_LABEL_WIDTH}>
      <InputDropdown {...rest} />
    </ModalField>
  </div>
);
DropdownControl.propTypes = {
  fieldLabel: PropTypes.string,
};
DropdownControl.defaultProps = {
  fieldLabel: '',
};
