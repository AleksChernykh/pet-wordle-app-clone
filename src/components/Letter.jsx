import React, { useContext } from 'react';

import { AppContext } from '../App';

const Letter = ({ letterPos, currAttempt }) => {
  const { board } = useContext(AppContext);

  const letter = board[currAttempt][letterPos];

  return <div className='letter'>{letter}</div>;
};

export default Letter;
