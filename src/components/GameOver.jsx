import React, { useContext } from 'react';

import { AppContext } from '../App';
import NewGameBtn from './NewGameBtn';

import classes from './GameOver.module.css';

const GameOver = () => {
  const { gameOver, correctWord, currAttempt, theme } = useContext(AppContext);

  return (
    <div className={classes.gameOver} id={classes[theme.theme]}>
      <h3>{gameOver.guessedRight ? 'You Guessed Right!' : 'You failed!'}</h3>
      <h2>{`Correct Word Was: ${correctWord.toUpperCase()}`}</h2>
      <h3>
        {gameOver.guessedRight &&
          `You Guessed In ${currAttempt.attempt} Attempts`}
      </h3>
      <NewGameBtn />
    </div>
  );
};

export default GameOver;
