// function fetchUrl() {

//     const value = document.querySelector( 'input' ).value;

//     fetch( `https://openlibrary.org/isbn/${ value }.json` )
//         .then( res => res.json() )
//         .then( data => {
//             if ( !localStorage.getItem( 'books' ) ) {
//                 localStorage.setItem( 'books', '' );
//             }

//             localStorage.setItem( 'books', data.title );

//             document.querySelector( 'h2' ).innerText = localStorage.getItem( 'books' );
//         }
//         ).catch( err => {
//             return ` there was an error: ${ err }`;
//         } );
// }

// const id = Symbol();

// const courseInfo = {
//     title: 'JavaScript',
//     topics: [ 'Strings', 'Arrays', 'Objects' ]
// };

// courseInfo[ id ] = 34587;
// console.log( courseInfo );

// const isPasswordValid = (pass, name) => {
// 	if (pass.includes(name)) return false;
// 	if (pass.includes(' ')) return false;
// 	if (pass.length < 8) return false;
// 	return true;
// };

// console.log(isPasswordValid('P@ssw0r', 'leo'));

console.log('Connected');
