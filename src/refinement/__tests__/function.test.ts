import {isFunction} from '../function';

describe('function.ts', () => {
	describe('isFunction', () => {
		it('should be truthy for a function', () => {
			expect(isFunction(() => {})).toBeTruthy();
			expect(
				isFunction(function() {
					return '';
				}),
			).toBeTruthy();
		});
		it('should be falsy for not a function', () => {
			expect(isFunction(false)).toBeFalsy();
			expect(isFunction([false])).toBeFalsy();
			expect(isFunction('false')).toBeFalsy();
			expect(isFunction({})).toBeFalsy();
			expect(isFunction(Symbol())).toBeFalsy();
			expect(isFunction(undefined)).toBeFalsy();
		});
	});
});
