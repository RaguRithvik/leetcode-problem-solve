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
// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"