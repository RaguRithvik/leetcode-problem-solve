const board = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
//   function myAtoi(s) {
//     // Step 1: Trim leading whitespace
//     s = s.trim();

//     if (s.length === 0) {
//         return 0;
//     }

//     // Step 2: Determine the sign
//     let sign = 1;
//     let index = 0;

//     if (s[0] === '-') {
//         sign = -1;
//         index++;
//     } else if (s[0] === '+') {
//         index++;
//     }

//     // Step 3: Convert characters to integer
//     let num = 0;
//     const MAX_INT = 2 ** 31 - 1;
//     const MIN_INT = -(2 ** 31);

//     while (index < s.length && s[index] >= '0' && s[index] <= '9') {
//         num = num * 10 + (s.charCodeAt(index) - '0'.charCodeAt(0));

//         // Check for overflow and underflow
//         if (sign * num > MAX_INT) {
//             return MAX_INT;
//         } else if (sign * num < MIN_INT) {
//             return MIN_INT;
//         }

//         index++;
//     }

//     // Step 4: Apply sign and return
//     return sign * num;
//   }
function isValidSudoku(board) {
  // Initialize empty arrays for rows, columns, and boxes
  const rows = [];
  const cols = [];
  const boxes = [];
  for (let i = 0; i < 9; i++) {
    rows.push([]); // Create a new sub-array for each row
    cols.push([]); // Create a new sub-array for each column
    boxes.push([]); // Create a new sub-array for each 3x3 box

    // Initialize each sub-array with 9 false values
    for (let j = 0; j < 9; j++) {
      rows[i].push(false);
      cols[i].push(false);
      boxes[i].push(false);
    }
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const currentValue = board[i][j];
      if (currentValue !== ".") {
        const num = currentValue - "1"; // Convert char to number 0-8
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3); // Calculate box index
        // console.log("num", rows[i][num], cols[j][num], boxes[boxIndex][num]);
        // console.log(`rows[${i}][${num}]`, `cols[${j}][${num}]`, `[${boxIndex}][${num}]`);
        if (rows[i][num] || cols[j][num] || boxes[boxIndex][num]) {
          return false;
        }

        rows[i][num] = true;
        cols[j][num] = true;
        boxes[boxIndex][num] = true;
      }
    }
  }

  return true;
}
// console.log(isValidSudoku(board));
