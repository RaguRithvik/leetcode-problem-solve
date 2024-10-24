//------ 01-21-10-2024 ------
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
// console.log(flatArray);

//------ 02-22-10-2024 ------
const one = false || {} || null
const two = null || "" || false
const three = [] || 0 || true
//Explanation
//false null values are falsy value - {}
//All falsy value go take last one - false
//[] and true first value check first values is true so - [] 
// console.log(one, two, three)

//------ 03 - 02-22-2024 ------
const data = [2, 3, 6, 8, 2, 10, 20, 1];
let i = 0;
let isStatus = true;
const result = [];
while (i < data.length) {
  if (isStatus) {
    const push = [];
    for (j = 0; j < 3 && data[i + j]; j++) {
      push[j] = data[i + j];
    }
    result[result.length] = push;
    i = i + 3;
    isStatus = false;
  } 
  else {
    const push = [];
    for (j = 0; j < 2 && data[i + j]; j++) {
      push[j] = data[i + j];
    }
    result[result.length] = push;
    i = i + 2;
    isStatus = true;
  }
}
[ [ 2, 3, 6 ], [ 8, 2 ], [ 10, 20, 1 ] ]
// console.log(result, "result");

