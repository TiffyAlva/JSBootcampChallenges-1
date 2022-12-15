/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */

const number = 6;
function factorial(num){
  let Total = 1; 
  for (let index = num;  index > 0 ;index--){
      Total = Total * index; //statement //index=start
  }
  return Total;
}
console.log(factorial(number));
// 1st loop
// index = 6
// Total = 1 * 6

// 2nd loop
// index = 5
// Total = 6 * 5 = 30

// numresult = factorial(6)



function stringReverse(str) {
  return str.split('').reverse().join('');
  
  
}

// do not use built in slice method.
function slicer(originalString, startIdx, endIdx) {

}

function addTheEvens(num) {
 

}


module.exports = {
  factorial, stringReverse, slicer, addTheEvens,
};
