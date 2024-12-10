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
