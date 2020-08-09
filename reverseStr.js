const reverse = (str) => {
	// check if input is string
	if (!str || str.length < 2 || typeof str !== 'string') {
		return str;
	}

	const arr = str.split('');

	const length = arr.length;

	const result = [];

	for (let i = 0; i < length; i++) {
		result.push(arr.pop());
	}
	return result.join('');
};

console.log(reverse('Hi my name is Rohan'));

//OTHER APPROACHES

// start looping from end of str to beginning and keep pushing the letter to empty arr on each iteration.

// use built in array reverse method in JS

// all other approaches:

const reverseString = (str) => {
	return str.split('').reverse().join('');
};

const reverseString = (str) => {
	const result = [];

	for (let i = str.length - 1; i >= 0; i--) {
		result.push(str[i]);
	}

	return result.join('');
};

const reverseString = (str) => {
	let revString = '';

	for (let i = str.length - 1; i >= 0; i--) {
		revString += str[i];
	}

	return revString;
};

const reverseString = (str) => {
	let revString = '';

	for (let i = 0; i <= str.length - 1; i++) {
		revString = str[i] + revString;
	}

	return revString;
};

const reverseString = (str) => {
	let result = '';

	for (let letter of str) {
		result = letter + result;
	}

	return result;
};

const reverseString = (str) => {
	let revString = '';

	str.split('').forEach((char) => (revString = char + revString));

	return revString;
};

const reverseString = (str) => {
	return str.split('').reduce((revString, char) => {
		return char + revString;
	}, '');
};
