import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { ModalField } from 'components/main/modal';
import { ToggleButton } from 'components/buttons/toggleButton';
import { FIELD_LABEL_WIDTH } from '../constants';
import styles from './togglerControl.scss';

const cx = classNames.bind(styles);

export const TogglerControl = ({ fieldLabel, ...rest }) => (
  <div className={cx('toggler-control')}>
    <ModalField label={fieldLabel} labelWidth={FIELD_LABEL_WIDTH}>
      <ToggleButton {...rest} />
    </ModalField>
  </div>
);
TogglerControl.propTypes = {
  fieldLabel: PropTypes.string,
};
TogglerControl.defaultProps = {
  fieldLabel: '',
};
