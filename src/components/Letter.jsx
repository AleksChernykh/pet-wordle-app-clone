import React, { useContext } from 'react';

import { AppContext } from '../App';

import '../App.css';

const Letter = ({ letterPos, attemptVal }) => {
  const { board, correctWord, currAttempt } = useContext(AppContext);

  const letter = board[attemptVal][letterPos];

  const correct = correctWord[letterPos] === letter;
  const contains = !correct && letter !== '' && correctWord.includes(letter);

  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? 'correct' : contains ? 'contains' : 'absent');

  return <div className={`letter ${letterState}`}>{letter}</div>;
};

export default Letter;
