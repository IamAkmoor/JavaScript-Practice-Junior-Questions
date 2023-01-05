// filterChar

// Create a function to filter all chars which are not equal to a given char from an arrays. ['a','b','A','c'], 'a' => ['b','c']

// NOTE: use reduce, filter, loop

// `filterChar(['a','b','A','c'], 'a') // ['b','c']`


function filterChar(arr, char) {
  // your code here
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i]==='string'){
    newArr.push(arr[i].toLowerCase())
    }
  }
  return newArr.filter(el => el !== char)
}

///seytech version
function filterChar(arr,char) {
  // your code here
let result = arr.filter(element=>{
    if (typeof element==='string' && typeof char === 'string'){
        return element.toLowerCase()!==char.toLowerCase()
    }
    else return element!==char
})
return result;
}

console.log(filterChar(['a', 'b', 'A', 'c'], 'a'))
console.log(filterChar([1,"1","c"],1))
