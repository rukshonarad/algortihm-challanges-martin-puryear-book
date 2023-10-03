//  Print One, Return Another Build a function that takes array of numbers. The function should print second-to-last value in the array, and return first odd value in the array.

const printOneReturnAnother = (arr) => {
    let secondLast = arr[arr.length - 2];
    console.log(secondLast);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return arr[i];
        }
    }
};
console.log(printOneReturnAnother([2, 3, 6, 8, 29, 7]));

//  Double Vision Given array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.

const double = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
};

console.log(double([1, 2, 3]));

// Count Positives Given array of numbers, create function to replace last value with number of positive values. Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

const countPositives = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
        arr[arr.length - 1] = count;
    }
    return arr;
};

console.log(countPositives([-1, 1, 1, 1]));
