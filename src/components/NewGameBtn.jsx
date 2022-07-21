import React from 'react';

import classes from './NewGameBtn.module.css';

const NewGameBtn = () => {
  return (
    <button
      className={classes.start__game}
      id={classes.gradient}
      onClick={() => window.location.reload()}
    >
      Start New Game
    </button>
  );
};

export default NewGameBtn;
