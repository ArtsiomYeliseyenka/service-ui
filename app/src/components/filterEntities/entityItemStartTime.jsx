import PropTypes from 'prop-types';
import moment from 'moment/moment';
import { utcOffset, getTimestampFromMinutes, getMinutesFromTimestamp } from 'common/utils';
import { FieldFilterEntity } from 'components/fields/fieldFilterEntity';
import { InputTimeDateRange } from 'components/inputs/inputTimeDateRange';
import { CONDITION_BETWEEN } from 'components/filterEntities/constants';

const presets = [
  {
    label: 'Today',
    value: {
      start: moment()
        .startOf('day')
        .valueOf(),
      end:
        moment()
          .endOf('day')
          .valueOf() + 1,
      dynamic: true,
    },
  },
  {
    label: 'Last 2 days',
    value: {
      start: moment()
        .startOf('day')
        .subtract(1, 'days')
        .valueOf(),
      end:
        moment()
          .endOf('day')
          .valueOf() + 1,
      dynamic: true,
    },
  },
  {
    label: 'Last week',
    value: {
      start: moment()
        .startOf('day')
        .subtract(1, 'weeks')
        .valueOf(),
      end:
        moment()
          .endOf('day')
          .valueOf() + 1,
      dynamic: true,
    },
  },
  {
    label: 'Last month',
    value: {
      start: moment()
        .startOf('day')
        .subtract(1, 'months')
        .valueOf(),
      end:
        moment()
          .endOf('day')
          .valueOf() + 1,
      dynamic: true,
    },
  },
];

const utcString = `${utcOffset > -1 ? `+${utcOffset}` : utcOffset}`;

const formatValue = ({ start, end, dynamic }) => {
  if (!dynamic) {
    return `${start},${end}`;
  }
  return `${getMinutesFromTimestamp(start)};${getMinutesFromTimestamp(end)};${utcString}`;
};

const parseValue = (value) => {
  const dateString = value.value;
  if (dateString.indexOf(',') !== -1) {
    const splitted = dateString.split(',');
    return {
      start: parseInt(splitted[0], 10),
      end: parseInt(splitted[1], 10),
      dynamic: false,
    };
  }
  if (dateString.indexOf(';') !== -1) {
    const splitted = dateString.split(';');
    return {
      start: getTimestampFromMinutes(splitted[0]),
      end: getTimestampFromMinutes(splitted[1]),
      dynamic: true,
    };
  }
  throw new Error('Invalid date string provided');
};

export const EntityItemStartTime = ({ onRemove, onChange, removable, title, value }) => (
  <FieldFilterEntity title={title} removable={removable} onRemove={onRemove}>
    <InputTimeDateRange
      presets={presets}
      onChange={(val) => {
        onChange({ condition: CONDITION_BETWEEN, value: formatValue({ ...val }) });
      }}
      value={parseValue(value)}
    />
  </FieldFilterEntity>
);
EntityItemStartTime.propTypes = {
  value: PropTypes.object,
  title: PropTypes.string,
  removable: PropTypes.bool,
  onRemove: PropTypes.func,
  onChange: PropTypes.func,
};
EntityItemStartTime.defaultProps = {
  value: {},
  removable: true,
  title: '',
  onRemove: () => {},
  onChange: () => {},
};
