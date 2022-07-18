/**
 * You are given a large integer represented as an integer array digits,
 * where each digits[i] is the ith digit of the integer.
 * The digits are ordered from most significant to least significant in left-to-right order.
 * The large integer does not contain any leading 0's.
 * Increment the large integer by one and return the resulting array of digits.
 *
 * Input: digits = [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 * Incrementing by one gives 123 + 1 = 124.
 * Thus, the result should be [1,2,4]
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {    
    let carry = 0
    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = digits[i] + carry
        if (i == digits.length - 1) {
            sum += 1
        }
        if (sum >= 10) {
            let splitSum = (sum + '').split('')
            digits[i] = parseInt(splitSum[1])
            carry = parseInt(splitSum[0])
        }
        else {
            digits[i] = sum
            carry = 0
        }
    }
    
    if (carry) digits.unshift(carry)
    
    return digits
};

/**
 * Explanation:
 * 
 * Iterate in a reverse manner and add plus 1 for last element and carry for all elements
 */