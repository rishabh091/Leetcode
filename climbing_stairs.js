/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * 
 * Example 1:
 * Input: n = 2
 * Output: 2
 * 
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 */

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let fib1 = 1
    let fib2 = 1
    if (n == 0) return fib1
    if (n == 1) return fib2
    for (let i = 2; i <= n; i++) {
        let temp = fib2
        fib2 += fib1
        fib1 = temp
    }
    
    return fib2
};

/**
 * Explanation:
 * 
 * Basically fibnocci series
 */