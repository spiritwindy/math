/**
 * 点积
 * @param {number[]} a 
 * @param {number[]} b 
 * @returns 
 */
function dot(a, b) {
    var sum = 0
    for (let index = 0; index < a.length; index++) {
        sum += a[index] * b[index];
    }
    return sum
}
/**
 * 
 * @param {number[]} a 向量
 * @param {number[]} b 向量
 * @returns 
 */
function similarity(a, b) {
    var magA = Math.sqrt(dot(a, a))
    var magB = Math.sqrt(dot(b, b))
    if (magA && magB)
        return dot(a, b) / (magA * magB)
    else
        return false
}

/**
 * 
 * @param {number[]} a 向量
 * @param {number[]} b 向量
 * @param {number} distA 距离
 * @param {number} distB 距离
 * @returns 
 */
function similarityByLen(a, b, distA, distB) {
    return dot(a, b) / (distA * distB)
}
const corr = require("./correlation")
module.exports = { similarity, dot, similarityByLen, ...corr }

