/* 14. Write a JS function to convert an amount to coins. 
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
Output : 25, 10, 10, 1.                                     */


let amountTocoins = (num,Coins) => {
    let Result = [];
    while (num != 0) 
    {
        if (num >= 25) {
            num -= 25;
            Result.push(25);
        }
        else if (num >= 10) {
            num -= 10;
            Result.push(10);
        }
        else if (num >= 2) {
            num -= 2;
            Result.push(2);
        }
        else {
            num -= 1;
            Result.push(1);
        }
    }
    return Result;
}
console.log(amountTocoins(46, [25, 10, 5, 2, 1]));