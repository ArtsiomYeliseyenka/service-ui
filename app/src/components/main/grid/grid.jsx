import PropTypes from 'prop-types';
import { Fragment } from 'react';
import classNames from 'classnames/bind';
import { SpinningPreloader } from 'components/preloaders/spinningPreloader';
import { GridHeader } from './gridHeader';
import { GridBody } from './gridBody';
import { columnPropTypes } from './propTypes';
import styles from './grid.scss';

const cx = classNames.bind(styles);

const isAllItemsSelected = (items, selectedItems) =>
  items.every((item) => selectedItems.some((selectedItem) => selectedItem.id === item.id));

export const Grid = ({
  columns,
  data,
  sortingColumn,
  sortingDirection,
  onChangeSorting,
  onFilterClick,
  selectable,
  selectedItems,
  onToggleSelectAll,
  onToggleSelection,
  className,
  changeOnlyMobileLayout,
  loading,
}) => (
  <Fragment>
    <div className={cx('grid', className)}>
      <GridHeader
        columns={columns}
        sortingColumn={sortingColumn}
        sortingDirection={sortingDirection}
        onChangeSorting={onChangeSorting}
        onFilterClick={onFilterClick}
        selectable={selectable}
        allSelected={!!selectedItems.length && isAllItemsSelected(data, selectedItems)}
        onToggleSelectAll={onToggleSelectAll}
        hideHeaderForMobile={changeOnlyMobileLayout}
      />
      {!loading && (
        <GridBody
          columns={columns}
          data={data}
          selectable={selectable}
          selectedItems={selectedItems}
          onToggleSelection={onToggleSelection}
          changeOnlyMobileLayout={changeOnlyMobileLayout}
        />
      )}
    </div>
    {loading && (
      <div className={cx('spinner-block')}>
        <SpinningPreloader />
      </div>
    )}
  </Fragment>
);
Grid.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape(columnPropTypes)),
  data: PropTypes.arrayOf(PropTypes.object),
  sortingDirection: PropTypes.string,
  sortingColumn: PropTypes.string,
  onChangeSorting: PropTypes.func,
  onFilterClick: PropTypes.func,
  selectable: PropTypes.bool,
  selectedItems: PropTypes.arrayOf(PropTypes.object),
  onToggleSelection: PropTypes.func,
  onToggleSelectAll: PropTypes.func,
  className: PropTypes.string,
  changeOnlyMobileLayout: PropTypes.bool,
  loading: PropTypes.bool,
};
Grid.defaultProps = {
  columns: [],
  data: [],
  sortingDirection: 'DESC',
  sortingColumn: null,
  onChangeSorting: () => {},
  onFilterClick: () => {},
  selectable: false,
  selectedItems: [],
  onToggleSelectAll: () => {},
  onToggleSelection: () => {},
  className: '',
  changeOnlyMobileLayout: false,
  loading: false,
};
