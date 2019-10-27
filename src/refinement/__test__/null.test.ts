import {isNull} from '../null';
import {constNull} from 'fp-ts/lib/function';

describe('null.ts', () => {
	describe('isNull', () => {
		it('should be truthy for a null', () => {
			expect(isNull(null)).toBeTruthy();
			expect(isNull(constNull())).toBeTruthy();
		});
		it('should be falsy for not a null', () => {
			expect(isNull(false)).toBeFalsy();
			expect(isNull('false')).toBeFalsy();
			expect(isNull([false])).toBeFalsy();
			expect(isNull(() => false)).toBeFalsy();
			expect(isNull(Symbol())).toBeFalsy();
			expect(isNull(undefined)).toBeFalsy();
		});
	});
});
