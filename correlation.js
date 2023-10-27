/**
 * 协方差
 * @param {number[]} x 
 * @param {number[]} y
 * @param {number} meanX
 * @param {number} meanY
 * @returns 
 */
function covariance(x, y, meanX = arrSum(x) / x.length, meanY = arrSum(y) / y.length) {
    if (x.length !== y.length) {
        throw new Error('输入的数组长度不一致');
    }

    const n = x.length;
    // const meanX = arrSum(x) / n;
    // const meanY = arrSum(y) / n;
    let covariance = 0;

    for (let i = 0; i < n; i++) {
        covariance += (x[i] - meanX) * (y[i] - meanY);
    }

    return covariance / (n - 1);
}

/**
 * 协相关系数
 * @param {number[]} x 
 * @param {number[]} y 
 * @returns 
 */
function correlationCoefficient(x, y) {
    if (x.length !== y.length) {
        throw new Error('输入的数组长度不一致');
    }
    const meanX = arrSum(x) / x.length;
    const meanY = arrSum(y) / y.length;
    const covariance0 = covariance(x, y, meanX, meanY);

    const standardDeviationX = standardDeviation(x, meanX);
    const standardDeviationY = standardDeviation(y, meanY);

    return covariance0 / (standardDeviationX * standardDeviationY);
}

/**
 * 
 * @param {number[]} data 
 * @param {number} mean 
 * @returns 
 */
function standardDeviation(data, mean = arrSum(data) / data.length) {
    const n = data.length;
    // const mean = data.reduce((acc, val) => acc + val, 0) / n;
    const variance = data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / (n - 1);
    return Math.sqrt(variance);
}
/**
 * 
 * @param {number[]} arr 
 */
function arrSum(arr) {
    let s = 0
    for (let index = 0, len = arr.length; index < len; index++) {
        s += arr[index]
    }
    return s
}


module.exports = { arrSum, covariance, correlationCoefficient, standardDeviation }
