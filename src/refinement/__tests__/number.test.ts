import {isInfinity, isNaturalis, isNumber, isNumberNaN} from '../number';

describe('number.ts', () => {
	describe('isNumber', () => {
		it('should be truthy for a number', () => {
			expect(isNumber(1)).toBeTruthy();
			expect(isNumber(0)).toBeTruthy();
			expect(isNumber(Infinity)).toBeTruthy();
			expect(isNumber(NaN)).toBeTruthy();
			expect(isNumber((() => 1)())).toBeTruthy();
		});
		it('should be falsy for not a number', () => {
			expect(isNumber(false)).toBeFalsy();
			expect(isNumber('false')).toBeFalsy();
			expect(isNumber([false])).toBeFalsy();
			expect(isNumber({})).toBeFalsy();
			expect(isNumber(Symbol())).toBeFalsy();
			expect(isNumber(undefined)).toBeFalsy();
			expect(isNumber(null)).toBeFalsy();
		});
	});
	describe('isNumberNaN', () => {
		it('should be truthy for a NaN', () => {
			expect(isNumberNaN(NaN)).toBeTruthy();
			expect(isNumberNaN(Infinity / Infinity)).toBeTruthy();
		});
		it('should be falsy for not a NaN', () => {
			expect(isNumberNaN(true)).toBeFalsy();
			expect(isNumberNaN([true])).toBeFalsy();
			expect(isNumberNaN({})).toBeFalsy();
			expect(isNumberNaN('true')).toBeFalsy();
			expect(isNumberNaN(Infinity)).toBeFalsy();
			expect(isNumberNaN(Symbol())).toBeFalsy();
			expect(isNumberNaN(null)).toBeFalsy();
		});
	});
	describe('isNaturalis', () => {
		it('should be truthy for a natural number', () => {
			expect(isNaturalis(1)).toBeTruthy();
			expect(isNaturalis(123)).toBeTruthy();
		});
		it('should be falsy for other', () => {
			expect(isNaturalis(0)).toBeFalsy();
			expect(isNaturalis(-1)).toBeFalsy();
			expect(isNaturalis(true)).toBeFalsy();
			expect(isNaturalis(() => 1)).toBeFalsy();
			expect(isNaturalis({})).toBeFalsy();
		});
	});
	describe('isInfinity', () => {
		it('should be truthy for an Infinity', () => {
			expect(isInfinity(1 / 0)).toBeTruthy();
			expect(isInfinity(Infinity)).toBeTruthy();
			expect(isInfinity(-Infinity)).toBeTruthy();
		});
		it('should be falsy for not an Infinity', () => {
			expect(isInfinity(false)).toBeFalsy();
			expect(isInfinity('false')).toBeFalsy();
			expect(isInfinity([false])).toBeFalsy();
			expect(isInfinity({})).toBeFalsy();
			expect(isInfinity(Infinity / Infinity)).toBeFalsy();
			expect(isInfinity(NaN)).toBeFalsy();
			expect(isInfinity(null)).toBeFalsy();
		});
	});
});
