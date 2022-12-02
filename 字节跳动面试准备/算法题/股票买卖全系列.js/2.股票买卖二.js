//股票买卖
var maxProfit = function (prices) {
  let ans = 0;
  let n = prices.length;
  for (let i = 1; i < n; ++i) {
    ans += Math.max(0, prices[i] - prices[i - 1]);
  }
  return ans;
};

//一只能买一次 二是 可以买多次
