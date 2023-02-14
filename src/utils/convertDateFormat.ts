export const convertDateFormat = (date: string) => {
  return date.split('-').reverse().join('.');
}