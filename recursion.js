let counter = 0;

const inception = () => {
	if (counter > 3) {
		return 'done';
	}
	counter++;

	return inception(); // the 'return' is important otherwise the return value of the first inception wont bubble up and in the end it will return undefined
};

console.log(inception());
