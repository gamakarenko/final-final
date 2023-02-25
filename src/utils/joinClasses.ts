type IClasses = (string | undefined | null)[];

export const joinClasses = (...classes: IClasses): string => {
  const result: IClasses = [];

  classes.forEach((className) => {
    if (Boolean(className)) {
      result.push(className);
    }
  });

  return result.join(' ');
};
