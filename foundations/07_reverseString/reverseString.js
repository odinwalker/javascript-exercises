const reverseString = function (str) {
    if (str === ""){
        return str = ""
    }
    else {
        newStr = str.split("");
        revStr = newStr.reverse();
        joinStr = revStr.join("");
        return joinStr;
    }
    // if...else有点多余了
    /*直接这样
    return str.split("").reverse().join("");
    */
};

console.log(reverseString("life is a gift"));

// Do not edit below this line
module.exports = reverseString;
