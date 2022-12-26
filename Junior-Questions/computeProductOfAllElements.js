// computeProductOfAllElements

// Write a function called "computeProductOfAllElements".

// Given an array of numbers, "computeProductOfAllElements" returns the products of all the elements in the given array.

// Notes:
//   If given array is empty, it should return 0.

// 1 version
function computeProductOfAllElements(arr) {
    // your code here
    let result = 0;
    if (arr.length === 0) return result
    else {
      result = arr.reduce((prevValue, currValue) => prevValue * currValue)
      return result
    }
  }
  
  // 2 version
  function computeProductOfAllElements(arr) {
    // your code here
    if (arr.length===0) return 0;
    let result=1;
    for (let i=0; i<arr.length; i++){
      result=result*arr[i]
    }
    return result;
  }
  
  var output = computeProductOfAllElements([2,5,6]);
  console.log(output); // --> 60 
  