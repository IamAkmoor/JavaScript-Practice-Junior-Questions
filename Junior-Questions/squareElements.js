// squareElements

// Write a function called "squareElements".

// Given a array of numbers, "squareElements" should return a new array where each element is the square of the element of the given array.


function squareElements(arr) {
    // your code here
  let newArr = []
  for(let i in arr){
    newArr.push(Math.pow(arr[i], 2))
  }
  return newArr
}

//second version

function squareElements(arr) {
    // your code here
    let result = arr.map(element=>element*element) 
    return result
}

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]

