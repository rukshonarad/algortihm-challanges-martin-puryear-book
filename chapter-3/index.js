//Array: Min to Front Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

const minToPos = (arr) => {
    let lowestNumIdx = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[lowestNumIdx] > arr[i]) {
            lowestNumIdx = i;
        }
    }
    return lowestNumIdx;
};

const minToFront = (arr) => {
    let minPos = minToPos(arr);
    for (let i = minPos; i > 0; i--) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
    }
    return arr;
};

console.log(minToFront([4, 2, 1, 3, 5]));

// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

// [1,2,3,4,5,6,7]   =>   [7,6,5,4,3,2,1]

const reverseArray = (array) => {
    let leftSide = 0;
    let rightSide = array.length - 1;

    let i = leftSide;

    while (i < rightSide) {
        let temp = array[i];
        array[i] = array[rightSide];

        array[rightSide] = temp;

        i++;
        rightSide--;
    }
    return array;
};

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]));

const reverseArray2 = (array) => {
    let left = 0;
    let right = array.length - 1;

    for (let i = left; i < right; i++) {
        let temp = array[left]; // temp = 1

        array[left] = array[right]; // array[left] = 7

        array[right] = temp; // array[right] = 1

        left++;
        right--;
    }
    return array;
};

console.log(reverseArray2([1, 2, 3, 4, 5, 6, 7]));
console.log(reverseArray2([1, 2, 3, 4, 5, 6, 7, 10]));
// Array: Filter Range Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]     min:3     max: 7            =>     [3, 4, 5, 6, 7]

function filterRangeInPlace(arr, min, max) {
    let currentIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= min && arr[i] <= max) {
            arr[currentIndex] = arr[i]; // 5 // at index 0 [5],  at index 1 [5, 2]
            currentIndex++;
        }
    }
    console.log(currentIndex);

    // Truncate the array to the new length (currentIndex)
    arr.length = currentIndex;
    return arr;
}

// Example usage:
const arr = [1, 5, 2, 8, 3, 7, 4];
const min = 2;
const max = 6;

filterRangeInPlace(arr, min, max);
console.log(arr); // Output: [5, 2, 3, 4]

// Array: Concat Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

const arrConcat = (arr1, arr2) => {
    const newArr = [];

    for (const ele of arr1) {
        newArr.push(ele);
    }

    for (const ele of arr2) {
        newArr.push(ele);
    }
    return newArr;
};

const input1 = ["a", "b"];
const input2 = [1, 2];

console.log(arrConcat(input1, input2));

// Skyline Heights Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say you are given an array with heights of consecutive buildings, starting closest to you and extending away. Array [-1,7,3] would represent three buildings: first is actually out of view below street level, behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). You are situated at street level. Return array containing heights of buildings you can see, in order. Given [-1, 10, 10, 1, 5, 12, 7, 15] return [1,7]. Given [0,4] return [4]. As always with challenges, do not use built-in array functions such as unshift().

// [-1, 1, 1, 7, 12, 3, 15]

function visibleBuildings(heights) {
    const visible = [];
    let max = 0;

    for (let i = 0; i < heights.length; i++) {
        const height = heights[i];

        if (height > max) {
            visible[visible.length] = height;

            // visible[0] = 1; // variable = [1];
            // visible[1] = 7; // variable = [1, 7];
            // visible[2] = 12; // variable = [1, 7, 12];
            // visible[3] = 15; // variable = [1, 7, 12, 15];

            max = height;
        }
    }

    return visible;
}

console.log(visibleBuildings([-1, 1, 1, 7, 8, 9, 10, 12, 7, 8, 9, 3, 15])); // Output: [1,  7,  8, 9,10, 12, 15]
console.log(visibleBuildings([0, 4])); // Output: [4]

// Array: Remove Negatives Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives’ order. As always, do not use built-in array functions. Second: don’t use nested loops.

// [2, 5, -1, 10, -3, -2, 7]

const removeNegatives = (arr) => {
    let currentIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[currentIndex] = arr[i];
            currentIndex++;
        }
    }
    arr.length = currentIndex;
    return arr;
};

console.log(removeNegatives([2, 5, -1, 10, -3, -2, 7])); // [ 2, 5, 10, 7 ]

// Array: Second-to-Last Return the second-to-last element of an array. Given [42,true,4,"Kate",7], return "Kate". If array is too short, return null.

const secondToLast = (arr) => {
    if (arr.length < 2) {
        return null;
    }

    return arr[arr.length - 2];
};

console.log(secondToLast([42, true, 4, "Kate", 7])); // "Kate"
console.log("___________");

// The Luhn formula is sometimes used to validate credit card numbers. Create the function isCreditCardValid(digitArr) that accepts an array of digits on the card (13-19 depending on the card), and returns a boolean whether the card digits satisfy the Luhn formula, as follows:

// 1)      Set aside the last digit; do not include it in these calculations (until step 5);
// 2)      Starting from the back, multiply the digits in odd positions (last, third-to-last, etc.) by 2;
// 3)      If any results are larger than 9, subtract 9 from them;
// 4)      Add all numbers (not just our odds) together;
// 5)      Now add the last digit back in – the sum should be a multiple of 10. For example, when given digit array
// [5,2,2,8,2], after step 1) it becomes
// [5,2,2,8], then after step 2) it is
// [5,4,2,16]. Post-3) we have [5,4,2,7], then following 4) it becomes 18. After step 5) our value is 20, so ultimately we return true. If the final digit were any non-multiple-of-10, we would instead return false.

// isValidCreditCardNumber;
const isValidCreditCardNumber = (nums) => {
    let sum = nums[nums.length - 1];
    let product;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (i % 2 !== 0) {
            product = nums[i] * 2;
            if (product > 9) product -= 9;
            sum += product;
        } else {
            sum += nums[i];
        }
    }
    return sum % 10 === 0;
};
const isCreditCardValid = (digitArr) => {
    let lastDigit = digitArr[digitArr.length - 1];
    let sum = 0;
};

console.log(isValidCreditCardNumber([5, 2, 2, 8, 2]));

// Array: Remove Range

// Given array, and indices start and end, remove

// remove vals in that index range, working in-place (hence shortening the array). Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it.

const removeRange = (arr, start, end) => {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i < start || i > end) {
            arr[count] = arr[i];
            count++;
        }
    }

    arr.length = count;
};

const array = [20, 30, 40, 50, 60, 70];
removeRange(array, 2, 4);
console.log(array);

//  Intermediate Sums You will be given an array of numbers. After every tenth element, add an additional element containing the sum of those ten values. If the array does not end aligned evenly with ten elements, add one last sum that includes those last elements not yet been included in one of the earlier sums. Given the array [], change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6].

const intermediateSums = (arr) => {
    let sum = 0;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        sum += num;
        result.push(num);
        if ((i + 1) % 10 === 0 || i === arr.length - 1) {
            result.push(sum);
            sum = 0;
        }
    }
    return result;
};
console.log(intermediateSums([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]));

//  Double Trouble

//  Create a function that changes a given array to list each original element twice, retaining original order. Convert [4,"Ulysses",42,false] to [4,4,"Ulysses","Ulysses",42,42,false,false].

const doubleIt = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const digits = arr[i];
        result.push(digits, digits);
    }
    return result;
};
console.log(doubleIt([4, "Ulysses", 42, false]));

// Zip It
// Create a standalone function that accepts two arrays and combines their values sequentially into a new array, at alternating indices starting with first array. Extra values from either array should be included afterward. Given [1,2] and [10,20,30,40], return new array containing [1,10,2,20,30,40]. Second: combine the two arrays’ values into the first array, instead of into a new array. Much more fun!
const combineTwoArray = (arr1, arr2) => {
    const combinedArray = [];
    const maxLength = (arr1.length, arr2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < arr1.length) {
            combinedArray.push(arr1[i]);
        }
        if (i < arr2.length) {
            combinedArray.push(arr2[i]);
        }
    }

    return combinedArray;
};

console.log(combineTwoArray([1, 2], [10, 20, 30, 40]));

// / Challenge Description:
// Write a JavaScript function that takes an array as input. This array can contain elements that are either numbers or arrays of numbers, but the arrays will not contain further nested arrays. The function should return a new array that is a flattened version of the input array, where all elements are at the root level.

// [1,2,3[4,5,6[7,8,9]]]=>[1,2,3,4,5,6]
const flattenArray = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];
        if (Array.isArray(ele)) {
            for (let j = 0; j < ele.length; j++) {
                newArr.push(arr[i][j]);
            }
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};
flattenArray([1, 2, 3, [4, 5, 6], [7, 8, 9]]);
