import {objectKeys} from '../function';

const a = '';
const b = 0;
const c = false;
const d = {};

describe('function.ts', () => {
	describe('objectKeys', () => {
		it('should return empty array for the object with no properties', () => {
			expect(objectKeys({})).toEqual([]); // never[]
			expect(objectKeys(d)).toEqual([]); // never[]
		});
		it('should return array of property keys', () => {
			expect(objectKeys({a, b, c, d})).toEqual(['a', 'b', 'c', 'd']);
			expect(objectKeys({a, c})).toEqual(['a', 'c']);
		});
	});
});
