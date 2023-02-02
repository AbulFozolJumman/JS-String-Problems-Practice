// 4(JS Math)
// Gsearch - mdn math

// Math.pow[To the power]
const result = Math.pow(3, 8);
// console.log(result);

// Math.abs[It convert number value to positive]
const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);
// console.log(gap);
if(gap < 5){
    console.log('you guys can be friends');
}
else{
    console.log('you guys stay apart');
}


// Decimal converter
const number = 2.451245;
const fullNumber = Math.round(number);
// console.log(fullNumber);
const result2 = Math.ceil(2.00001);
const result3 = Math.floor(456.259);
// console.log(result3); 

//  Random number
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// Let's play ludo by random number
for(let i = 0; i < 20; i++){
    const random = Math.round(Math.random()*6);
    console.log(random);
}