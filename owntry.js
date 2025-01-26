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
console.log(productExceptSelf([1, 2, 3, 4]))