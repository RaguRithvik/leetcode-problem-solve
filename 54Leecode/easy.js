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
// console.log(towSum([2, 7, 11, 15], 9));
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// 9. Palindrome Number
//Logics
var isPalindrome = function (x) {
    let origional = x
    let num = Math.abs(x) //
    let palNum = 0
    while (num > 0) {
        //get last digist
        const digist = Math.floor(num % 10) // 121 % 10 -> 1
        palNum = palNum * 10 + digist
        // current value store -> 0 * 10 + 1 ->
        // 1* 10 + 2 -> 12
        // 12*10+1 -> 121  
        num = Math.floor(num / 10)
    }
    if (num > 0) {
        palNum = -palNum
    }
    if (palNum == origional) return true
    else return false
};
// isPalindrome(121)//true
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// 07. Longest Common Prefix
const longestCommonPrefix = (arr) => {
    let prefix = "";
    let flag = true;
    for (i = 0; i < arr[0].length; i++) {
        let firstPrex = arr[0][i]; // get first two letter fl
        for (j = 1; j < arr.length; j++) { //check 2nd final
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
// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// 21. Merge Two Sorted Lists
var mergeTwoLists = function (list1, list2) {
    const dummy = new ListNode(0);
    let node = dummy;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            node.next = list1
            list1 = list1.next
        }
        else {
            node.next = list2
            list2 = list2.next
        }
        node = node.next
    }
    //remaining node check final node 4 < 4 else l2
    // i need l1 sort 
    node.next = list1 || list2
    return dummy.next
};
mergeTwoLists([1,2,4],  [1,3,4])
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// 345. Reverse Vowels of a String
var reverseVowels = function(s) {
    const vovls = ['a', 'e', 'i', 'o', 'u']
    const result = []
    const finalResult = []
    let count = 0 
    for(let str of s){
        const lower = str.toLowerCase()
        if(vovls.includes(lower)){
            result.unshift(str)
        }
    }
    for(let str of s){
        const lower = str.toLowerCase()
        if(vovls.includes(lower)){
            finalResult.push(result[count])
            count++
        }
        else{
            finalResult.push(str)
        }
    }
    return finalResult.join("")
};