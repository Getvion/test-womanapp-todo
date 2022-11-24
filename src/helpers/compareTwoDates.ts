import dayjs from 'dayjs';

export const compareTwoDates = (date1: string): boolean => {
  // принимает на вход  аргумент в в формате "YYYY-MM-DD"
  // возвращает true если результат сравнения больше 0 и false если результат сравнения меньше 0
  //  т.е. если переданная дата уже прошла, то вернет false

  const newDate1 = dayjs(date1);

  const todayDate = `${dayjs().year()}-${dayjs().month()}-${dayjs().date()}`;
  const today = dayjs(todayDate);

  const comparedDates = today.diff(newDate1);

  return comparedDates > 0;
};
