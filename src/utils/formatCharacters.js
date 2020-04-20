const formatCharacters = (charactersArr) => {
  const formatted = {};

  charactersArr.forEach((character) => {
    const { name, nickname } = character;

    const key = `${name} ${nickname}`;
    formatted[key] = character;
  });

  return formatted;
};

export default formatCharacters;
