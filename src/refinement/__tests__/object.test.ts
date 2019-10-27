import {isObject, isObjectOf} from '../object';
import {none} from 'fp-ts/lib/Option';
import {isString} from '../string';
import {isNumber} from '../number';
import {isBoolean} from '../boolean';

describe('object.ts', () => {
	describe('isObject', () => {
		it('should be truthy for an object', () => {
			expect(isObject({})).toBeTruthy();
			expect(isObject(none)).toBeTruthy();
		});
		it('should be falsy for not an object', () => {
			expect(isObject(true)).toBeFalsy();
			expect(isObject([true])).toBeFalsy();
			expect(isObject('true')).toBeFalsy();
			expect(isObject(Symbol)).toBeFalsy();
			expect(isObject(null)).toBeFalsy();
			expect(isObject(undefined)).toBeFalsy();
		});
	});
	describe('isObjectOf', () => {
		const obj = {a: isString, b: isNumber, c: isObjectOf({a: isString, b: isBoolean})};
		it('should be truthy for a matching object', () => {
			expect(
				isObjectOf(obj)({
					a: '',
					b: 0,
					c: {a: '', b: false},
				}),
			).toBeTruthy();
			expect(
				isObjectOf(obj)({
					a: '',
					b: 0,
					c: {a: '', b: false, c: 1},
					d: '',
				}),
			);
		});
		it('should be falsy for a not matching object', () => {
			expect(isObjectOf(obj)(false)).toBeFalsy();
			expect(isObjectOf(obj)('false')).toBeFalsy();
			expect(isObjectOf(obj)(Symbol())).toBeFalsy();
			expect(
				isObjectOf(obj)({
					a: 1,
					b: 0,
					c: {a: '', b: false},
				}),
			).toBeFalsy();
		});
	});
});
