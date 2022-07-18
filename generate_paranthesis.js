/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * 
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 */

/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    let ans = []
    function _gp(str = [], open = 0, close = 0) {
        if (str.length == 2 * n) {
            ans.push(str.join(''))
            return
        }
        
        if (open < n) {
            str.push('(')
            _gp(str, open + 1, close)
            str.pop()
        }
        if (close < open) {
            str.push(')')
            _gp(str, open, close + 1)
            str.pop()
        }
    }
    
    _gp()
    return ans
};

/**
 * Explanation
 * 
 * Instead of adding '(' or ')' every time as in Approach 1, 
 * let's only add them when we know it will remain a valid sequence. 
 * We can do this by keeping track of the number of opening and closing brackets we have placed so far.
 * We can start an opening bracket if we still have one (of n) left to place.
 * And we can start a closing bracket if it would not exceed the number of opening brackets.
 */