// isBiggerThan5

// Create a function which returns true if all elements of a given array are bigger then 5

// Note: Please use loop and higher order functions

// 1 version
function isBiggerThan5(arr) {
    let result
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 5) {
        return false
      } else {
        return result = true
      }
    }
    return result
  }
  
  // 2 version
  function isBiggerThan5(arr) {
    return arr.every(element => element > 5)
  }
  
  console.log(isBiggerThan5([7, 6, 15]))