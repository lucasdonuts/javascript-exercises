const sumAll = function(num1, num2) {
    let sum = 0;
    if (
        typeof num1 != "number" ||
        typeof num2 != "number" ||
        num1 < 0 ||
        num2 < 0
    ) {

        return "ERROR";

    } else if (num2 - num1 == 0){

        return num2 + num1;

    } else if (num2 - num1 > 0) {
        for (let i = num2; i >= num1; i--) {
            sum += i;
        }
        return sum;

    } else {
        for (let i = num2; i <= num1; i++) {
            sum += i;
        }
        return sum;
    }
}
module.exports = sumAll
