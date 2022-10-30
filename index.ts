type StringFunction = (value: string) => string;

const hello: StringFunction = (name: string): string => {
  return `Hello ${name}`;
};

export default {
  hello,
};
