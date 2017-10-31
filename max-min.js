'use strict';
const numbers = [1,2,3,4,5,566,7,7,3,2];

function max(numbers) {
  let maxNum = 0; //numbers[0];
  let i = 0;

  while (i < numbers.length) {
    if (numbers[i] > maxNum) {
      maxNum = numbers[i];
    }  i++;    
  } return maxNum;

} console.log(max(numbers));


function min(numbers) {
  let minNum = numbers[0];
  let i = 0;

  while (i < numbers.length) {
    if (numbers[i] < minNum) {
      minNum = numbers[i];
    }  i++;    
  } return minNum;

} console.log(min(numbers));


// numbers=[1,2,3,4,5,6]

// function findMax(numbers){
//    maxNum = 0; 
//      i=0 
//    while(i<numbers.length) {
//  
//  if(numbers[i]>maxNum){ maxNum = numbers[i]; } i++; 
// } 
