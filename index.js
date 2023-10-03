//  1  Print All Numbers 1-225
for (let i = 1; i < 225; i++) {
    console.log(i);
}
console.log(">>>>>  1. Print All Numbers 1-225  <<<<<");
// 2 Print Odd Numbers
for (let i = 1; i < 225; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log(">>>>>  2  Print Odd Numbers  <<<<<");
//  3 Writing Values into Arrays

var arr = [1, 2, 3, 4];
let temp = arr[1];
arr[1] = arr[3];
arr[3] = temp;
console.log(arr);
console.log(">>>>>>  3  Writing Values into Arrays  <<<<<<<");
//  4  Countdown;
const count = (num) => {
    if (num < 0) {
        return [];
    }
    let newArr = [];
    for (let i = num; i >= 0; i--) {
        newArr.push(i);
    }
    return newArr;
};
const n = 25;
const sum = count(n);
console.log(sum);
console.log(">>>>> 4  Countdown  <<<<<");
//  5  Print and Return
const numArr = (arr) => {
    let first = arr[0];
    let second = arr[0];
    for (let ele of arr) {
        if (first > ele) {
            first = ele;
        }

        if (second < ele) {
            second = ele;
        }
    }
    console.log(first);
    return second;
};
console.log(numArr([4, 5]));
console.log(">>>>>  5 Print and Return <<<<<");

//  6 First plus length

const arrSum = (arr) => {
    let first = arr[0];
    let addedArr = first + first + arr.length;
    return addedArr;
};
console.log(arrSum([4, 5, 7, 9])); //12
console.log(arrSum(["Hi", 5, 7, 9])); //HiHi4
console.log(">>>>> 6 First plus length <<<<<");

// 7 Fit the first value
const fitArr = (arr) => {
    if (arr[0] > arr.length) {
        console.log("Too big");
    } else if (arr[0] < arr.length) {
        console.log("Too small");
    } else {
        console.log("Just right");
    }
};
console.log(fitArr([4, 3, 6, 7]));
