//  Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

const printEveryThreeOdd = (arr) => {
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] % 2 !== 0 && arr[i - 1] % 2 !== 0 && arr[i - 2] % 2 !== 0) {
            console.log("That's odd!");
        } else if (
            arr[i] % 2 === 0 &&
            arr[i - 1] % 2 === 0 &&
            arr[i - 2] % 2 === 0
        ) {
            console.log("Even more so!");
        }
    }
};

console.log(printEveryThreeOdd([1, 2, 3, 4, 5, 6, 7]));
