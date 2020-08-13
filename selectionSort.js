const numbers = [ 99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0 ];

function selectionSort(array) {
	// Time O(n^2), Space O(1) because not creating more variables

	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			let smallest = array[j];
			if (array[j + 1] < smallest) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
				smallest = array[j];
			}
		}
	}
}

function selectionSort(array) {
	// Time O(n^2), Space O(1) because not creating more variables
	const length = array.length;
	for (let i = 0; i < length; i++) {
		// set current index as minimum
		let min = i;
		let temp = array[i];
		for (let j = i + 1; j < length; j++) {
			if (array[j] < array[min]) {
				//update minimum if current is lower that what we had previously
				min = j;
			}
		}
		array[i] = array[min];
		array[min] = temp;
	}
	return array;
}

selectionSort(numbers);
console.log(numbers);
