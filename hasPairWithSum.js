// Brute force approach - nested for loops, compare each element with the others

// [1,2,3,4,7], sum: 9

// Better approach
const hasPairWithSum = (arr, sum) => {
	const mySet = new Set();

	for (let i = 0; i < arr.length; i++) {
		if (mySet.has(arr[i])) {
			return true;
		}
		else {
			mySet.add(sum - arr[i]);
		}
	}

	return false;
};

console.log(hasPairWithSum([ 4, 2, 4, 4, 7 ], 6));
