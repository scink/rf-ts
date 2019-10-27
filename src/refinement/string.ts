export const isString = (a: unknown): a is string => typeof a === 'string';
export const isEmptyString = (a: unknown): a is '' => isString(a) && !a.length;
export const isStringValue = (value: string) => (a: unknown): a is typeof value => isString(a) && a === value;
