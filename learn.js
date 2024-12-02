//01 set  -- object
const arr = [1, 34, 56, 1, 78, 67, 90];
// console.log(new Set(arr)); //Set(6) { 1, 34, 56, 78, 67, 90 } unique allow
//add
const arr1 = new Set(arr);
arr1.add(2);
// console.log(arr1);
//has
// console.log(arr1.has(2))
// delete
// console.log(arr1.delete(2))
// add object or array it not unique
const obj = { a: 1, b: 2 };
const obj1 = { a: 1, b: 2 };
const array = [90, 78];
arr1.add(obj);
arr1.add(obj1);
arr1.add(array);
// console.log(arr1) //Set(9) {1,34,56,78,67,90,{ a: 1, b: 2 },{ a: 1, b: 2 },[ 90, 78 ]}
//arr1 convert array [] Array.from or ...
// console.log(Array.from(arr)) //[1,34, 56, 1, 78, 67, 90]
const arr3 = [2, 28, 2, 78, 9, 10, 78];
// console.log([... new Set(arr3)]); //[ 2, 28, 78, 9, 10 ]

//02 Map -- object key and value pair key should be unique value not
const map = new Map();
// Set suppose add new value ive use add() here set(key:value)
// console.log(map.set("name","Ragu")); //Map(1) { 'name' => 'Ragu' }
// console.log(map.set("lname","Rithvik")); //Map(2) { 'name' => 'Ragu', 'lname' => 'Rithvik' }
// console.log(map.set("lname","Raghu")); //con't add new key lname replace value { 'name' => 'Ragu', 'lname' => 'Raghu' }

//delete same set()
//get key values
// console.log(map.get("lname")); //Raghu

// for(value of map){
//   console.log(value, "values list"); //[ 'name', 'Ragu' ] [ 'lname', 'Raghu' ]
// }
// for([key, value] of map){
//   console.log(value, "values"); //ragu raghu
// }
// for(value of map.keys()){
//   console.log(value, "keys"); //name fname
// }
// map.forEach(value => {
//   console.log(value); //ragu raghu for provide []
// });
//2d array of map
const kvArray = [
  ["a", 1],
  ["b", 1],
];
// console.log(new Map(kvArray)); //Map(2) { 'a' => 1, 'b' => 1 }
// console.log((new Map(kvArray)).size); 2
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
//03.CLASS
//class name always start with captilize
class User {
  static userof = 0; // total count
  constructor(name, age) {
    this.name = name;
    this.age = age;
    User.userof++; // static name call
  }
  login() {
    console.log(this.name, "age", User.userof);
  }
}
// const userOne = new User("ragu", 28);
// const userTwo = new User("rithvik", 28);
// userOne.login();

//inheritence
//drived class
class paidUser extends User {
  constructor(name, age) {
    super(name, age);
    // this.store = store;
  } //Must call super constructor in derived class before accessing 'this' or returning from derived constructor at new paidUser
  meassge() {
    // console.log(`${store} storage`);
    console.log(`100GB storage`);
  }
}
// const paidOne = new paidUser("muppudari", 28, 120);
// paidOne.login(); //muppudari age 3
// paidOne.meassge(); //muppudari age 3
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
//linkedList
// const l1 = {data : 100}
// const l2 = {data : 100}
// l1.next = l2
// console.log(l1, "l1");

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
// const n1 = new Node(200)
// console.log(n1); //{ data: 200, next: null }
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //Method
  //Insert first Node
  insertFirst(data) {
    this.head = new Node(data, this.head); //head
  }
  //Insert Last Node
  insertLastNode(data) {
    let node = new Node(data); //Node { data: 300, next: null }
    let current;
    //suppose head is empty add first
    if (!this.head) {
      this.head = node;
    }
    //
    else {
      current = this.head; //Node { data: 200, next: Node { data: 100, next: null } } --> old
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
    //console.log(current, "current"); //Node { data: 100, next: Node { data: 300, next: null } }
  }
  //Insert at index
  insertAtIndex(data, index) {
    //data= 600 index is 7
    //6 > 0 && 6 > 3 //first if return
    if (index > 0 && index > this.size) {
      return;
    }
    if (index == 0) {
      this.head = new Node(data, this.head); //head
    }
    const node = new Node(data);
    let current, previous;
    //set current first
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; //Node after index
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }
  //Get at index
  //Remove at index
  //clear the indx
  //print the list data
  printListData() {
    let current = this.head; //head: Node { data: 300, next: Node { data: 200, next: null }
    while (current) {
      // console.log(current.data, "data");
      current = current.next;
    }
  }
}
const l1 = new LinkedList(); // get LinkedList --> Node
l1.insertFirst(100); // LintedList { head: Node { data: 100, next: null }, size: 0 }
l1.insertFirst(200); //LinkedList {head: Node { data: 200, next: Node { data: 100, next: null } }, size: 0}
// l1.printListData(); // 300 data // 200 data
l1.insertLastNode(300); // 300 data // 200 data
//l1.insertAtIndex(400, 6); // not working size 3 but our index 6 so flase
l1.insertAtIndex(400, 1);
// console.log(JSON.stringify(l1), "l1head");
// const log = {
//   head: {
//     data: 200,
//     next: {
//       data: 400,
//       next: {
//         data: 100,
//         next: {
//           data: 300,
//           next: null,
//         },
//       },
//     },
//   },
//   size: 2,
// };
