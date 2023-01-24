// getLengthOfShortestElement

// Write a function called "getLengthOfShortestElement".

// Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

// Notes:

//     It should return 0 if the array is empty.

// 1 version
function getLengthOfShortestElement(arr) {
  if (arr.length === 0){
  return 0
  }
  let newArr = arr.map(el => el.length)
  return Math.min(...newArr)
}

// 2 version
function getLengthOfShortestElement(arr) {
  // your code here
const lengthArray = arr.map((e)=> e.length)

let shortest = Infinity

if(lengthArray.length < 1){
  return 0
}

for(const element of lengthArray){
  if(element  < shortest){
    shortest = element
  }
}
return shortest
}
var output = getLengthOfShortestElement([ ]);
console.log(output); // --> 3
