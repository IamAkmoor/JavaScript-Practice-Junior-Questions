// scaleArr

// Given array arr and number num, multiply each arr value by num, and return the changed arr.

// 1 version
function scaleArr(arr, num){
    // ur code  
   let result =  arr.map(el => el*num)
   return result  
   }
   
   // 2 version
   function scaleArr(arr,num){
    // ur code  
    let result=[];
    for (let i=0; i<arr.length; i++)
    {
      result.push(arr[i]*num) 
    }
    return result
   }
   
   console.log(scaleArr([2,3,4],5)) // [10,15,20]
   