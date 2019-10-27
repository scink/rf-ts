import {isBoolean} from '../boolean';

describe('boolean.ts', () => {
	describe('isBoolean', () => {
		it('should return true for the boolean', () => {
			expect(isBoolean(true)).toBeTruthy();
			expect(isBoolean(false)).toBeTruthy();
			expect(isBoolean(!'')).toBeTruthy();
			expect(isBoolean(!!0)).toBeTruthy();
		});
		it('should return false for the not boolean', () => {
			expect(isBoolean(1)).toBeFalsy();
			expect(isBoolean('')).toBeFalsy();
			expect(isBoolean({})).toBeFalsy();
			expect(isBoolean([])).toBeFalsy();
			expect(isBoolean(Symbol())).toBeFalsy();
		});
	});
});
