import React, { useContext } from 'react';

import { AppContext } from '../App';

import '../App.css';

const Key = ({ keyVal, bigKey }) => {
  const { board, setBoard, currAttempt, setCurrAttempt } =
    useContext(AppContext);

  const selectLetterHandler = () => {
    if (currAttempt.currPos > 4) return;

    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.currPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, currPos: currAttempt.currPos + 1 });
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
