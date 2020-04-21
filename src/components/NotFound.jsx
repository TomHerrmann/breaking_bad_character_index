import React from 'react';
import gifs from '../utils/gifsImport';

const NotFound = () => {
  const randomNum = Math.floor(Math.random() * gifs.length);

  return (
    <div className="not-found">
      <h2>We couldn't match anyone to your search</h2>
      <img src={gifs[randomNum]} alt="breaking bad gif" />
    </div>
  );
};

export default NotFound;
