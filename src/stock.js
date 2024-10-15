class Stock {
  constructor(name, prices) {
    this.name = name;
    this.prices = prices;
  }

  price(date) {
    return this.prices[date] || 0;
  }
}

module.exports = Stock;
