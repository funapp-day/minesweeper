export const classNames = (...classNames: (string | undefined)[]) => {
  return classNames.filter((value) => value).join(' ')
};
