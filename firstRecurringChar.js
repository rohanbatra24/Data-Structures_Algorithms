//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input) {
	const arr = [];

	for (let num of input) {
		if (arr.includes(num)) {
			return num;
		}
		arr.push(num);
	}
}

function firstRecurringCharacter2(input) {
	// faster because of hashtable lookup O(n)
	const obj = {};

	for (let num of input) {
		if (obj[num]) {
			return num;
		}
		obj[num] = true;
	}
}
