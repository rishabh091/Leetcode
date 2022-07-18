/**
 * Given an integer array nums sorted in non-decreasing order, 
 * remove the duplicates in-place such that each unique element appears only once. 
 * The relative order of the elements should be kept the same.
 * Since it is impossible to change the length of the array in some languages, 
 * you must instead have the result be placed in the first part of the array nums. 
 * More formally, if there are k elements after removing the duplicates, then the first k elements of nums
 * should hold the final result. It does not matter what you leave beyond the first k elements.
 * 
 * Return k after placing the final result in the first k slots of nums.
 * Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 * 
 * 
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 * Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
 * It does not matter what you leave beyond the returned k (hence they are underscores).
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let lastIndex = nums.lastIndexOf(nums[i])
        
        while (i != lastIndex) {
            nums[lastIndex] = ''
            nums.splice(lastIndex, 1)
            lastIndex = nums.lastIndexOf(nums[i])
        }
    }
    return nums.length
};

/**
 * Explanation:
 * 
 * Iterate through the array and calculate lastIndex.
 * While lastIndex is not equal to current index remove lastIndex and check again.
 * The resulting array will have unique elements
 */