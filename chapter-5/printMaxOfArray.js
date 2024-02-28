function printMaxOfArray(arr) {
    if (arr.length === 0) {
        console.log("[], no max val.");
        return;
    }

    var max = arr[0];

    for (var idx = 1; idx < arr.length; idx++) {
        if (arr[idx] > max) {
            max = arr[idx];
        }
    }

    console.log("Max val is:", max);
}
