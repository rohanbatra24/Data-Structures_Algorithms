function LongestWord(sen) {
	// code goes here

	const wordArr = sen.match(/[a-z]+/gi);

	const sorted = wordArr.sort((a, b) => {
		return b.length - a.length;
	});

	return sorted[0];
}
