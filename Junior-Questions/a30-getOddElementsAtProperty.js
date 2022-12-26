// getOddElementsAtProperty

// Write a function called "getOddElementsAtProperty".

// Given an object and a key, "getOddElementsAtProperty" returns an array containing all the odd elements of the array located at the given key.

// Notes:
//     If the array is empty, it should return an empty array.
//     If it contains no odd elements, it should return an empty array.
//     If the property at the given key is not an array, it should return an empty array.
//     If there is no property at the key, it should return an empty array.

var obj = {
    key: [1, 2, 3, 4, 5]
  };
  
  // 1 version
  function getOddElementsAtProperty(obj, key) {
    // your code here
    let newArr = [];
    newArr = obj.key
    return newArr.filter(el=> el%2)
  }
  
  // 2 version
  function getOddElementsAtProperty(obj, key) {
    // your code here
    if(obj.key && Array.isArray(obj.key)){
      let arr = obj.key
      return arr.filter(el=> el%2)
    }
    return []
  }
  
  // git 3 version
  
  function getOddElementsAtProperty(obj, key) {
    // your code here
    let result=[];
    if (!obj[key]) return result;
    if (!Array.isArray(obj[key])) return result;
    for (let i=0; i<obj[key].length;i++){
       if (obj[key][i]%2===1) result.push(obj[key][i])
    }
    return result
  }
  
  var output = getOddElementsAtProperty(obj, 'key');
  console.log(output); // --> [1, 3, 5]