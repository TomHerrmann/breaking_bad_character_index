const removeQuotesAndBraces = (str) =>
  str.replace(/["{}]/g, '').replace(/[,]/g, ', ');

export default removeQuotesAndBraces;
