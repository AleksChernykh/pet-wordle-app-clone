import { createContext, useState } from 'react';

import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { boardDefault } from './Helpers';

import './App.css';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, currPos: 0 });

  return (
    <div className='App'>
      <header className='header'>
        <h1>Wordle</h1>
      </header>
      <AppContext.Provider
        value={{ board, setBoard, currAttempt, setCurrAttempt }}
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
