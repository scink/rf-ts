import {isUndefined} from './undefined';
import {Refinement} from 'fp-ts/lib/function';

export const isOptional = <A>(r: Refinement<unknown, A>) => (a: unknown): a is A | undefined => r(a) || isUndefined(a);
