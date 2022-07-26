import { createContext, useEffect, useState } from 'react';

import Board from './components/Board';
import Keyboard from './components/Keyboard';
import GameOver from './components/GameOver';
import Nav from './components/Nav';
import HelperModal from './modal/HelperModal';
import NotAWordModal from './modal/NotAWordModal';
import { LetterContextProvider } from './store/letter-context';
import { boardDefault, getWordsSet } from './Helpers';

import './App.css';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, currPos: 0 });
  const [newWordsSet, setNewWordsSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState('');
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedRight: false,
  });
  const [modalActive, setModalActive] = useState(false);
  const [notAWord, setNotAWord] = useState(false);
  const [theme, setTheme] = useState({ theme: 'light', switchOn: false });

  useEffect(() => {
    getWordsSet().then((words) => {
      setNewWordsSet(words.wordsSet);
      setCorrectWord(words.todaysWord);
    });
    const data = window.localStorage.getItem('WORDLE_THEME');
    if (data !== null) setTheme(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('WORDLE_THEME', JSON.stringify(theme));
  }, [theme]);

  const onSelectLetter = (keyVal) => {
    if (currAttempt.currPos > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.currPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, currPos: currAttempt.currPos + 1 });
  };

  const onEnter = () => {
    if (currAttempt.currPos !== 5) return;

    let currWord = '';
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }

    if (newWordsSet.has(currWord)) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, currPos: 0 });
    } else {
      setNotAWord(true);
      setTimeout(() => {
        setNotAWord(false);
      }, 1200);
      return;
    }

    if (currWord === correctWord) {
      setGameOver({ gameOver: true, guessedRight: true });
    } else if (currAttempt.attempt === 5)
      setGameOver({ gameOver: true, guessedRight: false });
  };

  const onDelete = () => {
    if (currAttempt.currPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.currPos - 1] = '';
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, currPos: currAttempt.currPos - 1 });
  };

  const themeToggle = () => {
    setTheme((curr) => {
      if (curr.theme === 'light' && curr.switchOn === false) {
        return { theme: 'dark', switchOn: true };
      } else {
        return { theme: 'light', switchOn: false };
      }
    });
  };

  const providerValues = {
    board,
    setBoard,
    currAttempt,
    setCurrAttempt,
    gameOver,
    setGameOver,
    onSelectLetter,
    onDelete,
    onEnter,
    correctWord,
    modalActive,
    setModalActive,
    notAWord,
    setNotAWord,
    theme,
    themeToggle,
  };

  return (
    <AppContext.Provider value={providerValues}>
      <div className='App' id={theme.theme}>
        <Nav />
        <LetterContextProvider>
          <div className='game'>
            <Board />
            {gameOver.gameOver ? <GameOver /> : <Keyboard />}
          </div>
        </LetterContextProvider>
        {notAWord && <NotAWordModal />}
        <HelperModal />
      </div>
    </AppContext.Provider>
  );
}

export default App;
