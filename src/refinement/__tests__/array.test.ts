import {isArray, isArrayOf, isTupleOf} from '../array';
import {isString} from '../string';
import {isBoolean} from '../boolean';
import {isNumber} from '../number';

describe('array.ts', () => {
	describe('isArray', () => {
		it('should be truthy for an array', () => {
			expect(isArray([])).toBeTruthy();
			expect(isArray(['qwe', 123, {}])).toBeTruthy();
		});
		it('should be falsy for not an array', () => {
			expect(isArray({})).toBeFalsy();
			expect(isArray('qwe')).toBeFalsy();
			expect(isArray(123)).toBeFalsy();
			expect(isArray(Symbol())).toBeFalsy();
			expect(isArray(undefined)).toBeFalsy();
			expect(isArray(null)).toBeFalsy();
			expect(isArray(BigInt('123'))).toBeFalsy();
			expect(isArray(new Date())).toBeFalsy();
		});
	});

	describe('isArrayOf', () => {
		it('should be truthy for matching array', () => {
			expect(isArrayOf(isString)(['', '', ''])).toBeTruthy();
			expect(isArrayOf(isBoolean)([true, false])).toBeTruthy();
			expect(isArrayOf(isNumber)([1])).toBeTruthy();
			expect(isArrayOf(isNumber)([])).toBeTruthy();
		});
		it('should be falsy for other array', () => {
			expect(isArrayOf(isString)(['', '', false])).toBeFalsy();
			expect(isArrayOf(isNumber)([new Date()])).toBeFalsy();
		});
		it('should be falsy for not an array', () => {
			expect(isArrayOf(isNumber)(false)).toBeFalsy();
			expect(isArrayOf(isNumber)('false')).toBeFalsy();
			expect(isArrayOf(isNumber)({})).toBeFalsy();
			expect(isArrayOf(isNumber)(1)).toBeFalsy();
			expect(isArrayOf(isNumber)(Symbol())).toBeFalsy();
		});
	});

	describe('isTupleOf', () => {
		it('should be truthy for a correct tuple', () => {
			expect(isTupleOf(isString, isNumber, isBoolean)(['', 1, false])).toBeTruthy();
		});
		it('should be falsy for an other tuple', () => {
			expect(isTupleOf(isString, isNumber, isBoolean)([])).toBeFalsy();
			expect(isTupleOf(isString, isNumber, isBoolean)(['', 1, true, undefined])).toBeFalsy();
		});
		it('should be falsy for not a tuple', () => {
			expect(isTupleOf(isString, isNumber, isBoolean)({})).toBeFalsy();
			expect(isTupleOf(isString, isNumber, isBoolean)(false)).toBeFalsy();
			expect(isTupleOf(isString, isNumber, isBoolean)(1)).toBeFalsy();
			expect(isTupleOf(isString, isNumber, isBoolean)('')).toBeFalsy();
			expect(isTupleOf(isString, isNumber, isBoolean)(Symbol())).toBeFalsy();
			expect(isTupleOf(isString, isNumber, isBoolean)(() => ['', 1, true])).toBeFalsy();
		});
	});
});
