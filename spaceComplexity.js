const foo = (n) => {
	for (let i = 0; i < n.length; i++) {
		// creating variable i
		console.log('fooo');
	}
};

foo([ 1, 2, 3, 4, 5 ]);

// space complexity

// O(1)

const arrayOfHiNTimes = (n) => {
	let hiArray = [];

	for (let i = 0; i < n.length; i++) {
		hiArray[i] = 'hi'; // creating a new item in memory each time and storing in arr
	}

	return hiArray;
};

console.log(arrayOfHiNTimes([ 1, 2, 3, 4, 5 ]));

// O(n)
