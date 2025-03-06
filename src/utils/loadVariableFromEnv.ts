export const loadVariableFromEnv = async function (variableName: string): Promise<string> {
  return await process.env[variableName];
};
