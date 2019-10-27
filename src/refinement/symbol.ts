export const isSymbol = (a: symbol | unknown): a is symbol =>
	typeof a === 'symbol' || (typeof a === 'object' && Object.prototype.toString.call(a) === '[object Symbol]');
