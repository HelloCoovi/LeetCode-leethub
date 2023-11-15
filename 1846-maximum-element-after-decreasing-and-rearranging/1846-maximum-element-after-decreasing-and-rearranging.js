/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    let result = 0
    
    arr.sort((a, b) => a - b).forEach((num, idx) => {
        if (num > result) result += 1
    })
    
    return result
};