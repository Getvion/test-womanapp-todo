import dayjs from 'dayjs';

type SeparatorType = ' ' | '.' | '/' | '-';

export const formatDate = (date: string, separator: SeparatorType): string => {
  const dateObj = dayjs(date).format(`DD${separator}MM${separator}YYYY`);

  return dateObj;
};
