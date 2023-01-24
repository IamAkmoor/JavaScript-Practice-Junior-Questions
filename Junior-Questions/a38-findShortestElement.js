// findShortestElement

// Write a function called "findShortestElement".

// Given an array, "findShortestElement" returns the shortest string within the given array.

// Notes:

//     If there are ties, it should return the first element to appear.

//     If the given array is empty, it should return an empty string.

// 1 version
function findShortestElement(arr) {
    if(arr.length === 0){
        return ""
      }
    else {
      let shortest = arr[0]
      for(let i=0; i<arr.length; i++){
      if(Math.min(arr[i].length) == true){
        shortest = arr[i]
      }
      return shortest
    }}
  }
  
  // 2 version
  function findShortestElement(arr) {
    // your code here
   if (arr.length===0) return "";
   let result = arr[0];
   for (let i=1; i<arr.length;i++){
     if (arr[i].length<result.length){
       result=arr[i]
     }
   }
  return  result
  }
  
  var output = findShortestElement(["three","seven"]);
  