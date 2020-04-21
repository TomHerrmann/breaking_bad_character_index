export const removeQuotesAndBraces = (str) =>
  str.replace(/["{}]/g, '').replace(/[,]/g, ', ');
