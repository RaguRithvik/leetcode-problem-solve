//Own code no logic
class LinkedList {
  constructor(data, next = null) {
    this.data = data;
    this.next = null;
  }
}
//print
function printedResult(arr) {
  const result = [];
  while (arr) {
    result.push(arr.data);
    arr = arr.next;
  }
  return result;
}
//Nodelist
function addTwo(listOne, listTwo) {
  const node = new LinkedList(0);
  let currry = 0;
  let dummy = node;
  while (listOne || listTwo || currry) {
    let l1 = listOne.data || 0;
    let l2 = listTwo.data || 0;
    let sum = l1 + l2 + currry;
    currry = Math.floor(sum / 10); //-->10/10= 1 5/10 = Math.floor(0.5) 0
    const current = new LinkedList(sum % 10); //
    //1+4=5%10 --> 5
    //7+3=10%10 --> 0
    //7+4 =11%10-->1 //only added 11 right value 1
    dummy.next = current;
    dummy = current;
    listOne = listOne?.next || null; // next get data
    listTwo = listTwo?.next || null;
  }
  return node.next;
}
//getLinkedList
function getList(arr) {
  const node = new LinkedList(0);
  let dummy = node;
  for (let num of arr) {
    const current = new LinkedList(num); //get current value
    dummy.next = current; //push current value to dummy.next
    dummy = current; //again dummy = current
    //{data:0 next: null}-->dummy
    //{data:0 next: {data:1 next: null}}
    //which item to push next value so that dummy now current
  }
  return node.next;
  //LinkedList {data: 1,next: LinkedList { data: 2, next: LinkedList { data: 3, next: null } }} listOne
}
// const listOne = getList([1, 2, 3]);
// const listTwo = getList([4, 5, 6]);
// const result = addTwo(listOne, listTwo);
// console.log(printedResult(result));
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
function longestValid(s) {
  const obj = { "(": ")" };
  const stack = [];
  const result = [];
  for (let str of s) {
    if (obj.hasOwnProperty(str)) {
      stack.push(str);
    } else {
      if (stack.length > 0 && obj[stack.at(-1)] == str) {
        result.push(obj[stack.at(-1)], str);
        stack.pop();
      }
    }
  }
  return result.length;
}
// longestValid(")(())())");
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
function coinChange(coins, amount) {
  const data = [];
  if (!amount) {
    return 0;
  }
  if (coins.length == 1) {
    if (coins[0] < amount) {
      if (coins[0] + coins[0] == amount) {
        data.push(coins[0], coins[0]);
      } else {
        return -1;
      }
    } else if (coins[0] == amount) {
      data.push(coins[0]);
    } else {
      return -1;
    }
  }
  for (i = 0; i < coins.length; i++) {
    if (coins[i] + coins[i] + coins[i] == amount) {
      data.push(i, i, i);
    }
    for (j = i + 1; j < coins.length; j++) {
      if (coins[i] + coins[j] + coins[j] == amount) {
        data.push(i, j, j);
      }
      for (k = i + j + 1; k < coins.length; k++) {
        if (coins[i] + coins[j] + coins[k] == amount) {
          data.push(i, j, k);
        }
      }
    }
  }
  return data.length;
}
// coinChange([1, 2, 5], 11);
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var reverseVowels = function (s) {
  const vovls = ["a", "e", "i", "o", "u"];
  const result = [];
  const finalResult = [];
  let count = 0;
  for (let str of s) {
    const lower = str.toLowerCase();
    if (vovls.includes(lower)) {
      result.unshift(str);
    }
  }
  for (let str of s) {
    const lower = str.toLowerCase();
    if (vovls.includes(lower)) {
      finalResult.push(result[count]);
      count++;
    } else {
      finalResult.push(str);
    }
  }
  return finalResult.join("");
};
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var coinChange = function (coins, amount) {
  // let data = 0;
  // if (!amount) {
  //   return 0;
  // }
  // for (i = 0; i < coins.length; i++) {
  //   if (coins[i] == amount) {
  //     data = 1;
  //   }
  //   if (coins[i] + coins[i] == amount) {
  //     data = 2;
  //   } else if (coins[i] + coins[i] + coins[i] == amount) {
  //     data = 3;
  //   } else if (coins[i] < amount && coins.length == 1) {
  //     return -1;
  //   } else if (coins[i] > amount && coins.length == 1) {
  //     return -1;
  //   }
  //   for (j = i + 1; j < coins.length; j++) {
  //     if (coins[i] + coins[j] == amount) {
  //       data = 2;
  //     } else if (coins[i] + coins[j] + coins[j] == amount) {
  //       data = 3;
  //     }
  //     for (k = i + j + 1; k < coins.length; k++) {
  //       if (coins[i] + coins[j] + coins[k] == amount) {
  //         data = 3;
  //       }
  //     }
  //   }
  // }
  // return data;
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
var maxProduct = function (nums) {
  let sum = 0;
  for (i = 0; i < nums.length; i++) {
    for (j = 0; j < nums.length; j++) {
      if (i !== j) {
        let currentSum = nums[i] + nums[j];
        if (currentSum <= 0) {
          sum = 0;
        }
        if (currentSum > sum) {
          sum = currentSum;
        }
      }
    }
  }
  return sum;
};
// console.log(maxProduct([2, 3, -2, 4]));
var getFinalState = function (nums, k, multiplier) {
  let small = nums[0];
  let count = 0;
  while (k > count) {
    for (i = 0; i < nums.length; i++) {
      if (small > nums[i]) {
        nums[i] = multiplier * nums[i];
        break;
      }
    }
    count++;
  }
  // console.log(nums, "nums");
};
getFinalState([2, 1, 3, 5, 6], 5, 2);
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var removeDuplicates = function (nums) {
  const obj = {};
  if (nums.length == 0) return [];
  for (i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = nums[i];
    }
  }
  // console.log(Object.keys(obj), "obj");

  // return result
};
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var isSubsequence = function (s, t) {
  const dp = new Array(t.length).fill(0);
  for (i = 0; i < dp.length; i++) {
    dp[i] = t[i];
  }
  let count = 0;
  let index = 0;
  for (let sval of s) {
    if (t.includes(sval)) {
      count = count + 1;
      index = t.indexOf(sval);
    }
  }
  // console.log(index, "index", count);

  // return count == s.length
};
isSubsequence("acb", "ahbgdc");
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var plusOne = function (digits) {
  const arr = [];
  for (i = 0; i < digits.length; i++) {
    if (digits[digits.length - 1] == digits[i]) {
      if (digits.length == 1) {
        const result = String(digits[i] + 1).split("");
        for (i = 0; i < result.length; i++) {
          arr.push(Number(result[i]));
        }
      } else {
        arr.push(digits[i] + 1);
      }
    } else {
      arr.push(digits[i]);
    }
  }
  return arr;
};
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var generate = function (numRows) {
  const arr = [];
  for (i = 0; i < numRows; i++) {
    arr.push([1]);
  }
  for (i = 1; i < arr.length; i++) {
    for (j = 0; j < i; j++) {
      arr[i].push(1);
    }
  }
  for (i = 2; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      if (j !== 0 && j !== arr[i].length - 1) {
        arr[i][j] = arr[i - 1][j] + arr[i - 1][j - 1];
      }
    }
  }
  return arr;
};
generate(5);
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var arrangeCoins = function (n) {
  const array = [];
  let m = n; // Remaining coins

  // Step 1: Build the array structure
  for (let i = 0; i < n; i++) {
    array.push(Array(i + 1).fill(null));
  }

  // Step 2: Fill the coins row by row
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (m > 0) {
        array[i][j] = 1;
        m -= 1;
      } else {
        // console.log(array, "array"); // Debugging output
        return i; // Return the number of complete rows
      }
    }
  }

  // console.log(array, "array", array.length); // Debugging output
  return array.length; // Return total rows if all rows are filled
};
// console.log(arrangeCoins(6));
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var scoreFun = function (left, right, leftCount = 0, rightcount = 0) {
  let result = 0;
  for (let i = 0; i < left.length; i++) {
    if (left[i] == 0) {
      leftCount += 1;
    }
  }
  for (let i = 0; i < right.length; i++) {
    if (right[i] == 1) {
      rightcount += 1;
    }
  }
  return Math.max(result, leftCount + rightcount);
};
var maxScore = function (s) {
  const arr = s.split("");
  let maxResult = 0;
  // console.log(arr, "arr");
  for (i = 1; i < arr.length - 1; i++) {
    const score = scoreFun(arr.slice(0, i), arr.slice(i));
    maxResult = Math.max(maxResult, score);
  }
  return maxResult;
};
// Example usage
const s = "00";
// const s = "011101";
// console.log("Maximum score:", maxScore(s));
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var construct2DArray = function (original, m, n) {
  const array = [];
  for (let i = 1; i < m; i++) {
    array.push(Array(i + 1).fill(null));
    for (let j = 1; j < n; j++) {
      // array.push(Array(j + 1).fill(null));
    }
  }
  // for (let i = 0; i < array.length; i++) {
  //   for (let j = 0; j < original.length; j++) {
  //     array[i][i] = original[j];
  //   }
  // }
  // console.log(array, "array");
};
construct2DArray([1, 2, 3, 4], 2, 2);
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var maxProfit = function (prices) {
  let maxVal = 0;
  for (i = 0; i < prices.length - 1; i++) {
    for (j = i + 1; j < prices.length; j++) {
      if (prices[i] < prices[j]) {
        maxVal = Math.max(maxVal, prices[j] - prices[i]);
      }
    }
  }
  return maxVal;
};
// maxProfit([7,6,4,3,1])
maxProfit([7, 1, 5, 3, 6, 4]);
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var wordSubsets = function (words1, words2) {
  const result = [];
  let count = 0;
  for (let i = 0; i < words1.length; i++) {
    count = 0;
    for (let j = 0; j < words2.length; j++) {
      let wordSplit = words2[j].split("");
      let word = wordSplit.every((char) => words1[i].includes(char));
      let sameWord = wordSplit.length > 1 && wordSplit[0] === wordSplit[wordSplit.length - 1];
      if (sameWord) {
        if (words1[i].includes(words2[j])) {
          word = true;
        } else {
          word = false;
        }
      }
      if (word) {
        count++;
      }
      if (count == words2.length) {
        result.push(words1[i]);
      }
    }
  }
  return result;
};
// console.log(wordSubsets(["acaac","cccbb","aacbb","caacc","bcbbb"], ["c","bc","aa"]));
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var productExceptSelf = function (nums) {
  const prefix = [];//prefx[i-1] * nums[i]
  const suffix = [];//suffix[i+1] * nums[i]
  const result = [];//prefx[i-1] * suffix[i+1]
  for (let i = 0; i < nums.length; i++) {
    prefix.push(nums[i] * (prefix[i - 1]) ?? 1);
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    suffix[i] = (suffix[i + 1] ?? 1) * nums[i]
  }
  for (let i = 0; i < nums.length; i++) {
    result.push((prefix[i - 1] ?? 1) * (suffix[i + 1] ?? 1));
  }
  return result
};
// console.log(productExceptSelf([1, 2, 3, 4]))
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
function processArray(obj, index, array, result) {
  for (let i = 0; i < array.length; i++) {
    let str1 = "";
    if (i === index) {
      continue;
    }
    for (let str of array[i]) {
      if (!obj.has(str)) {
        str1 = "";
        break;
      } else {
        str1 += str;
      }
    }
    if (str1) {
      result[result.length - 1].push(str1);
    }
  }
}
var groupAnagrams = function (strs) {
  const result = []
  for (let i = 0; i < strs.length; i++) {
    let obj = new Map();
    for (let str of strs[i]) {
      obj.set(str, obj.get(str) + 1 || 1);
      if (result.flat().includes(strs[i])) continue;
      result.push(strs[i]);
      processArray(obj, i);
    }
  }
  return result.sort((a, b) => a.length - b.length);
}
//console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // not working in leetcode but code working
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var romanToInt = function (s) {
  let n = 0
  let ans = 0
  for (i = s.length - 1; i >= 0; i--) {
    switch (s[i]) {
      case 'I': n = 1; break;
      case 'V': n = 5; break;
      case 'X': n = 10; break;
      case 'L': n = 50; break;
      case 'C': n = 100; break;
      case 'D': n = 500; break;
      case 'M': n = 1000; break;
    }
    if (4 * n < ans) {
      ans -= n
    }
    else {
      ans += n
    }
  }

  return ans
};
// romanToInt("LVIII")
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    //random index 
    let pivotIndex = randomPartition(arr, low, high)
    //left swap
    //[1, 5, 4, 3] -> pivot 1
    //left [0][0] here why -1 -1 0 left 0 and right 0 no wap
    //low next pivot
    quickSort(arr, low, pivotIndex - 1);
    //right swap
    //here +1
    //1+1-> 2 (1, 3) [4, 3]
    //pivot, high
    quickSort(arr, pivotIndex + 1, high);
  }
  return arr
}
function randomPartition(arr, low, high) {
  //find random povit index
  //val Math.rondom * max - min +1
  //Math.floor(val +low)
  let randomIndex = Math.floor(Math.random() * (high - low + 1)) + low;
  //swap right -. povit
  [arr[randomIndex], arr[high]] = [arr[high], arr[randomIndex]]
  return partition(arr, low, high)
}
function partition(arr, low, high) {
  //arr last is pivoit
  let povit = arr[high] // choose last as a pivot
  let i = low - 1
  //i values - left -1 -> 0-1 -1
  //beause i++ to 0 index swap
  for (let j = low; j < high; j++) {
    //swap value small value of pivot left big value to right
    if (arr[j] < povit) {
      i++ //-> -1 +1 = 0
      //i -> j
      [arr[i], arr[j]] = [arr[j], arr[i]]//swap
    }
  }
  //pivot swap
  //last word to i
  //why i need constant pivot set
  //after swap
  //[3, 5, 4 ,1] --> 1< always small to all values 
  //here [1] -> [3]
  //[1, 5, 4, 3]--> final convert
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]] //why i+1 -1+1=0 some time pivot not big
  return i + 1
}
let arr = [9, 4, 7, 3, 1, 5, 8, 2, 6];
// console.log(quickSort(arr));
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var uniquePaths = function (m, n) {
  const dp = Array(m).fill(0).map(() => Array(n).fill(0))
  for (i = 0; i < n; i++) {
    dp[0][i] = 1
  }
  for (i = 0; i < m; i++) {
    dp[i][0] = 1
  }
  // console.log(dp, "dp");
  // (0) [1, 1, 1, 1, 1, 1, 1]
  // (1) [1, 0, 0, 0, 0, 0, 0]
  // (2) [1, 0, 0, 0, 0, 0, 0]  
  for (i = 1; i < dp.length; i++) {
    for (j = 1; j < dp[i].length; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
    }
  }
  // console.log(dp, "dp"); // left(i)(j-1) + top(i-1)(j)
  // return dp[m-1][n-1] dp[2][6] -> 28
};
// uniquePaths(3, 7)
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var uniquePathsWithObstacles = function (obstacleGrid) {
  const row = obstacleGrid.length
  const column = obstacleGrid[0].length
  if (obstacleGrid[0][0] == 1 || obstacleGrid[row - 1][column - 1] == 1) return 0
  const dp = Array(row).fill(0).map(() => Array(column).fill(0))
  dp[0][0] = 1
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      //1 value set 0
      if (obstacleGrid[i][j] == 1) {
        dp[i][j] = 0
        //[ [ 1, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]
      }
      else {
        if (i > 0) dp[i][j] += dp[i - 1][j]
        if (j > 0) dp[i][j] += dp[i][j - 1]
      }
    }
  }
  return dp[row - 1][column - 1]
};
uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]])
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------

// var trap = function (height) {
//   let sum = 0
//   let left = 0
//   let right = 0
//   for (i = 1; i < height.length - 1; i++) {
//     left = height[i]
//     right = height[i]
//     for (let j = 0; j <= i; j++) {
//       left = Math.max(left, height[j])
//     }
//     for (let k = i; k < height.length; k++) {
//       right = Math.max(right, height[k])
//     }
//     sum += Math.min(left, right) - height[i]
//   }
//   return sum
// };
// trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var minDistance = function (word1, word2) {
  const dp = Array(word1.length + 1).fill().map(() => Array(word2.length + 1).fill(0));
  for (i = 0; i < dp.length; i++) {
    dp[i][0] = i
  }
  for (i = 0; i < dp[0].length; i++) {
    dp[0][i] = i
  }
  for (i = 1; i <= word1.length; i++) {
    for (j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      }
      else {
        //top->delete [i-1][j]
        //inset->right [i][j-1]
        //replace crosee top
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
      }
    }
  }
  // console.log(dp, "dp")
  return dp[word1.length][word2.length]
};
minDistance("horse", "ros")
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// 300. Longest Increasing Subsequence
var lengthOfLIS = function (nums) {
  const dp = Array(nums.length + 1).fill(1);
  for (i = 1; i < nums.length; i++) {
    for (j = 0; j < i; j++) {
      //check i is bigger to j then j is start with zero
      //max of dp[i] and dp[j]+1
      if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
  return Math.max(...dp)
};
lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
//139. Word Break
var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict);
  const dp = Array(s.length + 1).fill(false)
  dp[0] = true
  for (i = 1; i < dp.length; i++) {
    for (j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.slice(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length]
};
//s = "leetcode", wordDict = ["leet","code"]
//s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
wordBreak("leetcode", ["leet", "code"]);
