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
      <div className="img-container">
        <img src={img} alt={`${name} from ${category}`} />
      </div>
      <div className="ul-container">
        <ul>
          <li>
            <strong>Name: </strong>
            {name}
          </li>
          <li>
            <strong>Nickname: </strong>
            {nickname}
          </li>
          <li>
            <strong>Occupation: </strong>
            {removeSAndB(occupation)}
          </li>
          <li>
            <strong>Portrayed By: </strong>
            {portrayed}
          </li>
          <li>
            <strong>Status: </strong>
            {status}
          </li>
          <li>
            <strong>First Appeared On: </strong>
            {category}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterCard;
