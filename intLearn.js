//------ 01-21-10-2024 ------
// const nestedArray = [2, 3, 4, [5, [6, 7, 8, [9, 10, 11], 12], 13], 14, 15];
// function flattenArray(arr) {
//   let result = []; // Create an empty result array
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       // If it's an array, recursively flatten
//       const flatSubArray = flattenArray(arr[i]);
//       for (let j = 0; j < flatSubArray.length; j++) {
//         result[result.length] = flatSubArray[j]; // Manually add to result
//       }
//     } else {
//       // If it's not an array, add the element manually
//       result[result.length] = arr[i];
//     }
//   }
//   return result; // Return the flattened array
// }
// //Explanation
// [0, 1, 2, 3,[4], 5, 6]
// const flatArray = flattenArray(nestedArray);
// console.log(flatArray);

//------ 02-22-10-2024 ------
// const one = false || {} || null
// const two = null || "" || false
// const three = [] || 0 || true
//Explanation
//false null values are falsy value - {}
//All falsy value go take last one - false
//[] and true first value check first values is true so - []
// console.log(one, two, three)

//------ 03 - 02-22-2024 ------
// const data = [2, 3, 6, 8, 2, 10, 20, 1];
// let i = 0;
// let isStatus = true;
// const result = [];
// while (i < data.length) {
//   if (isStatus) {
//     const push = [];
//     for (j = 0; j < 3 && data[i + j]; j++) {
//       push[j] = data[i + j];
//     }
//     result[result.length] = push;
//     i = i + 3;
//     isStatus = false;
//   }
//   else {
//     const push = [];
//     for (j = 0; j < 2 && data[i + j]; j++) {
//       push[j] = data[i + j];
//     }
//     result[result.length] = push;
//     i = i + 2;
//     isStatus = true;
//   }
// }
// [ [ 2, 3, 6 ], [ 8, 2 ], [ 10, 20, 1 ] ]
// console.log(result, "result");

// 26-10-204
// 04 - Remove Duplicate
// const arr = [0, 1, 2, 3, 4, 5, 6, 4]
// const arr = [{name:"ragu"}, {name:"rithvik"}, {name:"ragu"}]
// const result = [];
// let index = 0
// const dup = {}
// for(i = 0; i < arr.length; i++){
//      if(!dup[arr[i].name]){
//          dup[arr[i].name] = arr[i].name
//      }
//      else{
//          result[index] = i
//          index++
//      }
// }
// console.log(result)

// 05. Reverse
// const arr = [0, 1, 2, 3, 4, 5, 6, 4];
// const result = [];
// for (i = arr.length - 1; i >= 0; i--) {
//   result.push(arr[i]);
// }
// console.log(result, "result");

//28-10-2024
// 06. interview task
// 01. console.log("2"+"2"-0);
//02. Obj push data
// const a = {};
// const b = { name: "ragu1" };
// const c = { name: "ragu2" };
// a[b] = { name: "ragu3" };
// a[c] = { name: "ragu4" };

// Explanation
// A initially empty object then a key value is object then values name value{ "[object Object]": { "name": "ragu4" } }

// console.log(a[b]);
// console.log(a);

// ---11-12-2024----
// 07. arr concept
// const arr = [1, 2, 3][1, 2, 3]
// console.log(arr) // undefined because a[0] = 1 but you provide a[1, 2, 3]

//08. obj concept
// const obj1 = { 1: "A1" };
// const obj = { 1: 1, 2: 1, 1: 2, 1: 3, [1]: "5", [obj1]: "A2", obj1: "A3" };
// console.log(obj);
//{ '1': '5', '2': 1, '[object Object]': 'A2', obj1: 'A3' }
//obj take last key value 1: 3 then [1] also 1 why array value convert string 
//then check primtive value 1 smae [obj1] but side here non primitive value
//[] to "" then obj1 is object finally '[object Object]'

//09 code explain
// {
//     function fn(){
//         console.log("hello")
//     }
// }
// fn()
//Explaination
// {} -- block-scoped
// fn() -- hoisting
// Calling the Function: When you call fn() outside the block, 
//JavaScript recognizes it due to hoisting and executes the function,

// 09.1
// "use strict";
// {
//     function fn() {
//         console.log("hello");
//     }
// }
// fn(); // Error: fn is not defined

// explain
// Non-strict mode: The function is accessible outside the block due to hoisting.
// Strict mode: The function is restricted to the block scope.

// 10.
// "use strict"
// var x = 100
// var y = 200
// z =200 // use strict z is not defined
// console.log(x, y, z);

//11.
function fn(){
    return 100
}
var fn
console.log(fn)

