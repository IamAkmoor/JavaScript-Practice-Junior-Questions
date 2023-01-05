// Please use loop
// `allIndexOf(["Apple", "Orange", "Apple", "Mango"], "Apple") // [0,2]
// allIndexOf([1,1,2,3,1,3], 1) // [0,1,4]`

function allIndexOf(arr, item) {
  // your code here
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      newArr.push(i)
    }
  }
  return newArr
}

console.log(allIndexOf(["Apple", "Orange", "Apple", "Mango"], "Apple"))
console.log(allIndexOf([1, 1, 2, 3, 1, 3], 1))