import React from 'react';
import { paddingStrings } from './padString.js';
const ES8 = () => {
  paddingStrings();
  return (
    <div>
      <ul>
        <li>String.prototype.padStart()</li>
        <li>String.prototype.padEnd()</li>
      </ul>
      <h2>String.prototype.padStart()</h2>
    </div>
  );
};

export default ES8;
