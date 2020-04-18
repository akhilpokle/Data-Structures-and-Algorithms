/***********************************************************************************************************************************
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock),
design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.

***********************************************************************************************************************************/


var maxProfit = function(prices){
        
        // initially set to minimum price
        let minprice = Number.MIN_VALUE;

        // set max profit to 0
        let maxprofit = 0;
        for (let i = 0; i < prices.length; i++) { 
         
            // if Current price is less than minprice found till now, 
            // set min price to current price. 
            if (prices[i] < minprice)
                minprice = prices[i];
         
            // else check if selling stock on ith day will give us maximum profit.
            else if (prices[i] - minprice > maxprofit)
                maxprofit = prices[i] - minprice;
        }
        return maxprofit;
}
```
No
