import React, { useContext, useEffect } from 'react';

import { AppContext } from '../App';
import { LetterContext } from '../store/letter-context';

import classes from './Letter.module.css';

const Letter = ({ letterPos, attemptVal }) => {
  const { board, correctWord, currAttempt, notAWord, theme } =
    useContext(AppContext);
  const { dispatchLetterCondition } = useContext(LetterContext);

  const letter = board[attemptVal][letterPos];

  const correct = correctWord[letterPos] === letter;
  const present = !correct && letter !== '' && correctWord.includes(letter);

  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? classes.correct : present ? classes.present : classes.absent);

  const letterShake =
    currAttempt.attempt === attemptVal && notAWord && classes.shake_letters;

  useEffect(() => {
    if (letter !== '' && !correct && !present) {
      dispatchLetterCondition({ type: 'absentLetter', payload: letter });
    } else if (letter !== '' && !correct) {
      dispatchLetterCondition({ type: 'presentLetter', payload: letter });
    } else {
      dispatchLetterCondition({ type: 'correctLetter', payload: letter });
    }
  }, [currAttempt.attempt]);

  return (
    <div
      className={`${classes.letter} ${letterState} ${letterShake}`}
      id={classes[theme.theme]}
    >
      {letter}
    </div>
  );
};

export default Letter;
