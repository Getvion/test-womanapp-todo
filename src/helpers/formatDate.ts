import dayjs from 'dayjs';

type SeparatorType = ' ' | '.' | '/' | '-';

/**
 * Возвращает отфарматированную строку в нужном формате
 * @function
 * @param {string} date - дата в формате строки
 * @param {string} separator - разделитель, с помощью которого будет изменена строка
 */
export const formatDate = (date: string, separator: SeparatorType): string => {
  const dateObj = dayjs(date).format(`DD${separator}MM${separator}YYYY`);

  return dateObj;
};
