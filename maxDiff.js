// Given an array arr[] of integers, find out the maximum difference between any two elements such that larger element appears after the smaller number.

// Input : arr = {2, 3, 10, 6, 4, 8, 1}
// Output : 8
// Explanation : The maximum difference is between 10 and 2.

// Input : arr = {7, 9, 5, 6, 3, 2}
// Output : 2
// Explanation : The maximum difference is between 9 and 7.

const maxDiff = (arr) => {
	let max = 0;

	for (let i = 0; i < arr.length; i++) {
		for (let j = i; j < arr.length; j++) {
			if (arr[j] - arr[i] > max) {
				max = arr[j] - arr[i];
			}
		}
	}

	return max;
};

console.log(maxDiff([ 7, 9, 5, 6, 3, 2 ]));
