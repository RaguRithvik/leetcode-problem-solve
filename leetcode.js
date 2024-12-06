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
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
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
//leetcodes-style
// function addTwo(listOne, listTwo) {
//   const node = new ListNode(0);
//   let carry = 0;
//   let dummy = node;
//   while (listOne || listTwo || carry) {
//     let l1 = listOne?.val || 0;
//     let l2 = listTwo?.val || 0;
//     let sum = l1 + l2 + carry;
//     carry = Math.floor(sum / 10);
//     const current = new ListNode(sum % 10);
//     dummy.next = current;
//     dummy = current;
//     listOne = listOne?.next || null;
//     listTwo = listTwo?.next || null;
//   }
//   return node.next;
// }
// var addTwoNumbers = function (l1, l2) {
//   return addTwo(l1, l2);
// };
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
