// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Input: J = "aA", S = "aAAbbbb"
// Output: 3

var numJewelsInStones = function(J, S) {
	//O(n^2) - because of includes?
	const jewels = J.split('');

	let counter = 0;

	S.split('').forEach((char) => {
		if (jewels.includes(char)) {
			counter++;
		}
	});

	return counter;
};

var numJewelsInStones = function(J, S) {
	//O(n)
	let map = {};
	let res = 0;
	for (let i = 0; i < J.length; i++) {
		map[J[i]] = true;
	}
	for (let i = 0; i < S.length; i++) {
		if (map[S[i]] === true) {
			res++;
		}
	}
	return res;
};
