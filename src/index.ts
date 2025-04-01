type StringFunction = (value: string) => string;

export const hello: StringFunction = (name: string): string => {
  return `Hello ${name}`;
};
