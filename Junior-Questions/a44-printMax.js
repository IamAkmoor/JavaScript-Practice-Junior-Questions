// printMax

// Given an array, print the max.

// 1 version
function printMax(arr){
    // ur code  
     return Math.max(...arr)
   }
   
   // 2 version
   function printMax(arr){
    // ur code  
    let result=arr[0];
    for (let i=1; i<arr.length; i++)
    {
      if (arr[i]>result) result=arr[i]; 
    }
    return result
   }
   
   console.log(printMax([1,-12,3,1,0])) //3
   
   console.log(printMax([2,2,2])) //2
   