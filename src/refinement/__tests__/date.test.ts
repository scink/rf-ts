import {isDate} from '../date';

describe('date.ts', () => {
	describe('isDate', () => {
		it('should return true for the date', () => {
			expect(isDate(new Date())).toBeTruthy();
		});
		it('should return false for the not date', () => {
			expect(isDate(new Date().toISOString())).toBeFalsy();
			expect(isDate(false)).toBeFalsy();
			expect(isDate({})).toBeFalsy();
			expect(isDate(1)).toBeFalsy();
			expect(isDate('false')).toBeFalsy();
			expect(isDate([])).toBeFalsy();
			expect(isDate(Symbol())).toBeFalsy();
		});
	});
});
