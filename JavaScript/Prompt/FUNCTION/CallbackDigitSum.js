let sum = (number1) => {
    let sum1 = 0;
    console.log(number1);
    while (number1 != 0) {
        sum1 = sum1 + number1 % 10;
        number1 = parseInt(number1 / 10);
    }
    return sum1;
}

let total = (number, callback) => {
    let n = callback(number);
    while (n > 9) {
        return sum(n);
    }
    return n;
}

let number = 9898989898;
console.log(total(number, sum));

