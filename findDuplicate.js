// find the duplicate num

const findDuplicate = (arr) => {
	//O(n) time, O(n) space, not as space eff as brute force nested loops
	const obj = {};

	for (let num of arr) {
		if (obj[num]) {
			return num;
		}
		else {
			obj[num] = true;
		}
	}

	return false;
};

console.log(findDuplicate([ 1, 4, 5, 3, 7, 1 ]));

// another appoach - create your own hash table
const findDuplicate = (arr) => {
	// i + 1 = value
	const hashTable = [];

	for (let i = 0; i < arr.length; i++) {
		if (hashTable[arr[i] - 1]) {
			return arr[i];
		}

		hashTable[arr[i] - 1] = true;
	}

	return false;
};

console.log(findDuplicate([ 1, 4, 5, 3, 7, 1 ]));

// another approach could be to first sort the array and then loop to check if consecutive nums are the same
