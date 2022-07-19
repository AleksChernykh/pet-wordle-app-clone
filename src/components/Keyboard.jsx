import React from 'react';

import '../App.css';
import Key from './Key';

const Keyboard = () => {
  const keys1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const keys2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const keys3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

  return (
    <div className='keyboard'>
      <div className='keyboard-row'>
        {keys1.map((key) => (
          <Key keyVal={key} />
        ))}
      </div>
      <div className='keyboard-row'>
        {keys2.map((key) => (
          <Key keyVal={key} />
        ))}
      </div>
      <div className='keyboard-row'>
        <Key keyVal={'enter'} bigKey />
        {keys3.map((key) => (
          <Key keyVal={key} />
        ))}
        <Key keyVal={'delete'} bigKey />
      </div>
    </div>
  );
};

export default Keyboard;
