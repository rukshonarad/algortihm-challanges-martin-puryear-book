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

// Acronyms Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). Given " there's no free lunch  -  gotta pay yer way. ", return "TNFL-GPYW". Given "Live from New York, it's Saturday Night!", return "LFNYISN".

const acronyms = (str) => {
    let result = [];
    let word = str.split(" ");
    for (let i = 0; i < word.length; i++) {
        let char = word[i];

        result.push(char[0].toUpperCase());
    }
    return result.join("");
};
// console.log(acronyms(" there's no free lunch -  gotta pay yer way. "));

const countLength = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char !== " ") {
            count++;
        }
    }
    return count;
};

console.log(countLength("Honey pie, you are driving me crazy"));

// ["abc", "defg", "a", "xy"], 3; => ["abc", "defg"];

// Given anarray of string, and length(number). Return a new array, remove all strings that have less chars than length

const compareTwo = (str, num) => {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char.length >= num) {
            result.push(char);
        }
    }
    return result;
};

const filterStrings = (arr, length) => {
    return arr.filter((str) => str.length >= length);
};
console.log(compareTwo(["qgh", "kjsh", "gs"], 3));

// String: Reverse Implement reverseString(str) that, given string, returns that string with characters reversed. Given "creature", return "erutaerc". Tempting as it seems, do not use the built-in reverse()!

//   Integer to Roman Numerals Given a positive integer that is less than 4000, return a string containing that value in Roman numeral representation. In this representation, I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000. Remember that 4 is IV, 349 is CCCIL and 444 is CDXLIV.
// const dic = {
//     1: "I",
//     5: "V",
//     10: "X",
//     50: "L",
//     100: "C",
//     500: "D",
//     1000: "M",

//     4: "IV",
//     9: "IX",
//     19: "XIX",
//     40: "XL",
//     49: "XLIX"
// };

const romanNumerical = (num) => {
    let val = [1000, 500, 100, 50, 40, 20, 10, 9, 5, 4, 1];
    let roman = ["M", "D", "C", "L", "XL", "XX", "X", "IX", "V", "IV", "I"];
    let result = "";
    for (let i = 0; i < val.length; i++) {
        let char = val[i];
        while (num >= char) {
            result += roman[i];
            num -= char;
        }
    }
    return result;
};
console.log(romanNumerical(3));
console.log(romanNumerical(24));
console.log(romanNumerical(4669));
console.log(romanNumerical(466));
console.log(romanNumerical(40));
console.log("_-_-_-_-_-_-_-_-_-_-_-_");

//  Is Word Alphabetical Nikki, a queen of gentle sarcasm, loves the word facetiously. Lance helpfully points out that it is the only known English word that contains all five vowels in alphabetical order, and it even has a ‘y’ on the end! Nikki takes a break from debugging to turn and give him an acid stare – indeed a look that was delivered arseniously. Given a string, return whether all contained letters are in alphabetical order.
const isWordAlphabetical = (str) => {
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] > str[i + 1]) {
            return str.split("").sort().join("");
        }
    }
    return str;
};
console.log(isWordAlphabetical("facetiously"));
console.log("_-_-_-_-_-_-_-_-_-_-_-_");

//  D Gets Jiggy Write a function that accepts as a parameter a string containing someone’s name. Return a string containing the following oh-so-cool greeting: strip off the first letter of the name, capitalize this new word, and add " to the [first letter]!" Given "Dylan", return "YLAN to the D!"
const getJiggyWrite = (str) => {
    const firstLetter = str[0].toUpperCase();
    const restOfName = str.slice(1).toUpperCase();
    return `${restOfName} to the ${firstLetter}!`;
};

console.log(getJiggyWrite("Dylan"));

//  Common Suffix Lance is writing his opus: Epitome, an epic tome of beat poetry. Always ready for a good rhyme, he constantly seeks words that end with the same letters. Write a function that, when given a word array, returns the largest suffix (word-end) common to all words in the array. For inputs ["deforestation", "citation", "conviction", "incarceration"], return "tion" (not all that creative a rhyming point). If it is ["nice", "ice", "baby"], return "", because that’s just … not.
function largestCommonSuffix(words) {
    if (words.length === 0) {
        return "";
    }
    words.sort();

    const firstWord = words[0];
    const lastWord = words[words.length - 1];

    let i = 0;
    while (i < firstWord.length && firstWord[i] === lastWord[i]) {
        i++;
    }

    const commonSuffix = firstWord.slice(i);

    return commonSuffix;
}

console.log(largestCommonSuffix(["nice", "ice", "baby"]));
console.log(
    largestCommonSuffix([
        "deforestation",
        "citation",
        "conviction",
        "incarceration"
    ])
);

//  Zip Arrays into Map Associative arrays are sometimes called maps because a key (string) maps to a value. Given two arrays, create an associative array (map) containing keys of the first, and values of the second. For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return {"abc": 42, 3: "wassup", "yo": true}.
const zipArrays = (arr1, arr2) => {
    const result = {};

    for (let i = 0; i < arr1.length; i++) {
        result[arr1[i]] = arr2[i];
    }

    return result;
};

const arr1 = ["abc", 3, "yo"];
const arr2 = [42, "wassup", true];
const zippedMap = zipArrays(arr2, arr1);
console.log(zippedMap);

// Associative arrays are also called hashes (we’ll learn why later). Build invertHash(assocArr) to convert hash keys to values, and values to keys. Example: given {"name": "Zaphod", "charm": "high", "morals": "dicey"}, return object {"Zaphod": "name", "high": "charm", "dicey": "morals"}.
function invertHash(assocArr) {
    const inverted = {};

    for (const key in assocArr) {
        const value = assocArr[key];
        inverted[value] = key;
    }

    return inverted;
}

console.log(invertHash({ name: "Zaphod", charm: "high", morals: "dicey" }));
