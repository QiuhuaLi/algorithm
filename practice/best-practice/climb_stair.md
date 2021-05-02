
* [爬楼梯（求解斐波那契数列）](https://leetcode-cn.com/problems/climbing-stairs/)
1. 滚动数组
```js
var climbStairs = function(n) {
    let p = 0,q = 0, result = 1;
    for (let i = 0; i < n; i++){
        p = q;
        q = result;
        result = p + q;
    }
    return result;
};
O(n)
```
2. 斐波那契通项公式
```js
var climbStairs = function(n) {
    const sqrt_5 = Math.sqrt(5);
    const fib_n = Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2,n + 1);
    return Math.round(fib_n / sqrt_5);
}
O(logn)
```
3. 动态规划(原来动态规划就是循环呀)
```js
var climbStairs = function(n) {
    const resultArr = [];
    resultArr[0] = 1;
    resultArr[1] = 1;
    for(let i = 2; i <= n; i++){
        resultArr[i] = resultArr[i-1] + resultArr[i-2];
    }
    return resultArr[n]
};
```