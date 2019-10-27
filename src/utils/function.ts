// Object.key has not correct signature
export const objectKeys: <A extends object>(a: A) => Array<keyof A> = Object.keys as <A extends object>(
	a: A,
) => Array<keyof A>;
