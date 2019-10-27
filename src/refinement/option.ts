import {isNone, isSome as isSomeFPTS, Option, Some} from 'fp-ts/lib/Option';
import {isObjectOf as getObjectRefinement} from './object';
import {isString} from './string';
import {Refinement} from 'fp-ts/lib/function';
import {isUnknown} from './unknown';

export const isOption = (a: unknown): a is Option<unknown> =>
	getObjectRefinement({_tag: isString})(a) &&
	(a._tag === 'None' || (a._tag === 'Some' && getObjectRefinement({value: isUnknown})(a)));

export const isSome = <A>(r: Refinement<unknown, A>) => (a: unknown): a is Some<A> =>
	isOption(a) && isSomeFPTS(a) && r(a.value);

export const isOptionOf = <A>(r: Refinement<unknown, A>) => (a: unknown): a is Option<A> =>
	isOption(a) && (isSome(r)(a) || isNone(a));
