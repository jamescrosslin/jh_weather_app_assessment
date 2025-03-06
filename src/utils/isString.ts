export const isString = function (value: unknown): value is string {
  return typeof value === 'string';
};
