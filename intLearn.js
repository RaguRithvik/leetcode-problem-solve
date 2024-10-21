const nestedArray = [2, 3, 4, [5, [6, 7, 8, [9, 10, 11], 12], 13], 14, 15];

function flattenArray(arr) {
  let result = []; // Create an empty result array
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // If it's an array, recursively flatten
      const flatSubArray = flattenArray(arr[i]);
      for (let j = 0; j < flatSubArray.length; j++) {
        result[result.length] = flatSubArray[j]; // Manually add to result
      }
    } else {
      // If it's not an array, add the element manually
      result[result.length] = arr[i];
    }
  }
  return result; // Return the flattened array
}
//Explanation
[0, 1, 2, 3,[4], 5, 6]
const flatArray = flattenArray(nestedArray);
console.log(flatArray);

