// brute force - loop through one array and keep pushing to other arr. Then sort

const mergeSortedArrays = (arr1, arr2) => {
	// do checks
	// if both inputs are arrays
	// is  one or both empty?

	return arr1.concat(arr2).sort((a, b) => a - b);
};

const mergeSortedArrays = (arr1, arr2) => {
	return [ ...arr1, ...arr2 ].sort((a, b) => a - b);
};

const mergeSortedArrays = (arr1, arr2) => {};

console.log(mergeSortedArrays([ 0, 3, 4, 31 ], [ 4, 6, 30 ]));

// Array.reverse(), Array.reduce(), Array.forEach(), Array.filter(), Array.map(), Array.find() all have linear complexity. O(n)

// OTHER APPROACHES
// loop and compare first elements of each arr. Push smaller element to new empty arr

function mergeSortedArrays(array1, array2) {
	if (array1.length === 0) {
		return array2;
	}
	if (array2.length === 0) {
		return array1;
	}
	const mergedArray = [];
	let array1Item = array1[0];
	let array2Item = array2[0];
	let i = 1;
	let j = 1;

	while (array1Item || array2Item) {
		if (array2Item === undefined || array1Item < array2Item) {
			mergedArray.push(array1Item);
			array1Item = array1[i];
			i++;
		}
		else {
			mergedArray.push(array2Item);
			array2Item = array2[j];
			j++;
		}
	}
	return mergedArray;
}

mergeSortedArrays([ 0, 3, 4, 31 ], [ 3, 4, 6, 30 ]);
