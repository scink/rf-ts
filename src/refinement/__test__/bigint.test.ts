import {isBigInt} from '../bigint';
import {none, tryCatch} from 'fp-ts/lib/Option';

describe('bigint.ts', () => {
	describe('isBigInt', () => {
		it('should be truthy for a bigint', () => {
			expect(isBigInt(BigInt(12312312312312))).toBeTruthy();
			expect(isBigInt(BigInt('123123123123123123123123123123123123123123123123123123123123'))).toBeTruthy();
		});
		it('should trow an error for a wrong argument for a bigint', () => {
			expect(tryCatch(() => isBigInt(BigInt('sadfasdf')))).toEqual(none);
			expect(tryCatch(() => isBigInt(BigInt('231231231231231231231231231231231231231.123123123')))).toEqual(none);
			expect(tryCatch(() => isBigInt(BigInt({})))).toEqual(none);
		});
		it('should be falsy for a wrong bigint', () => {
			expect(isBigInt({})).toBeFalsy();
			expect(isBigInt([])).toBeFalsy();
			expect(isBigInt('')).toBeFalsy();
			expect(isBigInt(0)).toBeFalsy();
			expect(isBigInt(Symbol())).toBeFalsy();
			expect(isBigInt(undefined)).toBeFalsy();
			expect(isBigInt(null)).toBeFalsy();
		});
	});
});
