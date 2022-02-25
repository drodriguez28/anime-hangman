import React from 'react';

const ButtonLetters = () => {

const alphabetLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return ( 
  <div className="alphabet-letters-container">
    {alphabetLetters.map((btn) => (
        <button
          className="alphabet-letters"
        >
          {btn}
        </button>
      ))}
  </div>
    );
};

export default ButtonLetters;
