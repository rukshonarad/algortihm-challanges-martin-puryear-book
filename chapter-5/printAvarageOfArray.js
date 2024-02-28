function printArrayVals(arr) {
    var sum = 0;
    for (var idx = 0; idx < arr.length; idx++) {
        console.log("array[", idx, "] =", arr[idx]);
        sum += arr[idx];
    }
    console.log("Avg val:", sum / arr.length);
}

var arr = [1, 2, 3, 4, 5];
printArrayVals(arr);
