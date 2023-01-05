// sumAllNums

// Create a function which returns sum of all numbers from a given array. [1,{}, null,2] => 3

// `sumAllNums([1,{}, null,2]) // 3`
// `sumAllNums(["1",NaN, null,2]) // 2`

function sumAllNums(arr) {
  // your code here
  let count = 0
  for(let i=0;i< arr.length; i++){
    if(Number.isInteger(arr[i])){
      count = count+arr[i]
    }
  }
  return count
}
