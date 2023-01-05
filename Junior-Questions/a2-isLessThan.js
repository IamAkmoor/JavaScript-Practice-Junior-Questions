// Create a function which returns true if any element of a given array is less then a given number

// `isLessThan([1,2,3,4],2) // true
// isLessThan([10,20,60],10) // false`
// Note: Please use loop and higher order functions (some)

function isLessThan(arr, num){
    // your code goes here
    return arr.some(el=> el< num)
   }
   