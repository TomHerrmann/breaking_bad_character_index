const search = (query, storeArr) => {
  const results = [];

  for (let i = 0; i < storeArr.length; i++) {
    if (elem.includes(query)) results.push(elem);

    if (results.length === 6) return results;
  }

  return results;
};

export default search;
