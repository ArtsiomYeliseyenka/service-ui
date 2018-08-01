import classNames from 'classnames/bind';
import styles from './tagsControl.scss';

const cx = classNames.bind(styles);

export const TagsControl = () => <div className={cx('tags-control')}>TagsControl</div>;
TagsControl.propTypes = {};
TagsControl.defaultProps = {};
