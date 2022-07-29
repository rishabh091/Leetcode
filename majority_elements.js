/**
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 * 
 * Example 1:
 * Input: nums = [3,2,3]
 * Output: 3
 * 
 * Example 2:
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let neededMajority = nums.length / 2
    let count = {}
    for (let num of nums) {
        if (count[num]) count[num]++
        else count[num] = 1
    }
    for (let key of Object.keys(count)) {
        if (count[key] > neededMajority) return key
    }
    return -1
};