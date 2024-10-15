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
    const years = (end - start) / (1000 * 60 * 60 * 24 * 365);
    return (1 + totalProfit) ** (1 / years) - 1;
  }
}

module.exports = Portfolio;
