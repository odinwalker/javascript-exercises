const repeatString = function(word, times) {
	if (times < 0) return 'ERROR';

	let string = "";
	for (let i = 0; i < times; i++){
		string += word;
	}
	return string;
};

// Do not edit below this line
module.exports = repeatString;

/*function repeatStr(string, num) {
	
		if (num >=0){
			//for (let i = 0; i <= num; i++){ 循环次数多了一次
			for (let i = 0; i < num; i++){
			console.log(string)
			}	
		}
		else {
			console.log('ERROR')
		}
};

repeatStr("Good", 5);*/


/*Issues

1. 我忽略了函数的复用，习惯性的使用了`console.log` 来验证结果
2. 这里的重复不是指在终端打印结果，而是在函数内部重复（拼接）了`n` 次之后，最终一次性返回结果，这样来实现函数的复用
*/