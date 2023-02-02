// 6(Find Max/Min Number)

// Between two person
// const jim = 69;
// const dela = 97;
// if(jim > dela) {
//     console.log('Jim will get the cake');
// }
// else{
//     console.log('Dela you will get the cake');
// }

// Between three person
// const jim = 69;
// const dela = 97;
// const chinku = 99;

// if(jim > dela && jim > chinku){
//     console.log('Jim will get the cake');
// }
// else if (dela > jim && dela > chinku){
//     console.log('Dela will eat cake in this bela');
// }
// else{
//     console.log('Chinku will get the cake');
// }

// write a function that will take 3 numbers will return the max number
// By if-else and function
// function findMaxNumber(num1, num2, num3) {
//     const sum = Math.max(num1, num2, num3);
//     if(sum == num1){
//         return num1;
//     }
//     else if(sum == num2){
//         return num2;
//     }
//     else{ return num3}
// }
// const maxNumber = findMaxNumber(10, 11, 12);
// console.log(maxNumber);

// By function only
// function findMaxNumber(one, two, three) {
//     const sum = Math.max(one, two, three);
//     return sum;
// }
// const maxNumber = findMaxNumber(10, 11, 12);
// console.log(maxNumber);

// Write a function that will take 3 parameters and will return the min number
// By if-else and function
function findMinNumber(num1, num2, num3) {
    const sum = Math.min(num1, num2, num3);
    if(sum == num1){
        return num1;
    }
    else if(sum == num2){
        return num2;
    }
    else{ return num3}
}
const minNumber = findMinNumber(10, 11, 12);
console.log(minNumber);

// By function only
// function findMinNumber(one, two, three) {
//     const sum = Math.min(one, two, three);
//     return sum;
// }
// const minNumber = findMinNumber(10, 11, 12);
// console.log(minNumber);