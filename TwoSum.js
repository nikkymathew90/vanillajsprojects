/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

*/

const twoSum = function (nums, target) {
  let compliment;
  const lookup = new Map();
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    compliment = target - nums[i];
    if (lookup.has(compliment)) {
      return [lookup.get(compliment), i];
    }
    lookup.set(nums[i], i);
  }
};

console.log("Result", twoSum([2, 7, 11, 15], 9));
