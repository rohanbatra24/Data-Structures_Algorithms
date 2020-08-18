// given [1,2,3,5,6,7,10,11,12,15,25,26,27]

// combine all consecutive groups of numbers

// ['1-3','5-7','10-12','15-15','25-27']

const arr = [ 1, 2, 3, 5, 6, 7, 10, 11, 12, 15, 25, 26, 27 ];

const combine = (arr) => {
	if (!arr.length) {
		return [];
	}

	const result = [];
	let start = arr[0];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i + 1] - arr[i] !== 1) {
			result.push(`${start} - ${arr[i]}`);
			start = arr[i + 1];
		}
	}

	return result;
};

console.log(combine(arr));
