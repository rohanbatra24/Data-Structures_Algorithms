// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

const moveZeroes = (nums) => {
	let zeroIndex;
	for (let i = 0; i < nums.length; i += 1) {
		// get the first index where we encounter a zero, if any
		if (nums[i] === 0) {
			if (zeroIndex === undefined) {
				zeroIndex = i;
			}
		}
		else if (zeroIndex !== undefined) {
			// swap value if num is nonzero & there's a zero before it to minimize #. of operations
			nums[zeroIndex] = nums[i];
			nums[i] = 0;
			zeroIndex += 1;
		}
	}
};
