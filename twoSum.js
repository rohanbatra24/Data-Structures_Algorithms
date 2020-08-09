// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// brute force - nested loops

const twoSum = (nums, target) => {
	// remember - foreach doesnt return anything
	const compliments = {};

	nums.forEach((element, i) => {
		compliments[target - element] = i;

		if (compliments[element] !== undefined && compliments[element] !== compliments[target - element]) {
			console.log(compliments[element], compliments[target - element]);
		}
	});
};

twoSum([ 2, 7, 11, 15 ], 22);
