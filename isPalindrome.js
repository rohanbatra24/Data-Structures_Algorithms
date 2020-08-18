const isPalindrome = (str) => {
	// The most optimal solution is to loop through only half of the array
	// and compare the values at the beginning of the array with the end
	// of the array
	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] !== str[str.length - i - 1]) {
			return false;
		}
	}
	return true;
};

console.log(isPalindrome('sniians'));
