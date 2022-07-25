import React, { createContext, useReducer } from 'react';

const LetterContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'absentLetter':
      return { ...state, absent: [...state.absent, action.payload] };
    case 'presentLetter':
      return { ...state, present: [...state.present, action.payload] };
    case 'correctLetter':
      return { ...state, correct: [...state.correct, action.payload] };
    default:
      return state;
  }
};

const LetterContextProvider = ({ children }) => {
  const [letterCondition, dispatchLetterCondition] = useReducer(reducer, {
    absent: [],
    present: [],
    correct: [],
  });

  return (
    <LetterContext.Provider
      value={{ letterCondition, dispatchLetterCondition }}
    >
      {children}
    </LetterContext.Provider>
  );
};

export { LetterContext, LetterContextProvider };
