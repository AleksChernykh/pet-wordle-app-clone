import React, { useEffect, useCallback, useContext } from 'react';

import { AppContext } from '../App';
import Key from './Key';

import classes from './Keyboard.module.css';

const Keyboard = () => {
  const {
    onSelectLetter,
    onDelete,
    onEnter,
    absentLetters,
    presentLetters,
    correctLetters,
  } = useContext(AppContext);

  const keys1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const keys2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const keys3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

  const keyDownHandler = useCallback((event) => {
    if (event.key === 'Enter') {
      onEnter();
    } else if (event.key === 'Backspace') {
      onDelete();
    } else {
      keys1.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) onSelectLetter(key);
      });
      keys2.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) onSelectLetter(key);
      });
      keys3.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) onSelectLetter(key);
      });
    }
  });

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [keyDownHandler]);

  return (
    <div className={classes.keyboard} onKeyDown={keyDownHandler}>
      <div className={classes.keyboard_row}>
        {keys1.map((key) => (
          <Key
            keyVal={key}
            absent={absentLetters.includes(key)}
            present={presentLetters.includes(key)}
            correct={correctLetters.includes(key)}
          />
        ))}
      </div>
      <div className={classes.keyboard_row}>
        {keys2.map((key) => (
          <Key
            keyVal={key}
            absent={absentLetters.includes(key)}
            present={presentLetters.includes(key)}
            correct={correctLetters.includes(key)}
          />
        ))}
      </div>
      <div className={classes.keyboard_row}>
        <Key keyVal={'enter'} bigKey />
        {keys3.map((key) => (
          <Key
            keyVal={key}
            absent={absentLetters.includes(key)}
            present={presentLetters.includes(key)}
            correct={correctLetters.includes(key)}
          />
        ))}
        <Key keyVal={'delete'} bigKey />
      </div>
    </div>
  );
};

export default Keyboard;
