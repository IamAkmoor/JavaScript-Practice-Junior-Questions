// reverse

// Reverse Array.

// Given array, write a function to reverse values in-place.

function reverse(arr) {
    // your code here
    let newArr =[]
   for(let i = 0; i<arr.length; i++){
     newArr.unshift(arr[i])
   }
    return newArr
  }
  
  console.log(reverse([34,6,4,2])) // [2,4,6,34]