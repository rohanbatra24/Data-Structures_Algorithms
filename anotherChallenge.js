function anotherFunChallenge(input) {
	let a = 5; // O(1)
	let b = 10; // O(1)
	let c = 50; // O(1)
	for (let i = 0; i < input; i++) {
		// O(n)
		let x = i + 1; // O(n)
		let y = i + 2; // O(n)
		let z = i + 3; // O(n)
	}
	for (let j = 0; j < input; j++) {
		// O(n)
		let p = j * 2; // O(n)
		let q = j * 2; // O(n)
	}
	let whoAmI = "I don't know"; // O(1)
}

// 2 + 7n
// O(n) - Big O

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
	console.log(items[0]);

	var middleIndex = Math.floor(items.length / 2);
	var index = 0;

	while (index < middleIndex) {
		console.log(items[index]);
		index++;
	}

	for (var i = 0; i < 100; i++) {
		console.log('hi');
	}
}

// O(n) - drop all constants
