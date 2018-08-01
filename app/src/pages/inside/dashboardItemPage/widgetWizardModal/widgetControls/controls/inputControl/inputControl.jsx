import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { ModalField } from 'components/main/modal';
import { Input } from 'components/inputs/input';
import { FIELD_LABEL_WIDTH } from '../constants';
import styles from './inputControl.scss';

const cx = classNames.bind(styles);

export const InputControl = ({ fieldLabel, inputWidth, ...rest }) => (
  <div className={cx('input-control')}>
    <ModalField label={fieldLabel} labelWidth={FIELD_LABEL_WIDTH}>
      <div className={cx('input-wrapper')} style={{ width: inputWidth || 'unset' }}>
        <Input {...rest} />
      </div>
    </ModalField>
  </div>
);
InputControl.propTypes = {
  fieldLabel: PropTypes.string,
  inputWidth: PropTypes.number,
};
InputControl.defaultProps = {
  fieldLabel: '',
  inputWidth: null,
};
