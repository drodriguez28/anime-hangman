import React, { useState, useEffect } from 'react';
import './App.css';
import Figure from './components/Figure';
import Header from './components/Header';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
//import Notification from './components/Notification';
import PictureHints from './components/PictureHints';
import { showNotification as show } from './helper/helpers';

const words = ['eren', 'levi', 'naruto', 'itachi', 'sasuke', 'deku', 'light', 'ryuk', 'mikasa', 'edward', 'meliodas', 'asta', 'yuno', 'lelouch', 'gon', 'killua', 'thorfinn', 'gojo', 'itadori'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const alphabetLetters = "abcdefghijklmnopqrstuvwxyz".split("");

  const [playable, setPlayable] = useState(true);

  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  const alphaButtons = () => {
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
    )
  };

  const handleButtonChange = event => {
     if (playable) {
    const letter = event;
    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        setCorrectLetters(currentLetters => [...currentLetters, letter]);

      } else {
        show(setShowNotification);
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        setWrongLetters(wrongLetters => [...wrongLetters, letter])
      } else {
        show(setShowNotification);
      }
    }
     }

  };

  // the use affect allows you to use the keyboard 

  // useEffect(() => {
  //   const handleKeydown = event => {
  //     const { key, keyCode } = event;

  //     if (playable && keyCode >= 65 && keyCode <= 90) {
  //       const letter = key.toLowerCase();

  //       if (selectedWord.includes(letter)) {
  //         if (!correctLetters.includes(letter)) {
  //           setCorrectLetters(currentLetters => [...currentLetters, letter]);

  //         } else {
  //           show(setShowNotification);
  //         }
  //       } else {
  //         if (!wrongLetters.includes(letter)) {
  //           setWrongLetters(wrongLetters => [...wrongLetters, letter])
  //         } else {
  //           show(setShowNotification);
  //         }
  //       }
  //     }
  //   }
  //   window.addEventListener('keydown', handleKeydown);

  //   return () => window.removeEventListener('keydown', handleKeydown)

  // }, [correctLetters, wrongLetters, playable]);


  function playAgain() {
    setPlayable(true);

    //Empty Array

    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>
      <Header />
      <PictureHints selectedWord={selectedWord} />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        {alphaButtons()}
      </div>
      <Popup selectedWord={selectedWord} wrongLetters={wrongLetters} correctLetters={correctLetters} setPlayable={setPlayable} playAgain={playAgain} />
      {/* <Notification showNotification={showNotification} /> */}
    </>

  );
}

export default App;
