export const convertDateFormat = (date: string | undefined | null) => {
  if (!date) {
    return '';
  }

  return date.split('-').reverse().join('.');
};
