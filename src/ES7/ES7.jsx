import React from 'react';
import { mathPower, mathPowerES7 } from './exponantionOperator.js';
import { es5, es7 } from './arrayPrototypeIncludes.js';

const ES7 = () => {
  // console.log('Exponatation operator with es5', mathPower);
  // console.log('Exponatation operator with es7', mathPowerES7);

  console.log('Array.prototype.includes() with es5', es5());
  console.log('Array.prototype.includes() with es7', es7());

  return (
    <div>
      <ul>
        <li>Array.prototypes.includes()</li>
        <li>Exponetation operator</li>
      </ul>
    </div>
  );
};

export default ES7;
