// Create a function which adds a postfix to a given array items.

// Notes:

// Please use map or loop
// `addPostfix(["Apple", "Orange", "Apple", "Mango"], "+")` 
// `// ["Apple+", "Orange+", "Apple+", "Mango+"]`

function addPostfix(arr, str) {
  // your code here
  return arr.map(el=> el+ str)
}
