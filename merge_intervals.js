/**
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.
 * 
 * Example 1:
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
 * 
 * Example 2:
 * Input: intervals = [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    let results = []
    intervals.sort((a, b) => { return a[0] - b[0] })
    for (let i in intervals) {
        if (!results.length) {
            results.push(intervals[i])
        }
        else {
            let lastElement = results[results.length - 1]
            if (lastElement[1] >= intervals[i][0]) {
                results.pop()
                results.push([Math.min(lastElement[0], intervals[i][0]), Math.max(intervals[i][1], lastElement[1])])
            }
            else {
                results.push(intervals[i])
            }
        }
    }
    
    return results
};