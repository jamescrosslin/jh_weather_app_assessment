export const isNumber = function (value: unknown): value is number {
  return typeof value === 'number' && !isNaN(value);
};
