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
  //i-length-1
  // -1,0,1,2
  // -1,0,1 3-[2-1] 3-0 3
  // -1 4-[1-1]4-4 0
  // -1,5
  // -1 6-[1-1]6-0-6
  // 0 7
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
// console.log(plusOne([1, 2, 3]))
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var generate = function (numRows) {
  const arr = [];
  for (i = 0; i < numRows; i++) {
    arr.push(Array(i + 1).fill(1)); // Initialize with 1s
  }
  for (i = 2; i < arr.length; i++) {
    for (j = 1; j < arr[i].length - 1; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i - 1][j - 1];
    }
  }
  return arr;
};
// console.log(generate(5));
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var maxScore = function (s) {
  let totalOnes = 0;
  let leftZeros = 0;

  let maxScore = 0;
  // Count total ones in the string
  for (let char of s) {
    if (char === "1") totalOnes++;
  }
  // Traverse the string to calculate the score
  for (let i = 0; i < s.length - 1; i++) {
    // Stop before the last character
    if (s[i] === "0") {
      leftZeros++;
    } else {
      totalOnes--;
    }
    // Calculate score for the current split
    const score = leftZeros + totalOnes;
    maxScore = Math.max(maxScore, score);
  }

  return maxScore;
};

// Example usage
// const s = "011101";
const s = "00";
// console.log("Maximum score:", maxScore(s));
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var countPrefixSuffixPairs = function (words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[j].startsWith(words[i]) && words[j].endsWith(words[i])) {
        count++;
      }
    }
  }
};
countPrefixSuffixPairs(["a", "aba", "ababa", "aa"]);
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var maxProfit = function (prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
};
// maxProfit([7, 6, 4, 3, 1]);
maxProfit([7, 1, 5, 3, 6, 4]);
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var wordSubsets = function (words1, words2) {
  const result = [];
  let count = 0;
  for (let i = 0; i < words1.length; i++) {
    count = 0;
    for (let j = 0; j < words2.length; j++) {
      if (words1[i].includes(words2[j])) {
        count++;
      }
      if (count == 2) {
        result.push(words1[i]);
      }
    }
  }

  return result;
};
// console.log(
//   wordSubsets(
//     ["google", "leetcode"],
//     // ["amazon", "apple", "facebook", "google", "leetcode"],
//     ["lo", "eo"]
//   )
// );
// function hasSameRepeatedLetters(str, str1) {
//   if (str.length > 1) {
//     return str.split("").every((char) => char === str[0]);
//   } else {
//     return false;
//   }
// }
// var wordSubsets = function (words1, words2) {
//   const result = [];
//   let count = 0;
//   for (let i = 0; i < words1.length; i++) {
//     count = 0;
//     for (let j = 0; j < words2.length; j++) {
//       let word = words2[j].split("").every((char) => words1[i].includes(char));
//       let word1 = hasSameRepeatedLetters(words2[j], words1[i])
//       if (word1) {
//         if (words1[i].includes(words2[j])) {
//           word = true;
//         } else {
//           word = false;
//         }
//       }

//       // console.log(typeof words2[j], "rev");

//       if (word) {
//         count++;
//       }
//       if (count == 2) {
//         result.push(words1[i]);
//       }
//     }
//   }

//   return result;
// };
// console.log(
//   wordSubsets(["apple", "facebook", "google", "leetcode"], ["e", "oo"])
// );
// console.log(wordSubsets(["leetcode"], ["e", "oo"]));
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var maximumLengthSubstring = function (s) {
  let sub = s[0];
  let count = 0;
  let max = 0;
  for (i = 1; i < s.length; i++) {
    max = Math.max(max, max + 1);
    if (sub == s[i]) {
      count++;
    }
    if (count == 2) {
      sub = s[i];
      count = 0;
      max = 1;
    }
  }
  return max;
};
// console.log(maximumLengthSubstring("abcabcbb"));
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
//House Robber
var rob = function (nums) {
  const arr = Array(nums.length + 1).fill(0)
  arr[1] = nums[0]
  for (i = 2; i <= nums.length; i++) {
    arr[i] = Math.max(arr[i - 1], arr[i - 2] + nums[i - 1])
  }
  return arr[nums.length]
};
// [0, 1, 0, 0 ,0] arr 2- 2 arr[0]--> 0
// [1, 2, 3, 1] nums 2-1 nums[1]--> 2 0+2 (arr[1], 2) -> (1, 2)--> 2
// rob([1,2,3,1])
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var longestPalindrome = function (s) {
  if (!s || s.length < 1) return "";
  let start = 0;
  let end = 0;
  function expandAroundCenter(left, right) {
    while (left >= 0 && s[left] === s[right] && right < s.length) {
      left-- //left back
      right++ //right nearby
    }
    return right - left - 1 // 1 - -(1) -1 -- 1+1-1 --2-1 -> 1
  }
  for (let i = 0; i < s.length; i++) {
    //odd (0, 0)
    const len1 = expandAroundCenter(i, i)
    //Even (0, 1)
    const len2 = expandAroundCenter(i, i + 1)
    const len = Math.max(len1, len2)
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2)
      end = i + Math.floor(len / 2)
    }
  }
  return s.substring(start, end + 1);
};
// longestPalindrome("babad")
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var productExceptSelf = function (nums) {
  const n = nums.length;
  const result = Array(n).fill(1);
  // Calculate prefix product and store in result
  let prefix = 1;
  //result-->prefix
  for (let i = 0; i < n; i++) {
    result[i] = prefix;  // Store the prefix product so far.
    prefix *= nums[i];   // Update the prefix product.
  }
  //0(i) 1(prefix) 1(result[i])--> Updated prefix 1×1=1
  //result = [1, 1, 2, 6]
  //Calculate suffix product on the fly and multiply with result
  let suffix = 1;
  //result-->result*suffix
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;  // Multiply with the suffix product so far.
    suffix *= nums[i];    // Update the suffix product.
  }
  //3(i) 1(suffix) 6*1(result[i])--> Updated suffix 1×4=4
  //[24, 12, 8, 6]
  return result;
};
//suppose 2 prev 1 * 2 --> 2 234 -> 8 
//result = [1, 1, 1, 1]
//--prefix--
//pre =1
//result = r[0] = pre(1) -> [1]
//pre = pre* nums[i] 1 * 1
//result = r[1] = pre(1) -> [1, 1]
//pre = 1* nums[i] 1 * 2
//result = r[2] = pre(2) -> [1, 1, 2]
//pre = 2* nums[i] 2 * 3 -> 6
//result = r[3] = pre(6) -> [1, 1, 2, 6]
//--suffix--
//suf = 1
//result = r[3] = r[3] * sufix -> 4 * 1 -> [1, 1, 2, 4]
//sufix = sufix* nums[3] 1 * 4 -> 4
//result = r[2] = r[2] * sufix -> 2 * 4 -> [1, 1, 8, 4]
//sufix = sufix * nums[2] 4 * 3 -> 12
//result = r[1] = r[1] * sufix -> 1 * 12 -> [1, 12, 8, 4]
//sufix = sufix * nums[1] 12 * 2 -> 24
//result = r[0] = r[0] * 24 -> 1 * 24 -> [24, 12, 8, 4]
// console.log(productExceptSelf([1, 2, 3, 4])) //[24, 12, 8, 6]
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;
  // Create a DP table initialized to 0
  const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
  console.log(dp, "dp")
  // Build the DP table
  // [
  //     [0, 0, 0, 0],
  //     [0, 0, 0, 0],
  //     [0, 0, 0, 0],
  //     [0, 0, 0, 0],
  //     [0, 0, 0, 0],
  //     [0, 0, 0, 0]
  // ]
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1; // Characters match
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // Take the max of excluding one char
      }
    }
  }
  // The bottom-right corner contains the length of the LCS
  return dp[m][n];
};
// [
//     [0, 0, 0, 0],i 0
//     [0, 0, 0, 0],a 1
//     [0, 0, 0, 0],b 2
//     [0, 0, 0, 0],c 3
//     [0, 0, 0, 0],d 4
//     [0, 0, 0, 0],e 5
//      0  a1, c2, e3 //j
// ]
//text1[1-1]a [1-1]a i =1 j= 1
// text1[0] == text2[0] -> // match dp[1][1] =dp[1 - 1][1 - 1](0) + 1
// [
//     [0, 0, 0, 0],i 0
//     [0, 1, 0, 0],a 1
//     [0, 0, 0, 0],b 2
//     [0, 0, 0, 0],c 3
//     [0, 0, 0, 0],d 4
//     [0, 0, 0, 0],e 5
//      0  a1, c2, e3 //j
// ]
//text1[1-1]a [1-2]c i =1 j= 2
// text1[0] == text2[0] -> // not match check crose
//1 0 i=1, j=2 previous, top then max
//[i][j-1] a[1][1](previous) 1
//[i-1][j] [0][2](top) 0
//check max 1, 0 1 max
// dp[1][2] = Math.max(dp[i - 1][j], dp[i][j - 1])
// [
//     [0, 0, 0, 0],i 0
//     [0, 1, 1, 0],a 1
//     [0, 0, 0, 0],b 2
//     [0, 0, 0, 0],c 3
//     [0, 0, 0, 0],d 4
//     [0, 0, 0, 0],e 5
//      0  a1, c2, e3 //j
// ]
//final result
// [
//   [ 0, 0, 0, 0 ],
//   [ 0, 1, 1, 1 ],
//   [ 0, 1, 1, 1 ],
//   [ 0, 1, 2, 2 ],
//   [ 0, 1, 2, 2 ],
//   [ 0, 1, 2, 3 ]
// ]
// longestCommonSubsequence("abcde", "ace")
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var canJump = function (nums) {
  let r = 0
  for (i = 0; i < nums.length; i++) {
    if (i > r) {
      return false
    }
    r = Math.max(r, i + nums[i])
  }
  return true
};
//num[0] 3 fist go one step get value 2 here check is 2 step to reach final step next two steps 1, 0 but last index 4 so that return false
//r=0 i>r 0>0 Math.max(0, 0+3)
//r=3 1>3(2+1) 3
//r=3 2>3(1+2) 3
//r=3 3>3(0+3) 3
//r=3 4>3--false
//canJump([3,2,1,0,4])
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
//68. Text Justification
function justifyText(words, maxWidth) {
  let line = [] //array
  let result = [] //array
  let lineLength = 0
  for (let word of words) {
    if (word.length + line.length + lineLength > maxWidth) {
      //spaces
      let space = maxWidth - lineLength
      for (let i = 0; i < space; i++) {
        //next indexlogic
        //[1, 2, 3] last store value 2 now 2 nextvalue 3
        //how to find 
        //2 index 1
        //arr.length 2-1 ->1
        //arr[arr.length - 1 % 1] --> 3
        // some logic here apply
        // console.log([i % (line.length - 1 || 1)], "op");
        //line[0] = "this" + ""//most come 0 and 1
        line[i % (line.length - 1 || 1)] += " "
      }
      result.push(line.join(''));
      lineLength = 0
      line = []
    }
    line.push(word) //push current word
    lineLength += word.length // add current word length
  }
  // console.log(result, "result"); //[ 'This    is    an', 'example  of text' ]
  //we need push remaining last word
  // "justification." --14 add two space
  //here repeate function " ".repeat(2) 2(means 2 time means already "" + ""->" " " ")
  //16-14(-(0)) 2
  //next condition
  //shall be --> arr length 2 and linelength 8
  //16-7-(2-1) -> 8 shall be 8 space we have add 7+(1 already one space here afater shall) 8+8 -> 16
  result.push(line.join(' ') + " ".repeat(maxWidth - lineLength - (line.length - 1)))
  return result
}
// Example Usage:
// console.log(justifyText(["This", "is", "an", "example", "of", "text", "justification."], 16)); //[ 'This    is    an', 'example  of text', 'justification.  ' ]
// console.log(justifyText(["What", "must", "be", "acknowledgment", "shall", "be"], 16)); //[ 'What   must   be', 'acknowledgment  ', 'shall be        ' ]
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// 189. Rotate Array
var rotate = function (nums, k) {
  // k = k % nums.length // 3%6 -> 3 find array center
  // reverse(nums, 0, nums.length - 1)
  // reverse(nums, 0, k - 1)
  // reverse(nums, k, nums.length - 1)
  // //first reverse->0, 6
  // //2nd reverse->left reverse to center 0, (2)3-1
  // //3rd reverse->right reverse 3, 6
  // function reverse(nums, start, end) {
  //   while (start < end) {
  //     //6, 0 -> 0, 6
  //     [nums[start], nums[end]] = [nums[end], nums[start]]
  //     start++
  //     end--
  //   }
  // }
  // return nums

  //2nd method
  let n = nums.length;
  k = k % n;
  let temp = nums.slice(n - k) //[ 5, 6, 7 ] 7-3 -> 4 
  for (let i = n - 1; i >= k; i--) {
    nums[i] = nums[i - k];
  }
  // [1, 2, 3, 1, 2, 3, 4]
  // [ 1, 2, 3, 4] -> move right
  // next fix 1, 2, 3 
  for (let i = 0; i < k; i++) {
    nums[i] = temp[i]; //fix first three[ 5, 6, 7 ]
  }
  // return nums
};
// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
//796. Rotate String
var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;
  return (s + s).includes(goal); //"abcde abcde"-->"cdeab"
};
// rotateString("abcde", "cdeab")
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// 28.Find the Index of the First Occurrence in a String
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle)
};
// strStr("sadbutsad", "sad")
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// 1047. Remove All Adjacent Duplicates In String
var removeDuplicates = function (s) {
  const str = []
  for (let char of s) {
    if (str.length == 0) {
      str.push(char)
    }
    else if (str[str.length - 1] == char) {
      str.splice(-1);
    }
    else str.push(char)
  }
  return str.join('')
};
// removeDuplicates("abbaca")
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
//169. Majority Element
var majorityElement = function (nums) {
  const map = new Map()
  const n = nums.length / 2 // logic check element [] 1.5 > 2 return 3  
  for (i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    if (map.get(nums[i]) > n) {
      return nums[i];
    }
  }
};
majorityElement([3, 2, 3])
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// 73. Set Matrix Zeroes
var setZeroes = function (matrix) {
  const getZeros = []
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0) {
        getZeros.push([i, j])
      }
    }
  }
  for (let [row, col] of getZeros) {
    //row-->i
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[row][i] = 0
    }
    //down-col->j
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0
    }
  }
};
// setZeroes([[1,1,1],[1,0,1],[1,1,1]])
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
//43. Multiply Strings
var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";
  const m = num1.length // 2
  const n = num2.length // 2
  const result = Array(m + n).fill(0)
  for (i = m - 1; i >= 0; i--) {
    for (j = n - 1; j >= 0; j--) {
      //first multify last two number 56 56 6 *6
      //why "0" -> convert string number "6" -"0" => 6
      const mul = (num1[i] - "0") * (num2[j] - "0")
      //Add privous value i+j+1 
      const sum = mul + result[i + j + 1] //get value 3
      //get lat value 36-> 6 36 %10 -> 6
      result[i + j + 1] = sum % 10
      //carry store position 36 / 10 -> 3.6 get floor value 3 
      result[i + j] += Math.floor(sum / 10)
    }
  }
  return result.join("").replace(/^0+/, "") //remove first zero and + means 00
};
// Test cases
// console.log(multiply("56", "56")); // "3136"
// console.log(multiply("123", "456")); // "56088"
// console.log(multiply("0", "12345")); // "0"
// console.log(multiply("01234", "0001234")); // -> "000" "0" here add+
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// 27. Remove Element
var removeElement = function (nums, val) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};
removeElement([3, 2, 2, 3], 3)
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// 8. String to Integer (atoi)
var myAtoi = function (s) {
  s = s.trim()
  let result = 0
  let asign = 1
  let i = 0
  // Integer range limits
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);
  //Asign - check asign - + 
  // Check for sign
  if (i < s.length && (s[i] === "-" || s[i] === "+")) {
    asign = s[i] === "-" ? -1 : 1;
    i++;
  }
  while (i < s.length && s[i] >= "0" && s[i] <= "9") {
    //convert number
    result = result * 10 + (s[i].charAt(0) - "0".charAt(0))
    //0*10 + 4
    //4*10+2->42
    // Handle overflow cases
    if (result * asign > INT_MAX) return INT_MAX;
    if (result * asign < INT_MIN) return INT_MIN;
    i++
  }
  return result * asign
};
// myAtoi(" -042")
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// 42. Trapping Rain Water
function trap(height) {
  let left = 0; let leftMax = 0
  let right = height.length - 1; let rightMax = 0;
  let trapWaters = 0
  //right always big
  while (left < right) {
    //here right value always big
    if (height[left] < height[right]) {
      //if current value bigger to leftmax
      //change current value to letftmax
      if (height[left] >= leftMax) leftMax = height[left]
      //no leftmax - to current values
      else trapWaters += leftMax - height[left]
      //move on next pointer
      left++
    }
    //same logic right
    else {
      //if current value bigger to rightMax
      //change current value to rightMax
      if (height[right] >= rightMax) rightMax = height[right]
      //no rightMax - to current values
      else trapWaters += rightMax - height[right]
      //move on next pointer
      right--
    }
  }
  return trapWaters
}
// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// 22. Generate Parentheses
var generateParenthesis = function (n) {
  const result = []
  function brackTrack(brackets, open, close) {
    if (brackets.length == n * 2) {
      result.push(brackets);
      return
    }
    //open
    if (open < n) {
      brackTrack(brackets + "(", open + 1, close)
    }
    //close
    if (open > close) {
      brackTrack(brackets + ")", open, close + 1)
    }
  }
  brackTrack("", 0, 0);
  return result
};
// generateParenthesis(3) //["((()))","(()())","(())()","()(())","()()()"]
var spiralOrder = function (matrix) {
  const result = []
  //left -> rigth
  //top -> bottom
  //left <- right
  //bottom -> top
  let left = 0
  let rigth = matrix[0].length - 1 //first row [0][2]
  let top = 0
  let bottom = matrix.length - 1 //bottom last [2][0]
  // [
  // [1,2,3],
  // [4,5,6],
  // [7,8,9]
  // ]
  //left[][0->2] left - to right
  while (left <= rigth && top <= bottom) {
    for (let i = left; i <= rigth; i++) {
      result.push(matrix[top][i])
    }
    top++ //we 6 is 
    //top -> bottom 6 - 9 but 6
    //[1][2]
    //[2][2]
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][rigth])
    }
    rigth-- // 8
    //right to left
    //9, 8, 7 but 9 already push [2][1] [2][0] 
    //check bottom here spiral check so bottom check
    if (top <= bottom) {
      for (let i = rigth; i >= left; i--) {
        result.push(matrix[bottom][i])
      }
      bottom--
    }
    if (left <= rigth) {
      //bottom to top
      //7 4 1  7, 1 already pushed 4
      // [
      // [1,2,3],
      // [4,5,6],
      // [7,8,9]
      // ]
      //[0][0]1 [1][0]4 [2][0]7
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left])
      }
      left++
    }
  }
  // [1, 2, 3, 6, 9, 8, 7, 4]
  console.log(result, "result")
};
spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])