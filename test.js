const nemo = [ 'nemo' ];

const large = new Array(100).fill('nemo');

const findNemo = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 'nemo') {
			console.log('Found Nemo!');
		}
	}
};
// can make this function faster by adding a 'Break' statement in the IF block. But worst case, it will still run 100 times

console.log(findNemo(large)); // O(n) --> Linear Time

const boxes = [ 0, 1, 2, 3, 4, 5 ];
const logFirstTwoBoxes = (boxes) => {
	console.log(boxes[0]); // O(1)
	console.log(boxes[1]); // O(1)
};

logFirstTwoBoxes(boxes); // O(2) --> Constant time
