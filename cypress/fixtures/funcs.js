const { _ } = Cypress;

export const toStrings = (cells$) => _.map(cells$, 'textContent');
export const toNumbers = (prices) => _.map(prices, Number);