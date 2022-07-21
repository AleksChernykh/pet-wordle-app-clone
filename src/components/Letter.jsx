import React, { useContext, useEffect } from 'react';

import { AppContext } from '../App';

import '../App.css';

const Letter = ({ letterPos, attemptVal }) => {
  const {
    board,
    correctWord,
    currAttempt,
    setAbsentLetters,
    setPresentLetters,
    setCorrectLetters,
  } = useContext(AppContext);

  const letter = board[attemptVal][letterPos];

  const correct = correctWord[letterPos] === letter;
  const present = !correct && letter !== '' && correctWord.includes(letter);

  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? 'correct' : present ? 'present' : 'absent');

  useEffect(() => {
    if (letter !== '' && !correct && !present) {
      setAbsentLetters((prev) => [...prev, letter]);
    } else if (letter !== '' && !correct) {
      setPresentLetters((prev) => [...prev, letter]);
    } else {
      setCorrectLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  return <div className={`letter ${letterState}`}>{letter}</div>;
};

export default Letter;
