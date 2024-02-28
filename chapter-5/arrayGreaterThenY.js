const returnArrayGreaterThenY = (arr, y) => {
    let greaterNum = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            greaterNum.push(arr[i]);
        }
    }
    return greaterNum;
};
console.log(returnArrayGreaterThenY([3, 4, 6], 0));
