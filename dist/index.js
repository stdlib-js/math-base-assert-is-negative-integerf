/** @license Apache-2.0 */

'use strict';

/**
* Test if a finite single-precision floating-point number is a negative integer.
*
* @module @stdlib/math-base-assert-is-negative-integerf
*
* @example
* var isNegativeIntegerf = require( '@stdlib/math-base-assert-is-negative-integerf' );
*
* var bool = isNegativeIntegerf( -1.0 );
* // returns true
*
* bool = isNegativeIntegerf( 0.0 );
* // returns false
*
* bool = isNegativeIntegerf( 10.0 );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
