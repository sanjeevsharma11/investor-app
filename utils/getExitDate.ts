import dayjs from 'dayjs';

const getExitDate = (exitDate: Date) => {
  /**
   * if same day return Intraday
   * if next day return BTST
   * if 7 day from now return 1 Week
   * if 1 year return 1 year
   */

  const today = new Date();
  const exitDateTime = new Date(exitDate);
  const diff = exitDateTime.getTime() - today.getTime();
  const diffDays = Math.ceil(diff / (1000 * 3600 * 24));

  if (diffDays === 0) {
    return 'Intraday';
  } else if (diffDays === 1) {
    return 'BTST';
  } else if (diffDays === 7) {
    return '1 Week';
  } else if (diffDays === 365 || diffDays === 366) {
    return '1 Year';
  } else {
    return dayjs(exitDate).format('DD-MM-YYYY');
  }
};

export default getExitDate;
