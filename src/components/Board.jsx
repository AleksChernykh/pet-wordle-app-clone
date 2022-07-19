import Letter from './Letter';

import '../App.css';

const Board = () => {
  return (
    <div className='board'>
      <div className='row'>
        <Letter letterPos={0} currAttempt={0} />
        <Letter letterPos={1} currAttempt={0} />
        <Letter letterPos={2} currAttempt={0} />
        <Letter letterPos={3} currAttempt={0} />
        <Letter letterPos={4} currAttempt={0} />
      </div>
      <div className='row'>
        <Letter letterPos={0} currAttempt={1} />
        <Letter letterPos={1} currAttempt={1} />
        <Letter letterPos={2} currAttempt={1} />
        <Letter letterPos={3} currAttempt={1} />
        <Letter letterPos={4} currAttempt={1} />
      </div>
      <div className='row'>
        <Letter letterPos={0} currAttempt={2} />
        <Letter letterPos={1} currAttempt={2} />
        <Letter letterPos={2} currAttempt={2} />
        <Letter letterPos={3} currAttempt={2} />
        <Letter letterPos={4} currAttempt={2} />
      </div>
      <div className='row'>
        <Letter letterPos={0} currAttempt={3} />
        <Letter letterPos={1} currAttempt={3} />
        <Letter letterPos={2} currAttempt={3} />
        <Letter letterPos={3} currAttempt={3} />
        <Letter letterPos={4} currAttempt={3} />
      </div>
      <div className='row'>
        <Letter letterPos={0} currAttempt={4} />
        <Letter letterPos={1} currAttempt={4} />
        <Letter letterPos={2} currAttempt={4} />
        <Letter letterPos={3} currAttempt={4} />
        <Letter letterPos={4} currAttempt={4} />
      </div>
      <div className='row'>
        <Letter letterPos={0} currAttempt={5} />
        <Letter letterPos={1} currAttempt={5} />
        <Letter letterPos={2} currAttempt={5} />
        <Letter letterPos={3} currAttempt={5} />
        <Letter letterPos={4} currAttempt={5} />
      </div>
    </div>
  );
};

export default Board;
