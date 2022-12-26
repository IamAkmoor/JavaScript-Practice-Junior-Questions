// getSmallestElementAtProperty

// Write a function called "getSmallestElementAtProperty".

// Given an object and a key, "getSmallestElementAtProperty" returns the smallest element in the array located at the given key.

// Notes:
//     If the array is empty, it should return undefined.
//     If the property at the given key is not an array, it should return undefined.
//     If there is no property at the key, it should return undefined.

var obj = {
    key: [2, 1, 5]
  };
  
  // 1 version
  function getSmallestElementAtProperty(obj, key) {
    if( typeof(obj[key]) != "undefined" && Array.isArray(obj[key]) && obj[key].length !== 0 ){
      let arr = obj[key]
      return Math.min(...arr)
    }
    else return undefined
  }
  
  // 2 version
  // function getSmallestElementAtProperty(obj, key) {
  //   if (!obj[key]) return undefined;
  //   if (!Array.isArray(obj[key])) return undefined;
  //   if (obj[key].length===0) return undefined;
  //   let result=obj[key][0]
  //   for (let i=1; i<obj[key].length; i++){
  //      if (obj[key][i]<result) result=obj[key][i]
  //   }
  //   return result
  // }
  
  // 3 version
  // function getSmallestElementAtProperty(obj, key) {
  //    if ((typeof obj[key] != "undefined") && Array.isArray(obj[key]) && obj[key].length > 0) {
  //      var smallest = obj[key][0]
  //      for (var elem in obj[key]){
  //        if (obj[key][elem] < smallest)
  //        {
  //          smallest = obj[key][elem]
  //        }
  //      }
  //      return smallest
  //    }
  //    else
  //    {
  //      return undefined
  //    }
  // }
  
  // var output = getSmallestElementAtProperty(obj, 'key');
  // console.log(output); // --> 1
  
  