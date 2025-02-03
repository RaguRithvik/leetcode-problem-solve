// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
//Fill and fromCharCode
//Array(length->3).fill(1) --> [1, 1, 1]
//Array.form({length: 14}, map value )
//Array(3).fill(null).map(() => Array(1).fill(0)) -->[[0],[0],[0]]
const allEngLetter = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
//why this method because
//Array(26).fill((_,i)=>String.fromCharCode(97+i)) [ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ]
//inside fill doest'nt loop this given above answer
// console.log(allEngLetter, "allEngLetter")
// [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',  'y', 'z' ]
// String.fromCharCode(97) 97 a -->65 -->A
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
//charAt
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
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
//startsWith, endsWith
let st1 = "ragu"
let str2 = "ra"
st1.startsWith(str2) //ragu--ra --> true
st1.endsWith(str2)//ragu end gu -- ra -->false
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
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
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
//Map()
const map = new Map()
console.log(map.set("a", ["1", "2"])) // Map(1) { 'a' => [ '1', '2' ] }
map.get("a").push("3") // Map(1) { 'a' => [ '1', '2', '3' ] } we can map to push
console.log(...map) //[ 'a', [ '1', '2', '3' ] ]
console.log(...map.values()) //[ '1', '2', '3' ]
// map.set("b").push("1") // code not working we cont push 
map.set("b")// Map(1) { 'b' => undefine }
// map.get("b").push(["1"])// we con't push because b is undefined
map.set("b", [])
map.get("b").push("1") //Map(2) { 'a' => [ '1', '2', '3' ], 'b' => [ '1' ] }
console.log(Array.from(map.values())) //[ '1', '2', '3' ] [ '1' ] get value 
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
let text = "Hello world!";
let result = text.repeat(2); //nof copies 2
//"Hello world!Hello world!"