//Fill
const allEngLetter = Array.from({ length: 26 }, (_, i) =>String.fromCharCode(97 + i));
// console.log(allEngLetter, "allEngLetter")
// [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',  'y', 'z' ]

//Arra.fill
const array = [];
for (let i = 0; i < 2; i++) {
    array.push(Array(i + 1).fill(null));
}
console.log(array, "array") // [ [ null ], [ null, null ] ] 

//startsWith, endsWith
let st1= "ragu"
let str2 = "ra"
st1.startsWith(str2) //ragu--ra --> true
st1.endsWith(str2)//ragu end gu -- ra -->false