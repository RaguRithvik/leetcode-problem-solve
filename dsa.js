// 01.Binarysearch
const recursiveBinarysearch = (arr, target) => {
  return search(arr, target, 0, arr.length - 1);
};
const search = (arr, target, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) {
    return -1;
  }
  const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (middleIndex == target) {
    return middleIndex;
  }
  if (target) {
    return middleIndex;
  }
};
// console.log(recursiveBinarysearch([-2, 67, 8, 99, 19], 67));
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
//02 selectionsort
const selectionSort = (arr) => {
  for (i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }
  // return arr;
};
// console.log(selectionSort([-2, 5, 1000, -7]), "selectionsort");
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
//03 bubbleSort check right a[i] big swap
const bubbleSort = (a) => {
  for (i = 0; i < a.length; i++) {
    for (j = i + 1; j < a.length; j++) {
      if (a[i] > a[j]) {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  return a;
};
// console.log(bubbleSort([-2, 5, 1000, -7]), "bubbleSort");
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// 04. inselectionSort -check letf arr[j] > arr[i] check j big
const inselectionSort = (arr) => {
  for (i = 0; i < arr.length; i++) {
    const currentIndex = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentIndex) {
      arr[j + 1] = arr[j];
      j--;
      // console.log(arr, "arr");
    }
    arr[j + 1] = currentIndex;
  }
  return arr;
};
// console.log(inselectionSort([-2, 5, 100, -7]));
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// 05.Mergesort
const margesort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const midIndex = Math.floor(arr.length / 2);
  const leftArr = margesort(arr.slice(0, midIndex));
  const rightArr = margesort(arr.slice(midIndex));
  return margeFun(leftArr, rightArr);
};
const margeFun = (leftArr, rightArr) => {
  const result = [];
  while (leftArr?.length > 0 && rightArr?.length > 0) {
    if (leftArr[0] <= rightArr[0]) {
      result.push(leftArr.shift());
    } else {
      result.push(rightArr.shift());
    }
    return [...result, ...leftArr, ...rightArr];
  }
};
//logic
// Input: [-2, 5, 100, -7]
//              margesort([-2, 5, 100, -7])
//              /                       \
//     margesort([-2, 5])          margesort([100, -7])
//        /      \                   /         \
// margesort([-2]) margesort([5]) margesort([100]) margesort([-7])
//    |                 |             |                |
//   [-2]              [5]          [100]            [-7]
//      \              /                \              /
//     margeFun([-2], [5])          margeFun([100], [-7])
//             [-2, 5]                     [-7, 100]
//                   \                     /
//             margeFun([-2, 5], [-7, 100])
//                    [-7, -2, 5, 100]
// console.log(margesort([-2, 5, 100, -7, 8, 1, 45, 99]), "marge");
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
//06. Quicksort
function Quicksort(arr) {
  //if array reached length 1 return array
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0]; // get first value
  const left = []; //
  const right = []; //

  for (i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...Quicksort(left), pivot, ...Quicksort(right)];
}
// console.log(Quicksort([-2, 5, 100, -7, 8, 1, 45, 99]));
//Explanation
// pivot = first index [-2]
//left small value [-7][-2]
//right higher value [-2][5, 100, 8, 1, 45, 99]
//[-7] left value length reached return array
//[-7, -2]
//[5, 100, 8, 1, 45, 99]
//[1]-[5]-[100, 8, 45, 99]
//[-7, -2, 1, 5]
//[100, 8, 45, 99]
//[8, 45, 99]-[100]-no right
//[8][45, 99][100]
//[8]-[45]-[99]-[100]
//
// [ -7 ] [left]- -2 -[pivot]- [ 5, 100, 8, 1, 45, 99 ] [right]
// [ 1 ] [left]- 5 -[pivot]- [ 100, 8, 45, 99 ] [right]
// [ 8, 45, 99 ] [left]- 100 -[pivot]- [] [right]
// [] [left]- 8 -[pivot]- [ 45, 99 ] [right]
// [] [left]- 45 -[pivot]- [ 99 ] [right]
//[-7, -2, 1, 5, 8, 54, 99, 100]
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
      let pivotIndex = randomPartition(arr, low, high);
      quickSort(arr, low, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, high);
  }
  return arr;
}

function randomPartition(arr, low, high) {
  let randomIndex = Math.floor(Math.random() * (high - low + 1)) + low;
  [arr[randomIndex], arr[high]] = [arr[high], arr[randomIndex]]; // Swap pivot
  return partition(arr, low, high);
}

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
      }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

// Example Usage
let arr = [3, 6, 8, 10, 1, 2, 1];
console.log(quickSort(arr)); 
// Output: [1, 1, 2, 3, 6, 8, 10]
