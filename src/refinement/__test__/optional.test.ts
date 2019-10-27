import {isOptional} from '../optional';
import {isString} from '../string';

describe('optional.ts', () => {
	describe('isOptional', () => {
		it('should be truthy for optional', () => {
			expect(isOptional(isString)('')).toBeTruthy();
			expect(isOptional(isString)(undefined)).toBeTruthy();
		});
		it('should be falsy for a not matching value', () => {
			expect(isOptional(isString)(true)).toBeFalsy();
			expect(isOptional(isString)({})).toBeFalsy();
			expect(isOptional(isString)(null)).toBeFalsy();
			expect(isOptional(isString)(NaN)).toBeFalsy();
			expect(isOptional(isString)(Symbol())).toBeFalsy();
			expect(isOptional(isString)(123)).toBeFalsy();
		});
	});
});
