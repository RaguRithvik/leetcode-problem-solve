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
      // console.log(obj[stack.at(-1)], value, "stack");
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
var lengthOfLastWord = function (s) {
  let count = 0;
  let inWord = false;
  // Traverse the string from the end to find the last word
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      count++;
      inWord = true;
    } else if (inWord) {
      // If we encounter a space after counting a word, we're done
      break;
    }
  }
  return count;
};
// console.log(lengthOfLastWord("   fly me   to   the moon  "));
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var maxSubArray = function (nums) {
  // let max = 0;
  // let startIndex = 0;
  // let endIndex = 0;
  // for (i = 0; i < nums.length; i++) {
  //   let currentSum = 0;
  //   for (j = i; j < nums.length; j++) {
  //     if (nums[j]) {
  //       currentSum = currentSum + nums[j];
  //       if (currentSum > max) {
  //         max = currentSum;
  //         startIndex = i;
  //         endIndex = j;
  //       }
  //     }
  //   }
  // }
  // console.log(max, nums.slice(startIndex, endIndex + 1));
  let sum = 0;
  let maxSum = 0;
  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
    // console.log(sum, "sum", nums[i]);
    if (sum > maxSum) maxSum = sum;
    if (sum < 0) sum = 0;
  }
  // console.log(maxSum);
};
// maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 1]);
maxSubArray([2, 3, -2, 4]);
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let index = 1; index <= amount; index++) {
    for (const coin of coins) {
      if (index - coin >= 0) {
        dp[index] = Math.min(dp[index], dp[index - coin] + 1);
      }
    }
  }
  // console.log(dp[amount], "dp", dp);
};
// console.log(coinChange([1, 2, 5], 3));
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var climbStairs = function (n) {
  if (n === 1) return 1;
  let prev = 1;
  let current = 2;
  for (i = 3; i <= n; i++) {
    const temp = current;
    current = prev + current;
    prev = temp;
  }
  return current;
};
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var getFinalState = function (nums, k, multiplier) {
  let count = 0;
  while (k > count) {
    let small = Math.min(...nums);
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === small) {
        nums[i] = nums[i] * multiplier;
        break;
      }
    }
    count++;
    return nums;
  }
};
getFinalState([2, 1, 3, 5, 6], 5, 2);
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var removeDuplicates = function (nums) {
  const obj = {};
  if (nums.length == 0) return [];
  let uniqueIndex = 0; // Points to the position to insert the next unique element.

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[uniqueIndex]) {
      uniqueIndex++;
      nums[uniqueIndex] = nums[i]; // Move the unique element forward.
    }
  }
  // console.log(uniqueIndex, "uniqueIndex", nums);
  
};
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] < 9) {
          digits[i]++;
          return digits;
      }
      digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};
console.log(plusOne([1, 2, 3]))