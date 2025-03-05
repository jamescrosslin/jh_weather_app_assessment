export const loadVariableFromEnv = function (variableName: string): string {
  return process.env[variableName];
};
