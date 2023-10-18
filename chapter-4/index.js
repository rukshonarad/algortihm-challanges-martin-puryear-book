// Remove Blanks Create a function that, given a string, returns all of that string’s contents, but without blanks. If given the string " Pl   ayTha  tF   u  nkyM  usi    c  ", return "PlayThatFunkyMusic".

const removeBlanks = (string) => {
    // return string.trim(" ").split(" ").join("");
    return string.split(" ").join("");
};

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
// String: Get Digits Create a JavaScript function that given a string, returns the integer made from the

function getDigitsFromString(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(parseInt(str[i]))) {
            result += str[i];
        }
    }
    return parseInt(result, 10);
}

const inputString = "0s1a3y5w7h9a2t4?6!8?0";
const result = getDigitsFromString(inputString);
console.log(result);
