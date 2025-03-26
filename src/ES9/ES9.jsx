import React from 'react';
import { objectRest } from './objectRest';
import { objectSpread } from './objectSpread';
import { testFinally } from './promiseFinally';

const ES9 = () => {
  objectRest();
  testFinally()
    .then(() => console.debug('resolved'))
    .finally(() => console.debug('finally'));
  objectSpread();

  return (
    <>
      ES9 new features 2018
      <ul>
        <li>Object rest properties</li>
        <li>Object spread properties</li>
        <li>Promise.prototype.finally()</li>
      </ul>
    </>
  );
};

export default ES9;
