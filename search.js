// 2(String Index Search)

const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada';

const searchString = 'PaKhi';
// const doesExist = lyrics.includes(searchString);
// console.log(doesExist);


// const lyricsLowerCase = lyrics.toLowerCase()
// const searchStringLower = searchString.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchStringLower);
// console.log(doesExist);

// const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExistOneLine);

// indexOf
// console.log(lyrics.indexOf('kailla'));
// console.log(lyrics.indexOf('Tumi'))
// 

// if(lyrics.indexOf('sada') !== -1){
//     console.log('exists inside the string')
// }
// else {
//     console.log('cannot find it');
// }

// startsWith
console.log(lyrics.startsWith('2mi'))

// endswith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';
console.log(fileName.endsWith('.pdf'));