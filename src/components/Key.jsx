import React, { useContext } from 'react';

import { AppContext } from '../App';

import '../App.css';

const Key = ({ keyVal, bigKey }) => {
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
      className={bigKey ? 'key big-key' : 'key'}
      onClick={selectLetterHandler}
    >
      {keyVal}
    </div>
  );
};

export default Key;
