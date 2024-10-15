const Stock = require('./stock');
const Portfolio = require('./portfolio');

// Create stocks
const apple = new Stock('Apple', {
  '2023-01-01': 100,
  '2024-01-01': 150,
});

const google = new Stock('Google', {
  '2023-01-01': 200,
  '2024-01-01': 250,
});

// Create portfolio and add stocks
const portfolio = new Portfolio();
portfolio.addStock(apple);
portfolio.addStock(google);

// Calculate profit and annualized return
console.log('Profit:', portfolio.profit('2023-01-01', '2024-01-01'));
console.log('Annualized Return:', portfolio.annualizedReturn('2023-01-01', '2024-01-01'));
