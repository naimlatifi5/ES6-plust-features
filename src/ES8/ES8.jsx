import React from 'react';
import { asyncAwait } from './asyncAwait.js';
import { paddingStrings } from './padString.js';
const ES8 = () => {
  paddingStrings();
  asyncAwait();
  objectFromEntries();
  return (
    <>
      <h1>ES8 new features (2017)</h1>
      <ul>
        <li>Async/await </li>
        <li>Object entries</li>
        <li>String padding</li>
      </ul>
    </>
  );
};

export default ES8;
