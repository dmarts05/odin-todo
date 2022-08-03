import {
  format,
  isYesterday,
  isToday,
  isTomorrow,
  differenceInCalendarWeeks,
  differenceInCalendarYears,
} from 'date-fns';

function formatTaskDate(date) {
  const today = Date.now();

  if (isYesterday(date)) {
    return 'Yesterday';
  } else if (isToday(date)) {
    return 'Today';
  } else if (isTomorrow(date)) {
    return 'Tomorrow';
  } else if (
    differenceInCalendarWeeks(today, date, { weekStartsOn: 1 }) === 0
  ) {
    return format(date, 'EEEE');
  } else if (differenceInCalendarYears(today, date) === 0) {
    return format(date, 'do MMMM');
  } else {
    return format(date, 'do MMMM yyyy');
  }
}

export default formatTaskDate;
