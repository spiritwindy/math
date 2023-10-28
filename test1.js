const { correlationCoefficient } = require("./correlation");

var a = Array.from(new Array(10), (v) => {
    return Math.random()
});

var b = Array.from(new Array(10), (v) => {
    return Math.random()
});

// 
console.log(correlationCoefficient(a, b))

console.log(correlationCoefficient(step(a), step(b)))

/**
 * 
 * @param {number[]} arr 
 */
function step(arr, p = 2) {
    var res = [];
    for (let index = 0; index < arr.length; index += 2) {
        res.push(p * arr[index] + arr[index + 1])
    }
    return res
}