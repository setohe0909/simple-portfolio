const Stock = require('./stock');

class Portfolio {
  constructor() {
    this.stocks = [];
  }

  addStock(stock) {
    this.stocks.push(stock);
  }

  profit(startDate, endDate) {
    let totalProfit = 0;

    for (const stock of this.stocks) {
      const startPrice = stock.price(startDate);
      const endPrice = stock.price(endDate);
      totalProfit += endPrice - startPrice;
    }

    return totalProfit;
  }

  annualizedReturn(startDate, endDate) {
    const totalProfit = this.profit(startDate, endDate);
    const start = new Date(startDate);
    const end = new Date(endDate);

    /*
    *  This part converts milliseconds into years:
    *  1000 milliseconds = 1 second
    *  60 seconds = 1 minute
    *  60 minutes = 1 hour
    *  24 hours = 1 day
    *  365 days = 1 year (this is assuming a non-leap year for simplicity)
    *
    * Note: Dividing the difference in milliseconds (end - start) by the conversion factor 
    * 1000 * 60 * 60 * 24 * 365 gives the number of years between the two dates.
    */
    const years = (end - start) / (1000 * 60 * 60 * 24 * 365);
    return (1 + totalProfit) ** (1 / years) - 1;
  }
}

module.exports = Portfolio;
