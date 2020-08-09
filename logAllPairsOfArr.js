const boxes = [ 1, 2, 3, 4, 5 ];

const logAllPairs = (boxes) => {
	boxes.forEach((i) => {
		//O(n)
		boxes.forEach((j) => {
			console.log(i, j); //O(n)
		});
	});
};

console.log('logAllPairs(boxes)', logAllPairs(boxes));

// use multiplication when you seen nested loops --> n*n = n^2
// O(n*n) = O(n^2) --> Quadratic Time
