// primitive
import * as rfBoolean from './refinement/boolean';
import * as rfFunction from './refinement/function';
import * as rfNull from './refinement/null';
import {isInfinity, isNumber, isNaturalis, isNumberNaN} from './refinement/number';
import * as rfString from './refinement/string';
import * as rfUndefined from './refinement/undefined';

// complex
import * as rfBigint from './refinement/bigint';
import * as rfDate from './refinement/date';
import * as rfSymbol from './refinement/symbol';

// wrapper
import * as rfArray from './refinement/array';
import * as rfObject from './refinement/object';
import * as rfOption from './refinement/option';

// other
import * as rfOptional from './refinement/optional';

const rfNumber = {
	isInfinity,
	isNaturalis,
	isNumber,
	isNaN: isNumberNaN,
};

export {
	rfBoolean,
	rfFunction,
	rfNull,
	rfNumber,
	rfString,
	rfUndefined,
	rfBigint,
	rfDate,
	rfSymbol,
	rfArray,
	rfObject,
	rfOption,
	rfOptional,
};
