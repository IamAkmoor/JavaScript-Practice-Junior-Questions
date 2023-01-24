
// computeSumOfAllElements

// Write a function called "computeSumOfAllElements".

// Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array.

// 1 version
function computeSumOfAllElements(arr) {
    // your code here
    return arr.reduce((acc, currentVal)=> acc+currentVal)
  }
  
  // 2 version
  function computeSumOfAllElements(arr) {
    // your code here
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  var output = computeSumOfAllElements([-10,10])
  
  console.log(output); // --> 6
  