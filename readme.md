#方法说明

```javascript
const { similarity, dot, similarityByLen, arrSum, covariance, standardDeviation, correlationCoefficient } = require("cossim");
// 相似度
console.log(similarity([1, 2], [1, 2]))
// 点乘
console.log(dot([3, 4], [3, 4]))
console.log(similarityByLen([3, 4], [4, 3], 5, 5))
// 求和
console.log(arrSum([1, 2, 3]))

// 计算协方差
console.log(covariance([1, 2], [1, 2]))

// 计算标准差差
console.log(standardDeviation([1, 2, 3]))

// 计算协相关系数
console.log(correlationCoefficient([2, 3, 4, 1], [4, 3, 2, 1]))

```