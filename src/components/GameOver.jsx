import React, { useContext } from 'react';

import { AppContext } from '../App';

import '../App.css';

const GameOver = () => {
  const { gameOver, correctWord, currAttempt } = useContext(AppContext);

  return (
    <div className='gameOver'>
      <h3>{gameOver.guessedRight ? 'You Guessed Right!' : 'You failed!'}</h3>
      <h2>{`Correct Word Was: ${correctWord.toUpperCase()}`}</h2>
      <h3>
        {gameOver.guessedRight &&
          `You Guessed In ${currAttempt.attempt} Attempts`}
      </h3>
    </div>
  );
};

export default GameOver;
