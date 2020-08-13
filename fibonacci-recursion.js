// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
	// O(n)
	//code here;
	const arr = [ 0, 1 ];

	for (let i = 2; i < Infinity; i++) {
		arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
		if (arr.length - 1 === n) {
			return arr[arr.length - 1];
		}
	}
}

function fibonacciIterative(n) {
	// O(n)
	let arr = [ 0, 1 ];
	for (let i = 2; i < n + 1; i++) {
		arr.push(arr[i - 2] + arr[i - 1]);
	}
	return arr[n];
}
fibonacciIterative(3);

function fibonacciRecursive(n) {
	// O(2^n) --> Exponential increase as size of input grows! even WORSE than O(n^2).This is not an ideal solution although reads better
	if (n < 2) {
		return n;
	}
	return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

fibonacciRecursive(6);
