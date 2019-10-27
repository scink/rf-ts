import {isOption, isOptionOf, isSome} from '../option';
import {none, some} from 'fp-ts/lib/Option';
import {isString, isStringValue} from '../string';

describe('option.ts', () => {
	describe('isOption', () => {
		it('should be truthy for an Option', () => {
			expect(isOption(some(1))).toBeTruthy();
			expect(isOption(none)).toBeTruthy();
			expect(isOption({_tag: 'None'})).toBeTruthy();
			expect(isOption({_tag: 'Some', value: ''}));
		});
		it('should be falsy for a not Option', () => {
			expect(isOption(false)).toBeFalsy();
			expect(isOption(1)).toBeFalsy();
			expect(isOption({_tag: 'Some'})).toBeFalsy();
			expect(isOption(Symbol())).toBeFalsy();
		});
	});
	describe('isSome', () => {
		it('should be truthy for a matching Some', () => {
			expect(isSome(isString)(some(''))).toBeTruthy();
			expect(isSome(isString)({_tag: 'Some', value: ''})).toBeTruthy();
			expect(isSome(isString)(some(String('qwe')))).toBeTruthy();
		});
		it('should be falsy for not a some', () => {
			expect(isSome(isString)(none)).toBeFalsy();
			expect(isSome(isString)(1)).toBeFalsy();
			expect(isSome(isString)(undefined)).toBeFalsy();
		});
		it('should be falsy for a not matching Some', () => {
			expect(isSome(isString)(some(1))).toBeFalsy();
			expect(isSome(isString)(some(true))).toBeFalsy();
			expect(isSome(isString)({_tag: 'Some'})).toBeFalsy();
		});
	});
	describe('isOptionOf', () => {
		it('should be truthy for a matching option', () => {
			expect(isOptionOf(isString)(some(''))).toBeTruthy();
			expect(isOptionOf(isString)(none)).toBeTruthy();
			expect(isOptionOf(isString)({_tag: 'None'})).toBeTruthy();
			expect(isOptionOf(isString)({_tag: 'Some', value: ''})).toBeTruthy();
		});
		it('should be falsy for a not matching Option', () => {
			expect(isOptionOf(isString)(some(123))).toBeFalsy();
			expect(isOptionOf(isStringValue('qwe'))(some('asd'))).toBeFalsy();
		});
		it('should be falsy for a not Option', () => {
			expect(isOptionOf(isString)(Symbol())).toBeFalsy();
			expect(isOptionOf(isString)(123)).toBeFalsy();
			expect(isOptionOf(isString)([none])).toBeFalsy();
		});
	});
});
