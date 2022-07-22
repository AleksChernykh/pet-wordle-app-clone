import React, { useContext } from 'react';

import { AppContext } from '../../App';
import NewGameBtn from '../NewGameBtn';

import classes from './HelperModal.module.css';

const HelperModal = () => {
  const { modalActive, setModalActive, theme } = useContext(AppContext);

  const modalClasses = modalActive
    ? `${classes.modal} ${classes.active}`
    : `${classes.modal}`;

  const modalContentClasses = modalActive
    ? `${classes.modal__content} ${classes.active}`
    : `${classes.modal__content}`;

  return (
    <div
      className={modalClasses}
      id={classes[theme]}
      onClick={() => setModalActive(false)}
    >
      <div className={modalContentClasses} onClick={(e) => e.stopPropagation()}>
        <div className={classes.header}>
          <h3>HOW TO PLAY</h3>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 320 512'
            className={classes.cross}
            onClick={() => setModalActive(false)}
          >
            <path
              fill={theme === 'light' ? '#121213' : '#fff'}
              d='M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z'
            />
          </svg>
        </div>
        <p>
          Guess the <strong>WORDLE</strong> in six tries.
        </p>
        <p>
          Each guess must be a valid five-letter word. Hit the enter button to
          submit.
        </p>
        <p>
          After each guess, the color of the tiles will change to show how close
          your guess was to the word.
        </p>
        <hr />
        <strong>Examples</strong>
        <div className={classes.help__word}>
          <div className={classes.help__letter}>R</div>
          <div className={classes.help__letter}>I</div>
          <div className={classes.help__letter}>G</div>
          <div className={`${classes.help__letter} ${classes.correct}`}>H</div>
          <div className={classes.help__letter}>T</div>
          <p className={classes.help__descr}>
            The letter <strong>H</strong> is in the correct spot and is in the
            word.
          </p>
        </div>
        <div className={classes.help__word}>
          <div className={classes.help__letter}>L</div>
          <div className={`${classes.help__letter} ${classes.present}`}>U</div>
          <div className={classes.help__letter}>C</div>
          <div className={classes.help__letter}>K</div>
          <div className={classes.help__letter}>Y</div>
          <p className={classes.help__descr}>
            The letter <strong>U</strong> is in the word, but in the wrong spot.
          </p>
        </div>
        <div className={classes.help__word}>
          <div className={`${classes.help__letter} ${classes.absent}`}>M</div>
          <div className={classes.help__letter}>A</div>
          <div className={classes.help__letter}>P</div>
          <div className={classes.help__letter}>L</div>
          <div className={classes.help__letter}>E</div>
          <p className={classes.help__descr}>
            The letter <strong>M</strong> is not in the word.
          </p>
        </div>
        <hr />
        <NewGameBtn />
      </div>
    </div>
  );
};

export default HelperModal;
