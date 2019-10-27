import {Refinement} from 'fp-ts/lib/function';

export const isArray: <A>(a: unknown) => a is Array<A> = Array.isArray;

export const isArrayOf = <A>(r: Refinement<unknown, A>) => (as: unknown): as is Array<A> => isArray(as) && as.every(r);

export const isTupleOf = <As extends Array<unknown>>(
	...rs: {[Index in keyof As]: Refinement<unknown, As[Index] extends infer A ? A : As[Index]>}
) => (t: unknown): t is As => isArray(t) && rs.length === t.length && rs.every((r, i) => r(t[i]));
