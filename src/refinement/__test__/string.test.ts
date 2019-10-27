import {isEmptyString, isString, isStringValue} from '../string';

describe('string.ts', () => {
	describe('isString', () => {
		it('should be truthy for a string value', () => {
			expect(isString('')).toBeTruthy();
			expect(isString(String())).toBeTruthy();
		});
		it('should be falsy for a not string value', () => {
			expect(isString(undefined)).toBeFalsy();
			expect(isString(Symbol())).toBeFalsy();
			expect(isString(123)).toBeFalsy();
			expect(isString([undefined])).toBeFalsy();
			expect(isString({})).toBeFalsy();
		});
	});
	describe('isEmptyString', () => {
		it('should be truthy for an empty string', () => {
			expect(isEmptyString('')).toBeTruthy();
			expect(isEmptyString(String())).toBeTruthy();
		});
		it('should be falsy for not a string', () => {
			expect(isEmptyString(123)).toBeFalsy();
			expect(isEmptyString([123])).toBeFalsy();
			expect(isEmptyString(Symbol())).toBeFalsy();
		});
		it('should be falsy for not an empty string', () => {
			expect(isEmptyString('qwe')).toBeFalsy();
		});
	});
	describe('isStringValue', () => {
		it('should be truthy for a matching string value', () => {
			expect(isStringValue('value')('value')).toBeTruthy();
			expect(isStringValue('value')(String('value'))).toBeTruthy();
			expect(isStringValue('123')((123).toString())).toBeTruthy();
		});
		it('should be falsy for a not matching string value', () => {
			expect(isStringValue('')('qwe')).toBeFalsy();
			expect(isStringValue('asd')('qwe')).toBeFalsy();
			expect(isStringValue('asd')('')).toBeFalsy();
		});
		it('should be falsy for a not string', () => {
			expect(isStringValue('qwe')(123)).toBeFalsy();
			expect(isStringValue('qwe')(Symbol('qwe'))).toBeFalsy();
			expect(isStringValue('qwe')({})).toBeFalsy();
		});
	});
});
