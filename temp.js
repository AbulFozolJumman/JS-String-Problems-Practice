// 5(Value Swap)

let first = 5;
let second = 7;
console.log(first, second);
// this is wrong approach
// first = second;
// second = first;
// console.log(first, second);

// Right approach: 1
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// Right approach: 2 --- Destructuring 
[ first, second ] = [ second, first ];

console.log(first, second);