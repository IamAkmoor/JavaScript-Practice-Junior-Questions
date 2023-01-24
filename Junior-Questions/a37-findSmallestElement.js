// findSmallestElement

// Write a function called "findSmallestElement".

// Given an array of numbers, "findSmallestElement" returns the smallest number within the given array.

// Notes:

//     If the given array is empty, it should return 0.

// 1 version
function findSmallestElement(arr) {
    // your code here
    let result = 0
    if(arr.length!== 0){
      result = Math.min(...arr)
    }
    return result
  }
  
  // 2 version
  function findSmallestElement(arr) {
    // your code here
   if (arr.length===0) return 0;
   let result = arr[0];
   for (let i=1; i<arr.length;i++){
     if (arr[i]<result){
       result=arr[i]
     }
   }
  return result
  }
  
  var output = findSmallestElement([4, 1, 9, 10]);
  console.log(output); // --> 1