import {isArray} from './array';
import {objectKeys} from '../utils/function';
import {Refinement} from 'fp-ts/lib/function';

export const isObject = (a: unknown): a is object => typeof a === 'object' && a !== null && !isArray(a);

export const isObjectOf = <A extends object>(r: {[K in keyof A]: Refinement<unknown, A[K]>}) => (a: unknown): a is A =>
	isObject(a) && objectKeys(r).every(key => r[key]((a as Record<keyof A, unknown>)[key]));
