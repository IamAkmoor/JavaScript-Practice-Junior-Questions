// getLongestElement

// Write a function called "getLongestElement".

// Given an array, "getLongestElement" returns the longest string in the given array.

// Notes:

//     If there are ties, it returns the first element to appear.

//     If the array is empty, it should return an empty string.

// 1 VERSION
function getLongestElement(arr) {
    // your code here
    let result = ''
    if (arr.length !== 0) {
      for (let i = 0; i < arr.length; i++) {
        for (let g = i; g < arr.length; g++) {
          if (arr[i] < arr[g]) {
            result = arr[g]
          }
        }
      }
    }
    return result
  }
  
  // 2 VERSION
  function getLongestElement(arr) {
    // your code here
   if (arr.length===0) return "";
   let result = arr[0];
   for (let i=1; i<arr.length; i++){
     if (arr[i].length>result.length){
       result=arr[i]
     }
   }
  return result
  }
  
  var output = getLongestElement(['one', 'two', 'three']);
  console.log(output); // --> 'three'
  
  