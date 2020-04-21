export const removeSAndB = (str) =>
  str.replace(/["{}]/g, '').replace(/[,]/g, ', ');
