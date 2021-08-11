// const formatDuration = require( './practice.js' );
const solution = require( './practice.js' );

// test( 'Format Duration', () => {
// 	expect( formatDuration( 62 ) ).toBe( '1 minute and 2 seconds' );
// } );
// test( 'Format Duration', () => {
// 	expect( formatDuration( 315360001 ) ).toBe( '10 years, 0 day, 0 hour, 0 minute and 1 second' );
// } );


test( 'Return formated string in a range', () => {
	expect( solution( [ -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20 ] ) ).toBe( '-6,-3-1,3-5,7-11,14,15,17-20' );
} );

