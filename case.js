// 1(String and Case)

// const string = "Iam a Programmer"
// const stringLength = string.length;
// console.log(stringLength);
// console.log(string[0]);
// console.log(string[3]);
// Note: String is immutable, means it's index can't be changed

const userName = 'blackPink';
const userInput = 'blackPinK';
console.log(userName.toLowerCase());
console.log(userInput.toUpperCase());
console.log(userName.toLocaleLowerCase())
if( userName.toLowerCase() === userInput.toLowerCase()){
    console.log('valid user')
}
else {
    console.log('invalid user');
}