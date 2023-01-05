// Create a function which adds postfix between array items and convert to a string.

// `addPostfixMiddle(["Apple", "Orange", "Kiwi"], "and")` 
// `// "Apple and Orange and Kiwi"`

function addPostfixMiddle(arr, postfix) {
  // your code her
  const newPostfix = " "+ postfix+" "
  return arr.join(newPostfix )
}

// 2 version
function addPostfixMiddle(arr, postfix) {
  let result = arr.join(" " + postfix + " ");
  return result
}

console.log(addPostfixMiddle(["Apple", "Orange", "Kiwi"], "and"))
