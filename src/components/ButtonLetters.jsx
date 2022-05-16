import React from "react";

const ButtonLetters = ({ selectedWord, playable }) => {
  const alphabetLetters = "abcdefghijklmnopqrstuvwxyz".split("");


  const handleButtonChange = event => {

    // if (playable) {
      const letter = event;
      console.log("deiide", letter);

    // }

  };

  return (
    <div className="alphabet-letters-container">
      {alphabetLetters.map((btn, index) => (
        <button
          key={index}
          className="alphabet-letters"
          onClick={() => handleButtonChange(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default ButtonLetters;
