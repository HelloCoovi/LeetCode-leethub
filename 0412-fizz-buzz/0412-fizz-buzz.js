/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    return Array(n).fill().map((_, i) => i + 1).map(num => {
        if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz"
        if (num % 3 === 0) return "Fizz"
        if (num % 5 === 0) return "Buzz"
        return String(num)
    })
};