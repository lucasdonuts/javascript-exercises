

const repeatString = function(string, num) {
    let newString = "";
    if (num < 0) {
        return "ERROR";
    } else if (num == 0) {
        return "";
    } else {
        for (let i = 0; i < num; i++) {
            newString += string;
        }
        return newString;
    }
}

module.exports = repeatString
