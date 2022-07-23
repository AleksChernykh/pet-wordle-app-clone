import { createContext, useEffect, useState } from 'react';

import Board from './components/Board';
import Keyboard from './components/Keyboard';
import GameOver from './components/GameOver';
import Nav from './components/Nav';
import HelperModal from './components/modal/HelperModal';
import NotAWordModal from './components/modal/NotAWordModal';
import { boardDefault, getWordsSet } from './Helpers';

import './App.css';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, currPos: 0 });
  const [newWordsSet, setNewWordsSet] = useState(new Set());
  const [absentLetters, setAbsentLetters] = useState([]);
  const [presentLetters, setPresentLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [correctWord, setCorrectWord] = useState('');
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedRight: false,
  });
  const [modalActive, setModalActive] = useState(false);
  const [notAWord, setNotAWord] = useState(false);
  const [theme, setTheme] = useState('light');
  const [switchChecked, setSwitchChecked] = useState(false);

  useEffect(() => {
    getWordsSet().then((words) => {
      setNewWordsSet(words.wordsSet);
      setCorrectWord(words.todaysWord);
    });
  }, []);

  useEffect(() => {
    const themeData = window.localStorage.getItem('WORDLE_THEME');
    if (themeData !== null) setTheme(JSON.parse(themeData));
    const switchData = window.localStorage.getItem('WORDLE_SWITCH_CHECKED');
    if (switchData !== null) setSwitchChecked(JSON.parse(switchData));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('WORDLE_THEME', JSON.stringify(theme));
    window.localStorage.setItem(
      'WORDLE_SWITCH_CHECKED',
      JSON.stringify(switchChecked)
    );
  }, [theme, switchChecked]);

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
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    setSwitchChecked((curr) => (curr === true ? false : true));
  };

  const providerValues = {
    board,
    setBoard,
    currAttempt,
    setCurrAttempt,
    absentLetters,
    setAbsentLetters,
    presentLetters,
    setPresentLetters,
    correctLetters,
    setCorrectLetters,
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
    switchChecked,
  };

  return (
    <AppContext.Provider value={providerValues}>
      <div className='App' id={theme}>
        <Nav />
        <div className='game'>
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
        {notAWord && <NotAWordModal />}
        <HelperModal />
      </div>
    </AppContext.Provider>
  );
}

export default App;
