import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { ModalField } from 'components/main/modal';
import { InputTagsSearch } from 'components/inputs/inputTagsSearch';
import { FIELD_LABEL_WIDTH } from '../constants';
import styles from './tagsControl.scss';

const cx = classNames.bind(styles);

export const TagsControl = ({ fieldLabel, inputWidth, ...rest }) => (
  <div className={cx('input-control')}>
    <ModalField label={fieldLabel} labelWidth={FIELD_LABEL_WIDTH}>
      <div className={cx('input-wrapper')} style={{ width: inputWidth || 'unset' }}>
        <InputTagsSearch {...rest} />
      </div>
    </ModalField>
  </div>
);
TagsControl.propTypes = {
  fieldLabel: PropTypes.string,
  inputWidth: PropTypes.number,
};
TagsControl.defaultProps = {
  fieldLabel: '',
  inputWidth: null,
};
