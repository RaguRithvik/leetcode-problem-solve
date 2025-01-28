// 01 - Two Sum
const towSum = (nums, target) => {
  const data = [];
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        data.push(i, j);
      }
    }
  }
  return data;
};
//--Explaination--
// if(nums[0]+nums[1]) = 2 +7 = 9 target then push data i and j
// console.log(towSum([2, 7, 11, 15], 9));
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// 02 - find index first occurence in string
const subStrCheck = (mainstr, subStr) => {
  const m = mainstr.length;
  const n = subStr.length;
  for (i = 0; i < m; i++) {
    let flag = true;
    for (j = 0; j < n; j++) {
      if (mainstr[i + j] !== subStr[j]) {
        flag = false;
        break;
      }
    }
    if (flag) return i;
  }
  return -1;
};
//--Explaination--
//mainstr[0 + 0] !== subStr[0]
//mainstr[0] !== subStr[0] l !== c flag false then break i++ i =1 but j =0  bcz break 2nd for loop
//mainstr[4] == subStr[0]
// if(falg) return i -- i =4 then codes words match i = 8
// console.log(subStrCheck("leetcodes", "codes"));
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// 03 valid Anagram 0 of n
const isAnagram = (s, t) => {
  let map = new Map();
  if (s.length !== t.length) return false;
  for (i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  for (i = 0; i < t.length; i++) {
    if (!map.has(t[i])) return false;
    map.set(t[i], map.get(t[i]) - 1);
    if (map.get(t[i]) === 0) map.delete(t[i]);
  }
  // return map.size === 0;

  //--Explaination--
  // first for loop---
  // map.set(s[i], (map.get(s[i]) || 0) + 1);
  // map(key, value)
  //map(a, 1) same value occur +1 suppose a occurs again a already values
  //suppose a values 2 now add 2+1 = 3 map = map({a, 3}, {n, 1})
  // --
  // 2nd for loop---
  // map.has(t[i]) check any unwanted key means map(s[i]) z map(t[i]) y return false
  // map.set(t[i], map.get(t[i]) - 1);
  // same values occurs minus values to map
  // map(a, 3) -- map(a, 2)
  // if (map.get(t[i]) === 0) map.delete(t[i]);
  // map(a, 0) if any values 0 delete key suppose a =0 delete to map
  // return map.size === 0; suppose all value 0 return true

  //--second
  for (i = 0; i < s.length; i++) {
    if (map[s[i]]) map[s[i]]++;
    else map[s[i]] = 1;
  }
  for (i = 0; i < t.length; i++) {
    if (!map[t[i]]) return false;
    if (map[t[i]]) map[t[i]]--;
  }
  // return true;

  //--third--
  let usedIndices = new Set();
  for (let i = 0; i < s.length; i++) {
    let found = false;
    for (let j = 0; j < t.length; j++) {
      if (s[i] === t[j] && !usedIndices.has(j)) {
        usedIndices.add(j);
        found = true;
        break;
      }
    }
    if (!found) return false;
  }
  return true;
  // { 1 } a
  // i[0]--a == j[0]--n flase j=1
  // i[0]--a == j[1]--a true {1} break j =0, i=1
  // { 1, 0 } a n
  // i[1]--n ==j[0]--n true {1, 0} break j =0, i=2
  // { 1, 0, 3 } a n g
  // i[2]--a == j[0]--n flase j=1
  // i[2]--a == j[1]--a true but we simenteniously check new Set() {1, 0} already 1 is there is false j=3
  // i[2]--a == j[2]--g false j=3
  // i[2]--a == j[3]--a true {1, 0, 3} break j =0, i=3
  // { 1, 0, 3, 2 }
  // { 1, 0, 3, 2, 4 }
  // { 1, 0, 3, 2, 4, 5 }
  // { 1, 0, 3, 2, 4, 5, 6 }
};
// console.log(isAnagram("anagram", "nagaram"));
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// 04. length  OfLongest Substring
const lengthOfLongestSubstring = (s) => {
  // const currentStr = [];
  // let maxLength = 0;
  // for (let index = 0; index < s.length; index++) {
  //   const element = s[index];
  //   const existingIndex = currentStr.indexOf(element);
  //   if (existingIndex !== -1) {
  //     currentStr.splice(0, index);
  //   }
  //   else{
  //     currentStr.push(element);
  //   }
  //   maxLength = Math.max(maxLength, currentStr.length);
  // }
  // return maxLength
  let start = 0;
  let maxLength = 0;
  const seen = new Map();
  for (let i = 0; i < s.length; i++) {
    if (seen.has(s[i])) {
      start = Math.max(seen.get(s[i]) + 1, start);
    }
    seen.set(s[i], i);
    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
  //pending explaination
};
// console.log(lengthOfLongestSubstring("baabgh")); // Output should be 3
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// 05. Reverse number
//reverse number 32bit singed (2147483648) values also accepted
var reverseNumber = function (x) {
  let n = Math.abs(x); // nagative value to positive
  let reversed = 0;
  let maxInt32 = Math.pow(2, 31) - 1; // square values logic 2power of 31 2147483648 -1 2147483647
  let minInt32 = -Math.pow(2, 31); // nagative value 2power of 31
  while (n > 0) {
    const digist = Math.floor(n % 10);
    reversed = reversed * 10 + digist; // 0
    if (reversed > maxInt32) {
      return 0;
    }
    n = Math.floor(n / 10);
  }
  if (x < 0 || reversed < minInt32 || reversed > maxInt32) {
    return 0;
  }
  return reversed;
  // logic
  //567
  //digist = 7 --Math.floor(n % 10)
  //reversed = reversed * 10 + digist
  //reversed = 0 * 10+ 7 = 7
  //remove 7 -- Math.floor(n / 10)
  // 56
  //digist = 6
  //reversed = reversed * 10 + digist
  //reversed = 6 * 10 + 7 = 67
  //remove 6
  // 56
  //digist = 6
  //reversed = reversed * 10 + digist
  //reversed = 6 * 10 + 7 = 67
  //remove 6
};
// console.log(reverseNumber(567));
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// 06. zigzagConvert
var zigzagConvert = function (s, numRows) {
  if (numRows == 1) return s;
  let curRow = 0;
  let rows = {};
  let going = false; // check 0 or 2 i
  for (i = 0; numRows > i; i++) {
    rows[i] = "";
  }
  for (i = 0; i < s.length; i++) {
    rows[curRow] += s[i];
    if (curRow == 0 || curRow - numRows == -1) going = !going;
    going ? (curRow += 1) : (curRow -= 1);
  }
  result = "";
  for (i = 0; numRows > i; i++) {
    result += rows[i];
  }
  return result;
};

//PAYPALISHIRING
//[0:{}, 1:{}, 2:{}] rows
//curRow =0 s[0] = P, going false-- [0:{P}, 1:{}, 2:{}]
// if (curRow == 0) -- curRow + 1 =1 going true
//curRow =0 s[1] = A, going true-- [0:{P}, 1:{A}, 2:{}] curRow+1 = 2
//curRow =0 s[2] = Y, going true-- [0:{P}, 1:{A}, 2:{y}]
// if(curRow - numRows == -1) going false curRow -1 = 1
//curRow =0 s[1] = P, going false-- [0:{P}, 1:{AP}, 2:{y}] curRow-1 = 0
//curRow =0 s[0] = A, going false-- [0:{PA}, 1:{AP}, 2:{y}]
// if (curRow == 0) -- curRow + 1 =1 going true
//curRow =0 s[1] = L, going true-- [0:{PA}, 1:{APL}, 2:{Y}]curRow+1 = 2
//curRow =0 s[2] = I, going true-- [0:{PA}, 1:{APL}, 2:{YI}]
// if(curRow - numRows == -1) going false curRow -1 = 1

// console.log(zigzagConvert("PAYPALISHIRING", 3)); // Output: "PAHNAPLSIIGYIR"
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// 07. Longest Common Prefix
const longestCommonPrefix = (arr) => {
  let prefix = "";
  let flag = true;
  for (i = 0; i < arr[0].length; i++) {
    let firstPrex = arr[0][i];
    for (j = 1; j < arr.length; j++) {
      if (arr[j][i] !== firstPrex && arr[j][i]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      prefix += firstPrex;
    }
  }
  return prefix;
};
// firstPrex = arr[0][i] = f -> ["flower"]arr[0] ->farr[0][i]
// first first array to to next to two array
//for (j = 1; j < arr.length; j++) // j =1 because [1][0] flow [2][0] flight
// con01
// i =0, j =1, arr[0][i] == f
// arr[j][i]-arr[1][0] f == f arr[0][i]-arr[0][0] j++ j= 2
// arr[j][i]-arr[2][0] f == f arr[0][i]-arr[0][0]  j++ j =3 j < arr.length(3<3) flase comes out to 2nd loop i++ i =1
// con02
// i =1, j =1, arr[0][i] == l
// arr[j][i]-arr[1][1] l == l arr[0][i]-arr[0][1]
// arr[j][i]-arr[2][1] l == l arr[0][i]-arr[0][1]
// con03
// i =1, j =1, arr[0][i] == 0
// arr[j][i]-arr[1][2] o == o arr[0][i]-arr[0][2]
// arr[j][i]-arr[2][2] i !== o arr[0][i]-arr[0][2] flag false and break 2nd for loop
// flag condition check true so fl return

// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
//leetcodes-style
function addTwo(listOne, listTwo) {
  // const node = new ListNode(0);
  let carry = 0;
  let dummy = node;
  while (listOne || listTwo || carry) {
    let l1 = listOne?.val || 0;
    let l2 = listTwo?.val || 0;
    let sum = l1 + l2 + carry;
    carry = Math.floor(sum / 10);
    // const current = new ListNode(sum % 10);
    dummy.next = current;
    dummy = current;
    listOne = listOne?.next || null;
    listTwo = listTwo?.next || null;
  }
  return node.next;
}
// var addTwoNumbers = function (l1, l2) {
//   return addTwo(l1, l2);
// };
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var isValid = function (s) {
  const obj = { "(": ")", "[": "]", "{": "}" };
  const stack = [];
  for (let value of s) {
    if (obj.hasOwnProperty(value)) {
      stack.push(value);
    } else {
      if (stack.length == 0 || obj[stack.at(-1)] !== value) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length == 0;
};
//([{ -> only open prathese push to stack
//next ) chek stack length == 0
//get last statck value ( -->obj[key] value ) new value ) --> )) same value check !==
isValid("(([]{}");
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode(0);
  let node = dummy;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      node.next = list1;
      list1 = list1.next;
    } else {
      node.next = list2;
      list2 = list2.next;
    }
    node = node.next;
  }
  //remaining node check final node 4 < 4 else l2
  // i need l1 sort
  node.next = list1 || list2;
  return dummy.next;
};
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var lengthOfLastWord = function (s) {
  const str = s.trim().split(" ");
  const st = str[str.length - 1];
  let count = 0;
  for (let i = 0; i < st.length; i++) {
    count++;
  }
  return count;
};
lengthOfLastWord("   fly me   to   the moon  ");
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
var searchInsert = function (nums, target) {
  let result = null;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      result = i;
    }
  }
  if (result == null) {
    for (i = 0; i < nums.length; i++) {
      if (nums[i] > target) {
        result = i;
        break;
      } else if (nums[i] < target) {
        result = nums.length;
      }
    }
  }
  return result;
};
searchInsert([1, 3, 5, 6], 7);
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
//766. Toeplitz Matrix
//25)03-01-2025
var isToeplitzMatrix = function (matrix) {
  for (i = 0; i < matrix.length - 1; i++) {
    for (j = 0; j < matrix[i].length - 1; j++) {
      if (matrix[i][j] !== matrix[i + 1][j + 1]) {
        return false;
      }
    }
  }
  return true;
};
// isToeplitzMatrix([
//   [1, 2, 3, 4],
//   [5, 1, 2, 3],
//   [9, 5, 1, 2],
// ]);
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
//704. Binary Search
//26)03-01-2025
var search = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == target) return i;
  }
  return -1;
};
// search([-1,0,3,5,9,12], 9)
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
//741. Arranging Coins
//27)03-01-2025
var arrangeCoins = function (n) {
  let rows = 0;
  while (n >= rows + 1) {
    rows++;
    n -= rows;
  }
  return rows;
};
// arrangeCoins(6)
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// 1422. Maximum Score After Splitting a String
//27)06-01-2025
var margeFun = function (left, right, leftCount = 0, rightcount = 0) {
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
  for (i = 1; i < s.length; i++) {
    const score = margeFun(arr.slice(0, i), arr.slice(i));
    maxResult = Math.max(maxResult, score);
  }
  return maxResult;
};
// maxScore(011101)
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// 1945. Sum of Digits of String After Convert
//29)06-01-2025
var getLucky = function (s, k) {
  const caseLet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );
  let transform1 = "";
  for (let i = 0; i < s.length; i++) {
    transform1 += caseLet.indexOf(s[i]) + 1;
  }
  let result = 0;
  for (let i = 0; i < k; i++) {
    result = 0;
    for (let trasVal of transform1) {
      result += Number(trasVal);
    }
    transform1 = result.toString();
  }
  return result;
};
// getLucky("leetcode", 2)
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// 3042. Count Prefix and Suffix Pairs I
//29)09-01-2025
var countPrefixSuffixPairs = function (words) {
  let result = 0;
  for (i = 0; i < words.length - 1; i++) {
    for (j = i + 1; j < words.length; j++) {
      const pref = words[j].slice(0, words[i].length);
      const suf = words[j].slice(-words[i].length);
      if (words[i] === suf && words[i] === pref) {
        result++;
      }
    }
  }
  return result;
};
// countPrefixSuffixPairs(["a", "aba", "ababa", "aa"]);
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
//121. Best Time to Buy and Sell Stock
//31 10-01-2025
var maxProfit = function (prices) {
  let small = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < small) {
      small = prices[i];
    }
    profit = Math.max(profit, prices[i] - small);
  }
  return profit;
};
// maxProfit([7, 1, 5, 3, 6, 4]);
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// 2185. Counting Words With a Given Prefix
//32 10-01-2025
var prefixCount = function (words, pref) {
  let count = 0;
  for (i = 0; i < words.length; i++) {
    if (words[i].startsWith(pref)) {
      count++;
    }
  }
  return count;
};
// prefixCount(["pay","attention","practice","attend"], "at")
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// 1910. Remove All Occurrences of a Substring
//19-01-2025 - 33
var removeOccurrences = function (s, part) {
  const removeFu = (str) => {
    return str.includes(part) ? removeFu(str.replace(part, "")) : str;
  };
  return removeFu(s);
};
// console.log(removeOccurrences("daabcbaabcbc", "abc"));
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
//15.Three sum
//25-01-2025
var threeSum = function (nums) {
  const num = nums.sort((a, b) => a - b)
  //console.log(num) //[ -4, -1, -1, 0, 1, 2 ]
  const result = []
  //i = num[0] 
  //j = num[0+1]
  //k = num[num.length-1] -back to front
  for (i = 0; i < num.length - 2; i++) {
    //i >0  [0] num[0-1] -->num[-1]undefine so that check i check above 0  and current[i] previous[i-1] values same
    //Skip Duplicates:
    // if (0 > i && num[i] === num[i - 1]) continue
    if (i > 0 && num[i] === num[i - 1]) continue;
    let j = i + 1;
    let k = num.length - 1
    //k always big
    //-1i, 0j, 1k
    while (j < k) {
      const sum = num[i] + num[j] + num[k]
      if (sum === 0) {
        result.push([num[i], num[j], num[k]])
        //block duplicate
        //Skip duplicates for the second and third elements
        //nearby same j and  k increase and decrement apply logic
        while (num[j] == num[j + 1]) j++
        while (num[k] == num[k - 1]) k--
        j++;
        k--;
      }
      //j increment
      else if (sum < 0) { j++ }
      else { k-- }
    }
  }
  return result
};
//threeSum([-1,0,1,2,-1,-4])
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
//25-01-2024
//151. Reverse Words in a String
var reverseWords = function (s) {
  const arr = s.trim().split(" ")
  const result = []
  for (i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== "") result.push(arr[i])
  }
  return result.join(" ")
};
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
//25-01-2024
//238. Product of Array Except Self 
//17ms i need to imporve my code
var productExceptSelf = function (nums) {
  const prefix = [nums[0]];
  const suffix = [nums[nums.length - 1]];
  const result = [];
  for (let i = 1; i < nums.length; i++) {
    prefix.push(nums[i] * prefix[i - 1]);
  }
  for (let i = nums.length - 1; i > 0; i--) {
    suffix.push(suffix[nums.length - 1 - i] * nums[i - 1]);
  }
  suffix.reverse();
  for (let i = 0; i < nums.length; i++) {
    result.push((prefix[i - 1] ?? 1) * (suffix[i + 1] ?? 1));
  }
  return result
};
//--Prefix--
// [1,2,3,4]-->[ 1, 2, 6, 24]
// num[0] -->num[0] --> 1 
// num[1] * pre[1-1]1 --> 1*2 --> 2
// num[2]3 * pre[2-1]2 -> 3*2 --> 6
// num[3]4 * pre[3-1]6 -> 4*6 --> 24
//--suffix--
// [1,2,3,4]-->[4, 12, 24, 24] reverse() pref * sufix
// num[4] = suffix[4-1-3] -->4 * nums[3-1] nums[2]--> 6 4*6 24

// console.log(productExceptSelf([1,2,3,4]))
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
//49. Group Anagrams
var groupAnagrams = function (strs) {
  const map = new Map();
  for (let str of strs) {
    const sortedStr = str.split('').sort().join('');
    if (!map.has(sortedStr)) {
      map.set(sortedStr, [])
    }
    map.get(sortedStr).push(str);//main is present so push
  }
  return Array.from(map.values())
};
// Map(3) {
//   'aet' => [ 'eat', 'tea', 'ate' ],
//   'ant' => [ 'tan', 'nat' ],       
//   'abt' => [ 'bat' ]
// }
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));