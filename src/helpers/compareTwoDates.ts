import dayjs from 'dayjs';

/**
 * Возвращает true если дата еще не наступила и false если дата уже прошла
 * @function
 * @param {string} date - строка в формате "YYYY-MM-DD"
 */
export const compareTwoDates = (date: string): boolean => {
  const newDate1 = dayjs(date);

  const todayDate = `${dayjs().year()}-${dayjs().month()}-${dayjs().date()}`;
  const today = dayjs(todayDate);

  const comparedDates = today.diff(newDate1);

  return comparedDates > 0;
};
