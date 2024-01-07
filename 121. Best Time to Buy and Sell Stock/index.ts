// Status: Time Limit
function maxProfit(prices: number[]): number {
  let hight_num: number = 0
  for (let left = 0; left < prices.length; left++) {
    for (let right = left; right < prices.length; right++) {
      const count = prices[right] - prices[left]
      if (hight_num < count) {
        hight_num = count
      }
    }
  }
  return hight_num
};

// Status : succes
function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
}

maxProfit([7, 1, 5, 3, 6, 4])
maxProfit([2, 4, 1])
maxProfit([7, 6, 4, 3, 1])
