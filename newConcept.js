const allEngLetter = Array.from({ length: 26 }, (_, i) =>String.fromCharCode(97 + i));
// console.log(allEngLetter, "allEngLetter")
// [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',  'y', 'z' ]

const array = [];
for (let i = 0; i < 2; i++) {
    array.push(Array(i + 1).fill(null));
}
console.log(array, "array") // [ [ null ], [ null, null ] ] 