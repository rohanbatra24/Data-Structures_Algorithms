function printAllNumbersThenAllPairSums(numbers) {
	console.log('these are the numbers:');
	numbers.forEach(function(number) {
		//O(n)
		console.log(number);
	});

	console.log('and these are their sums:');
	numbers.forEach(function(firstNumber) {
		//O(n^2)
		numbers.forEach(function(secondNumber) {
			console.log(firstNumber + secondNumber);
		});
	});
}

printAllNumbersThenAllPairSums([ 1, 2, 3, 4, 5 ]);

// Drop all non-dominants
// O(n + n^2) --> O(n^2)
