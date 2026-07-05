/*const removeFromArray = function(arry, num) {
    const arry = [];
    for (let i = 0; i < arry.length; i++){
        let index = arry.indexOf(num);
        arry.splice(index, 1);
    }

    return arry;

};
*/

const removeFromArray = function(arry, ...args){
    return arry.filter(item => !args.includes(item));
}

// Do not edit below this line
module.exports = removeFromArray;
