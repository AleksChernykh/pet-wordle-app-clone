import React, { useContext } from 'react';

import { AppContext } from '../../App';

import classes from './NotAWordModal.module.css';

const NotAWordModal = () => {
  const { theme } = useContext(AppContext);

  return (
    <div className={classes.not_word} id={classes[theme.theme]}>
      Not in word list
    </div>
  );
};

export default NotAWordModal;
