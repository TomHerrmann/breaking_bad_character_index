import React from 'react';
import { removeSAndB } from '../utils/removeStringsAndBraces';

const CharacterCard = ({ character }) => {
  const {
    name,
    nickname,
    img,
    portrayed,
    category,
    status,
    occupation,
  } = character;

  return (
    <div className="character-card">
      <img src={img} alt={`${name} from ${category}`} />
      <strong>Name: {name}</strong>
      <p>Nickname: {nickname}</p>
      <p>Occupation: {removeSAndB(occupation)}</p>
      <p>Portrayed By: {portrayed}</p>
      <p>Status: {status}</p>
      <p>First Appeared On: {category}</p>
    </div>
  );
};

export default CharacterCard;
