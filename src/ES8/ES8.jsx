import React from 'react';
import { paddingStrings } from './padString.js';
const ES8 = () => {
  paddingStrings();
  return (
    <>
      <h1>ES8 new features (2017)</h1>
      <ul>
        <li>Async/await </li>
        <li>Object entries</li>
        <li>String.prototype.padStart()</li>
        <li>String.prototype.padEnd()</li>
      </ul>
      <h2>String.prototype.padStart()</h2>
    </>
  );
};

export default ES8;
