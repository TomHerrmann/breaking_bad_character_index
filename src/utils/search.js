const search = (query, storeArr) => {
  const results = [];

  for (let i = 0; i < storeArr.length; i++) {
    if (storeArr[i].includes(query.toLowerCase())) results.push(storeArr[i]);
    if (results.length === 6) return results;
  }

  return results;
};

export default search;
