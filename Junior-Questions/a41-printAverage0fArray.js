// printAverage0fArray

// Analyze an array's values and print the average.

// 1 version
function printAverage0fArray(arr){
    // ur code 
     let total = arr.reduce((acc, currVal)=> acc+currVal)
     
     return total/arr.length
   }
   
   // 2 version
   function printAverage0fArray(arr){
    // ur code  
    let result=arr[0]
    for (let i=1; i<arr.length; i++)
    {
      result = result + arr[i]
    }
   return result/arr.length
   }
   
   var arr = [1,2,3,4]
   
   console.log(printAverage0fArray(arr)) // 2.5`