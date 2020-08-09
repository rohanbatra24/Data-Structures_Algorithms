// examples

// 2 inputs arr, 1 output bool

// questions - how large can the arrays get? what is more important - time or space complexity?

// talk about brute force approach - nested loops

const arr1 = [ 1, 2, 3, 4, 5 ];

const arr2 = [ 6, 7, 8, 6 ];

const containsCommonItems = (arr1, arr2) => {
	const obj = {};
	arr1.forEach((element) => {
		if (!obj[element]) {
			obj[element] = true;
		}
	});

	for (let item of arr2) {
		if (obj[item]) {
			return true;
		}
	}

	return false;
};

console.log(containsCommonItems(arr1, arr2));

// Notes (interesting fact!) - forEach wont work
//forEach() always returns the value undefined and is not chainable.
//and
//There is no way to stop or break a forEach() loop other than by throwing an exception.

// In fact, forEach() takes in a callback function that does return a value, but only within the scope created by forEach(). In other words, the return statement inside that callback never brought the value out of its scope or exited the function; it only returned that value to forEach() which then continued to traverse the rest of the array before returning undefined to its boss haveCommonItems().

// Another approach - optimized code using array.some and set
const haveCommonItems = (array1, array2) => {
	const array1set = new Set(array1);
	return array2.some((item) => array1set.has(item));

	haveCommonItems(animals, pets); // returns "true"
};
