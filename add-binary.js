/**
 * Given two binary strings a and b, return their sum as a binary string.
 * 
 * Example 1:
 * Input: a = "11", b = "1"
 * Output: "100"
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {    
    if (a.length < b.length) {
        const temp = a
        a = b
        b = temp
    }
    
    a = a.split('')
    b = b.split('')
    
    let carry = 0
    for (let i = a.length - 1; i >= 0; i--) {
        let aVal = parseInt(a[i])
        let operation = "" + aVal + carry
        
        if (b.length) {
            let bVal = parseInt(b.pop())
            operation += bVal
        }
        
        let count1 = operation.split("1").length - 1
        if (count1 == 1) {
            a[i] = 1
            carry = 0
        }
        else if (count1 == 0) {
            a[i] = 0
            carry = 0
        }
        else if (count1 == 2) {
            a[i] = 0
            carry = 1
        }
        else if (count1 == 3) {
            a[i] = 1
            carry = 1
        }
    }
    
    if (carry) a.unshift(carry)
    
    console.log(a)
    return a.join('')
};

/**
 * Explanation:
 * 
 * Set first variable to the largest binary and convert both strings into array
 * Traverse in a reverse fashion and if smaller binary has element pop the element
 * Take string sum of first, second binary and carry
 * Calculate number of 1 in resulting string
 * if no 1 are present set a[i] = 0 and carry = 0
 * if number of 1 is 1 then set a[i] = 1 and carry = 0
 * if number of 1 is even and not 0 then set a[i] = 0 and carry = 1
 * if number of 1 is odd and not 1 then set a[i] = 1 and carry = 1
 * 
 * if carry is present even after whole operation, add it to the start of the array
 * Join the resulting array and return
 */