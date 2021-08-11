ls
const moment = require( 'moment' );

/*
Write a function that takes a string of parentheses, and determines if the order of 
the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/

// function validParentheses(s) {
// const stack = [];
// const map = new Map([
// 	['(', ')'],
// 	['[', ']'],
// 	['{', '}'],
// ]);
// for (let i = 0; i < s.length; i += 1) {
// 	// s.split('').map((ele, i, arr) => {
// 	if (map.has(s[i])) {
// 		stack.push(map.get(s[i]));
// 	} else if (s[i] !== stack.pop()) {
// 		return false;
// 	}
// 	// });
// }
// return stack.length === 0;

// 	return (
// 		[...s].reduce((prev, curr) => {
// 			(curr === ')' && prev++) || (curr === '(' && prev--);
// 			return prev;
// 		}, 0) === 0
// 	);
// }

// console.log(validParentheses('(())((()())())'));
// console.log(validParentheses(')(()))'));

// module.exports = validParentheses;

/* const anagram = (str, words) => {
	return words.filter(
		(word) => word.split('').sort().join() === str.split('').sort().join()
	);
};

console.log(anagram('aabbs', ['baabs', 'baasb', 'saabss', 'sabab'])); */

// function formatDuration( time ) {
// 	let display;
// 	let intervalID = setInterval( () => {


// 		let year = ~~( time / ( 86400 * 365 ) );
// 		let day = ~~( ( time % ( 365 * 86400 ) ) / 86400 );
// 		let hr = ~~( time % ( 86400 ) / 3600 );
// 		let min = ~~( ( time % 3600 ) / 60 );
// 		let sec = ~~time % 60;
// 		--time;

// 		let secFormat = sec <= 1 ? 'second' : 'seconds';
// 		let minFormat = min <= 1 ? 'minute' : 'minutes';
// 		let hrFormat = hr <= 1 ? 'hour' : 'hours';
// 		let dayFormat = day <= 1 ? 'day' : 'days';
// 		let yearFormat = year <= 1 ? 'year' : 'years';


// 		let timeWithYear = sec === 0 ? `${ year } ${ yearFormat }, ${ day } ${ dayFormat }, ${ hr } ${ hrFormat } and ${ min } ${ minFormat }` : `${ year } ${ yearFormat }, ${ day } ${ dayFormat }, ${ hr } ${ hrFormat }, ${ min } ${ minFormat } and ${ sec } ${ secFormat }`;

// 		let timeWithDay = sec === 0 ? `${ day } ${ dayFormat }, ${ hr } ${ hrFormat } and ${ min } ${ minFormat }` : hr === 0 ? `${ day } ${ dayFormat }, ${ min } ${ minFormat } and ${ sec } ${ secFormat }` : min === 0 ? `${ day } ${ dayFormat }, ${ hr } ${ hrFormat } and ${ sec } ${ secFormat }` : `${ day } ${ dayFormat }, ${ hr } ${ hrFormat }, ${ min } ${ minFormat } and ${ sec } ${ secFormat }`;

// 		let timeWithHr = min === 0 && sec === 0 ? `${ hr } ${ hrFormat }` : `${ hr } ${ hrFormat }, ${ min } ${ minFormat } and ${ sec } ${ secFormat }`;

// 		let timeWithMin = sec === 0 ? `${ min } ${ minFormat }` : `${ min } ${ minFormat } and ${ sec } ${ secFormat }`;

// 		let timeWithSec = `${ sec } ${ secFormat }`;

// 		let format = time < 60 ? timeWithSec : time < 3600 ? timeWithMin : time < 86400 ? timeWithHr : time < 31536000 ? timeWithDay : timeWithYear;

// 		console.log( format );
// 		if ( time === 0 ) {

// 			clearInterval( intervalID );
// 			return time === 0 ? 'now' : format;
// 		};
// 	}, 1000 );

// 	intervalID;

// }


// console.log( formatDuration( 70 ) );

// module.exports = formatDuration;


// function convertSecondstoTime( given_seconds ) {

// setInterval( () => {

// 	dateObj = new Date( given_seconds * 1000 );
// 	days = dateObj.getUTCDay();
// 	hours = dateObj.getUTCHours();
// 	minutes = dateObj.getUTCMinutes();
// 	seconds = dateObj.getSeconds();

// 	timeString = hours.toString().padStart( 2, '0' )
// 		+ 'hr' + minutes.toString().padStart( 2, '0' )
// 		+ 'min' + seconds.toString().padStart( 2, '0' )
// 		+ 'sec';

// 	given_seconds--;

// 	console.log( timeString );
// 	// console.log( dateObj );

// }, 1000 );

// 	const intervalID = setInterval( () => {
// 		given_seconds--;
// 		const hour = ~~( moment.duration( given_seconds, 'seconds' ).hours() );
// 		const min = moment.duration( given_seconds, 'seconds' ).minutes().toString().padStart( 2, 0 );
// 		const sec = moment.duration( given_seconds, 'seconds' ).seconds().toString().padStart( 2, 0 );
// 		console.log( `${ hour }:${ min }:${ sec }` );

// 		given_seconds < 0 && clearInterval( intervalID );
// 	}, 1000 );


// }

// console.log( convertSecondstoTime( 86400 ) );


function solution( list ) {
	let output = [];
	for ( let i = 0; i < list.length; i++ ) {
		let start = list[ i ];
		let end = start;

		while ( ( list[ i + 1 ] - list[ i ] ) === 1 ) {
			console.log( list[ i + 1 ] );
			console.log( list[ i ] === 1 );
			end = list[ i + 1 ];
			i += 1;
		}

		output.push( start === end ? start + '' : start + '-' + end );
	}

	console.log( output.join( ', ' ) );
	return output.join( ',' );
}

console.log( solution( [ -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20 ] ) );


module.exports = solution;