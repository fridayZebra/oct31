// 'use strict';
// // const numbers = [1,2,3,4,5,566,7,7,3,2];
// // // Min-Max -----------------
// // // function max(numbers) {
// // //   let maxNum = 0; //numbers[0];
// // //   let i = 0;

// // //   while (i < numbers.length) {
// // //     if (numbers[i] > maxNum) {
// // //       maxNum = numbers[i];
// // //     }  i++;    
// // //   } return maxNum;

// // // } console.log(max(numbers));

// // // function min(numbers) {
// // //   let minNum = numbers[0];
// // //   let i = 0;

// // //   while (i < numbers.length) {
// // //     if (numbers[i] < minNum) {
// // //       minNum = numbers[i];
// // //     }  i++;    
// // //   } return minNum;

// // // } console.log(min(numbers));

// // // Average -----------------
// // function average(numbers){
// //   let sum = 0;
// //   let i=0;
// //   while(i<numbers.length){
// //     sum += numbers[i];
// //     i++;
// //   }
// //   let result = sum / numbers.length;
// //   return result;
// // }

// // console.log(average(numbers));

// // // FizzBuzz -----------------
// // const fizzBuzzNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// // function fizzBuzz(fizzBuzzNumbers){

// // //   for(let i=0; i<fizzBuzzNumbers.length; i++){

// // //     switch(true){
// // //       case (fizzBuzzNumbers[i]%15===0):
// // //         fizzBuzzNumbers[i] = 'fizzbuzz';
// // //         break;
// // //       case (fizzBuzzNumbers[i]%5===0):
// // //         fizzBuzzNumbers[i] = 'buzz';
// // //         break;
// // //       case (fizzBuzzNumbers[i]%3===0):
// // //         fizzBuzzNumbers[i] = 'fizz';
// // //         break;
// // //     }
// // //   }
// // //   return fizzBuzzNumbers;
// // // }
// // // console.log(fizzBuzz(fizzBuzzNumbers));

// // ----------Higher Order Function Drills -----------------
// //Functions as arguments (1)
// function repeat(fn, n) {
//   for (let i = 0; i < n; i++) {
//     fn();
//   }
// }
// function hello() {
//   console.log(`Hello world.`);
// }

// function goodBye() {
//   console.log(`Goodbye world.`);
// }

// console.log(repeat(goodBye,5));