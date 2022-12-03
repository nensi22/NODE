//  promise

let sum = (number1) => {
    while (number1 > 9) {
        console.log(number1);
        let sum1 = 0;
        while (number1 != 0) {
            sum1 = sum1 + number1 % 10;
            number1 = parseInt(number1 / 10);
        }
        number1 = sum1;
    }
    console.log()
    return number1;
}

let total = (number, work) => {

    return new Promise((resolve, reject) => {

        if (number > 0) {
            resolve(console.log(work(number)));
        }
        else {
            reject(console.log(number));
        }
    })
}

let number = 7069182001;
total(number, sum);