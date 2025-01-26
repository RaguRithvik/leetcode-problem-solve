//Fill
const allEngLetter = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
// console.log(allEngLetter, "allEngLetter")
// [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',  'y', 'z' ]
// String.fromCharCode(97) 97 a -->65 -->A

// let text = "HELLO WORLD";
// let char = text.charAt(0); --> H 
// let char = text.charCodeAt(0); --> H of charCodeAt(H) --> 72
// text.at(2) // index(2) --> L is is 2nd index 
//Arra.fill
const array = [];
for (let i = 0; i < 2; i++) {
    array.push(Array(i + 1).fill(null));
}
console.log(array, "array") // [ [ null ], [ null, null ] ] 

//startsWith, endsWith
let st1 = "ragu"
let str2 = "ra"
st1.startsWith(str2) //ragu--ra --> true
st1.endsWith(str2)//ragu end gu -- ra -->false

//Array fill with new concept
console.log(Array(6).fill(null).map(() => Array(4).fill(0)));
//[[],[],[],[],[],[]]//First Array(6)
//[[0,0,0,0],[],[],[],[],[]] //inside map 4 fill(0)
// [
//     [ 0, 0, 0, 0 ],
//     [ 0, 0, 0, 0 ],
//     [ 0, 0, 0, 0 ],
//     [ 0, 0, 0, 0 ],
//     [ 0, 0, 0, 0 ],
//     [ 0, 0, 0, 0 ]
//   ]
