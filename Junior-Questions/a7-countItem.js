// Create a function which finds how many item inside a given array.

// Note: You can use loop

// `countItem([1,2,4,5,8,5,1,5], 5) // 3`

function countItem(arr, num) {
  // your code here
    let count = 0
  for(let i=0; i< arr.length; i++){
    if (arr[i]===num) {
      count=count+1
    }
  }
  return count
}

console.log(countItem([1,2,4,5,8,5,1,5], 5))