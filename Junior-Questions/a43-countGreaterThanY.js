// countGreaterThanY

// Return Array Count Greater than Y.

// Given an array and a value Y. count and print the number of array values greater than Y.

// 1 version
function countGreaterThanY(arr, y){
    // ur code  
     let total = arr.filter(el=> el> y)
     return total.length  
   }
   
   // 2 version
   function countGreaterThanY(arr, y){
    // ur code  
    let result=0;
    for (let i=0; i<arr.length; i++)
    {
      if (arr[i]>y) result++ 
    }
    return result
   }
   
   console.log(countGreaterThanY([1,2,3], 2))//1
   
   console.log(countGreaterThanY([2,2,2], 0)) //3