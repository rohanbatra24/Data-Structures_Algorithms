// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
	//code here
	if (number === 2) {
		return 2;
	}
	return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
	//code here
	let multiplier = 1;
	for (let i = number; i > 0; i = i - 1) {
		multiplier *= i;
	}
	return multiplier;
}

// console.log(findFactorialIterative(5));

console.log(findFactorialRecursive(5));
