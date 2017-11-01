'use strict';
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


//Functions as arguments (2)
// Return only names that begin with 'R'
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// const filteredNames = filter(myNames, function(name) {
//   // This is a "predicate function" - it's a function that only returns a boolean
//   return name[0] === 'R';
// });

// console.log(filteredNames); // => ['Rich', 'Ray']

// //TASK -- DEFINE YOUR FILTER FUNCTION BELOW:

// function filter(arr, fn){
//   let newArr = [];
  
//   for (let i = 0; i < arr.length; i++) {
//     //console.log(fn);  
//     if (fn(arr[i]) === true) {
//       newArr.push(arr[i]);
//     } 
//   }
//   return newArr;
// }

// Functions as return values

// function hazardWarningCreator(typeOfWarning) {
//   let warningCounter = 0;
//   return function(location){
//     warningCounter++;
//     console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
//     console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
//   }
// }
// const rocksWarning = hazardWarningCreator('landslide');
// const floodWarning = hazardWarningCreator('Flood warning in cities');
// const heatWarning = hazardWarningCreator('Fire warning in woods');

// console.log(rocksWarning('Anaheim'));
// console.log(heatWarning('Virginia Beach'));
// console.log(rocksWarning('San Francisco'));
// console.log(floodWarning('Sebastapool'));

let turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

let forwardAndLeftSteps = turtleMovements.filter(
  function(movement){
    return movement[0] >= 0 && movement[1] >= 0;
  });

console.log(forwardAndLeftSteps);


let totalStepsArr = forwardAndLeftSteps.map(
  function(steps){
     let totalSteps = steps[0] + steps[1];
     return totalSteps;
  });
console.log(totalStepsArr);


let totalMovements = totalStepsArr.forEach(
  function(movement){
    console.log(movement);
  });

  // let boat = {
  //   color: 'white',
  //   length: 24,
  //   engine: 'y150',
  //   howFast: function(){
  //     console.log(`I'm going x speed`);
  //   }
  // }

  
// Accessing properties of an object:
// Object Destructuring
const littleYacht = {
    floorColor: "red",
    maximumLbs: 1000,
    inOperation: true,
    christened: false,
    hornSound: "Ride of the Walkeries"
};

const { floorColor, inOperation, hornSound } = littleYacht;
console.log(floorColor);  // red
console.log(inOperation); // true
console.log(hornSound);   // Ride of the Walkeries