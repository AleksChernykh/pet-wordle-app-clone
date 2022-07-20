import { createContext, useState } from 'react';

import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { boardDefault } from './Helpers';

import './App.css';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, currPos: 0 });

  const correctWord = 'lucky';

  const onSelectLetter = (keyVal) => {
    if (currAttempt.currPos > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.currPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, currPos: currAttempt.currPos + 1 });
  };

  const onEnter = () => {
    if (currAttempt.currPos !== 5) return;
    setCurrAttempt({ attempt: currAttempt.attempt + 1, currPos: 0 });
  };

  const onDelete = () => {
    if (currAttempt.currPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.currPos - 1] = '';
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, currPos: currAttempt.currPos - 1 });
  };

  return (
    <div className='App'>
      <header className='header'>
        <h1>Wordle</h1>
      </header>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          onSelectLetter,
          onDelete,
          onEnter,
          correctWord,
        }}
      >
        <div className='game'>
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
