export const isNumber = (a: unknown): a is number => typeof a === 'number';
export const isNumberNaN = (a: unknown): a is typeof NaN => isNumber(a) && isNaN(a);
export const isNaturalis = (a: unknown): a is number => isNumber(a) && a > 0 && a % 1 === 0;
export const isInfinity = (a: unknown): a is typeof Infinity => isNumber(a) && !isNumberNaN(a) && !Number.isFinite(a);
