//Leetcode try given to chatgpt

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
var isValid = function (s) {
  const obj = { "(": ")", "[": "]", "{": "}" };
  const stack = [];
  
  for (let value of s) {
    if (obj.hasOwnProperty(value)) {
      stack.push(value);
    } else {
      console.log(obj[stack.at(-1)], value, "stack");
      
      if (stack.length == 0 || obj[stack.at(-1)] !== value) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length == 0;
};
isValid("(([]{}");
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
const longestValidParentheses = (s) => {
  const stack = [-1]; // Initialize stack with -1 to handle edge cases
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i); // Push index of '(' onto the stack
    } else {
      stack.pop(); // Pop the top of the stack for ')'

      if (stack.length === 0) {
        // If the stack is empty, push the current index
        stack.push(i);
      } else {
        // Calculate the length of the valid substring
        maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
      }
    }
  }

  return maxLength;
};
// console.log(longestValidParentheses(")(())())")); // 6
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode(0); // Create a dummy node
  let current = dummy;
  // Merge two lists in sorted order
  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  // Attach the remaining nodes (if any)
  current.next = list1 || list2;
  return dummy.next;
};
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
