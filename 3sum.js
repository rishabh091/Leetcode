/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 * 
 * Example 1:
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Explanation: 
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
 * The distinct triplets are [-1,0,1] and [-1,-1,2].
 * Notice that the order of the output and the order of the triplets does not matter.
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let result = []
    nums.sort((p, c) => { return parseInt(p) - parseInt(c) })
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue
        
        let j = i + 1
        let k = nums.length - 1
        
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            if (sum == 0) {
                result.push([nums[i], nums[j], nums[k]])
                k--
                
                while (j < k && nums[k] == nums[k + 1]) k--
            }
            else if (sum > 0) {
                k--
            }
            else {
                j++
            }
        }
    }
    
    return result
};

/**
 * Explanation:
 * 1. Sort the array so that all the duplicate elements are clubbed together.
 * 2. We need three pointer
 *      i: starting from 1 and goes till nums.length - 2
 *      j: starting from i + 1
 *      k: starting from last element
 * 3. Create check to check for duplicate elements starting for i
 * 4. Use a while loop with condition j < k
 * 5. Calculate sum and check if its equal to 0
 * 6. If sum is equal to 0, then push the result, decrease value of k and add a check to skip duplicate values.
 * 7. If sum is greater than 0, means value of k is large so decrease the value
 * 8. If sum is less than 0, increase the value of j
 * 
 * Reference: https://www.code-recipe.com/post/three-sum
 */