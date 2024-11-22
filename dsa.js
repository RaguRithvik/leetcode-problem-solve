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
  // console.log(arr, "leftArr");
  if (arr.length < 2) return arr;
  const midIndex = Math.floor(arr.length / 2);
  const leftArr = margesort(arr.slice(0, midIndex));
  const rightArr = margesort(arr.slice(midIndex));
  return margeFun(leftArr, rightArr);
};
const margeFun = (leftArr, rightArr) => {
  // const result = [];
  // let leftIndex = 0;
  // let rightIndex = 0;
  // console.log(leftArr, rightArr);
  // while (leftArr.length > leftIndex && rightArr.length > rightIndex) {
  //   if (leftArr[leftIndex] < rightArr[rightIndex]) {
  //     result.push(leftArr[leftIndex]);
  //     leftIndex++;
  //   } else {
  //     result.push(rightArr[rightIndex]);
  //     rightIndex++;
  //   }
  // }
  // while (leftArr.length > leftIndex) {
  //   result.push(leftArr[leftIndex]);
  //   leftIndex++;
  // }
  // while (rightArr.length > rightIndex) {
  //   result.push(rightArr[rightIndex]);
  //   rightIndex++;
  // }
  const result = [];
  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] <= rightArr[0]) {
      result.push(leftArr.shift());
    } else {
      result.push(rightArr.shift());
    }
    return [...result, ...leftArr, ...rightArr];
  }
};
//logic
//[-2, 5, 100, -7, 8, 1, 45, 99]
//Left
// left<right
// [-2, 5, 100, -7]
// [[-2, 5] [100, -7]]
// [-2] < [100] -2 true take left value
// [5] < [-7] -7
// [-2, -7]
//Right
// [8, 1, 45, 99]
// [[8,1] [45, 99]]
// [45] > [8] 8 suppose true take right value
// [99] > [1 ] 1
// [8, 1]
// [1]
// console.log(margesort([-2, 5, 100, -7, 8, 1, 45, 99]), "final");
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
console.log(Quicksort([-2, 5, 100, -7, 8, 1, 45, 99]));
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
//[-7, -2, 1, 5, 8, 54, 99, 100]
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
