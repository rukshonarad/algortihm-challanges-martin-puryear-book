const returnOddsIn255 = () => {
    let odds = [];
    for (let num = 1; num <= 255; num += 2) {
        odds.push(num);
    }
    return odds;
};
console.log(returnOddsIn255(255));
