

export const getMonthNameInGenitiveCase = (date = new Date) =>
date.toLocaleString('ru', {
  month: 'long',
  day: 'numeric',
})