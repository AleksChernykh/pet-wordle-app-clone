import React, { useContext } from 'react';

import { AppContext } from '../App';

import classes from './Key.module.css';

const Key = ({ keyVal, bigKey, absent, present, correct }) => {
  const { onSelectLetter, onDelete, onEnter, theme } = useContext(AppContext);

  const selectLetterHandler = () => {
    if (keyVal === 'enter') {
      onEnter();
    } else if (keyVal === 'delete') {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };

  return (
    <div
      className={`${classes.key} ${
        bigKey
          ? classes.big_key
          : absent
          ? classes.absent
          : present
          ? classes.present
          : correct && classes.correct
      }`}
      id={classes[theme.theme]}
      onClick={selectLetterHandler}
    >
      {keyVal}
    </div>
  );
};

export default Key;
