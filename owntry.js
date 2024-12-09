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
longestValid(")(())())");
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
coinChange([1, 2, 5], 11);
