import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { SelectedItems } from 'pages/inside/common/selectedItems';
import { ActionPanel } from './actionPanel';
import styles from './launchToolbar.scss';

const cx = classNames.bind(styles);

export const LaunchToolbar = ({
  selectedLaunches,
  errors,
  onUnselect,
  onUnselectAll,
  onMoveToDebug,
  onMerge,
  onCompare,
  onForceFinish,
  onProceedValidItems,
  onImportLaunch,
}) => (
  <div className={cx('launch-toolbar')}>
    {!!selectedLaunches.length && (
      <SelectedItems
        selectedItems={selectedLaunches}
        onUnselect={onUnselect}
        onClose={onUnselectAll}
        errors={errors}
      />
    )}
    <ActionPanel
      showBreadcrumb={selectedLaunches.length === 0}
      hasErrors={selectedLaunches.some((launch) => !!errors[launch.id])}
      hasValidItems={selectedLaunches.length > Object.keys(errors).length}
      onProceedValidItems={onProceedValidItems}
      onMoveToDebug={onMoveToDebug}
      onMerge={onMerge}
      onCompare={onCompare}
      onForceFinish={onForceFinish}
      selectedLaunches={selectedLaunches}
      onImportLaunch={onImportLaunch}
    />
  </div>
);
LaunchToolbar.propTypes = {
  selectedLaunches: PropTypes.arrayOf(PropTypes.object),
  onUnselect: PropTypes.func,
  onUnselectAll: PropTypes.func,
  errors: PropTypes.object,
  onProceedValidItems: PropTypes.func,
  onMerge: PropTypes.func,
  onCompare: PropTypes.func,
  onMoveToDebug: PropTypes.func,
  onForceFinish: PropTypes.func,
  onDelete: PropTypes.func,
  onImportLaunch: PropTypes.func,
};
LaunchToolbar.defaultProps = {
  selectedLaunches: [],
  onUnselect: () => {},
  onUnselectAll: () => {},
  errors: {},
  onProceedValidItems: () => {},
  onMerge: () => {},
  onCompare: () => {},
  onMoveToDebug: () => {},
  onForceFinish: () => {},
  onDelete: () => {},
  onImportLaunch: () => {},
};
