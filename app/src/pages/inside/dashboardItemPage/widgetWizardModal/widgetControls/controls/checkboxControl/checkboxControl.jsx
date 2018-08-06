import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { InputCheckbox } from 'components/inputs/inputCheckbox';
import { ModalField } from 'components/main/modal';
import { FIELD_LABEL_WIDTH } from '../constants';
import styles from './checkboxControl.scss';

const cx = classNames.bind(styles);

export const CheckboxControl = ({ fieldLabel, text, ...rest }) => (
  <div className={cx('checkbox-control')}>
    <ModalField label={fieldLabel} labelWidth={FIELD_LABEL_WIDTH}>
      <InputCheckbox {...rest}>{text}</InputCheckbox>
    </ModalField>
  </div>
);
CheckboxControl.propTypes = {
  fieldLabel: PropTypes.string,
  text: PropTypes.string,
};
CheckboxControl.defaultProps = {
  fieldLabel: '',
  text: 'null',
};
