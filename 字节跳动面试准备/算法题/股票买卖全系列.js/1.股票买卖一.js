//  因为股票就买卖一次，那么贪心的想法很自然就是取最左最小值，取最右最大值，那么得到的差值就是最大利润。
//  股票买卖
var maxProfit = function (prices) {
  let low = Infinity;
  let res = 0;
  for (const price of prices) {
    low = Math.min(low, price); // 取最左最小价格
    res = Math.max(res, price - low); // 直接取最大区间利润
  }
  return res;
};
