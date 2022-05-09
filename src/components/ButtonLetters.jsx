import React from "react";

const ButtonLetters = () => {
  const alphabetLetters = "abcdefghijklmnopqrstuvwxyz".split("");
  
  return (
    <div className="alphabet-letters-container">
      {alphabetLetters.map((btn, index) => (
        <button
          key={index}
          className="alphabet-letters"
          onClick={() => console.log(index)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default ButtonLetters;
