const reverseString = function(string) {
    let newString;
    let stringArray = string.split("");
    let reverseArray = [];

    for (let i = 0; i < string.length; i++) {
        reverseArray.unshift(stringArray[i]);
    }

    newString = reverseArray.join("");
    return newString;
}

module.exports = reverseString
