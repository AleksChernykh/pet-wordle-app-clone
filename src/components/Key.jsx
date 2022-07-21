import React, { useContext } from 'react';

import { AppContext } from '../App';

import '../App.css';

const Key = ({ keyVal, bigKey, absent, present, correct }) => {
  const { onSelectLetter, onDelete, onEnter } = useContext(AppContext);

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
      className={`key ${
        bigKey
          ? 'big-key'
          : absent
          ? 'absent'
          : present
          ? 'present'
          : correct && 'correct'
      }`}
      onClick={selectLetterHandler}
    >
      {keyVal}
    </div>
  );
};

export default Key;
