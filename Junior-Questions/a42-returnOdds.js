// returnOdds

// Return Odds from an Array

// 1 version
function returnOdds(arr){
    // ur code  
     return arr.filter(el=> el%2 !== 0)
   }
   
   // 2 version
   function returnOdds(arr){
    // ur code  
    let result=[]
    for (let i=0; i<arr.length; i++)
    {
      if (arr[i]%2===1) result.push(arr[i]) 
    }
    return result
    //you may use filter
   }
   
   
   console.log(returnOdds([1,2,3,4])) // [1,3]