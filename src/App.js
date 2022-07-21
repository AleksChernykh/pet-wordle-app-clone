import { createContext, useEffect, useState } from 'react';

import Board from './components/Board';
import Keyboard from './components/Keyboard';
import GameOver from './components/GameOver';
import { boardDefault, getWordsSet } from './Helpers';

import './App.css';
import Nav from './components/Nav';
import Modal from './components/modal/Modal';

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

  useEffect(() => {
    getWordsSet().then((words) => {
      setNewWordsSet(words.wordsSet);
      setCorrectWord(words.todaysWord);
    });
  }, []);

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
      alert('Word does not Exist');
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
  };

  return (
    <div className='App'>
      <AppContext.Provider value={providerValues}>
        <Nav />
        <div className='game'>
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
        <Modal />
      </AppContext.Provider>
    </div>
  );
}

export default App;
