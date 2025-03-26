import { arrayAt } from './arrayAt.js';
// import { awaitTopLevel } from './awaitTopLevel.mjs';

const ES13 = () => {
  //awaitTopLevel();
  arrayAt();
  return (
    <div>
      <h2>New features of ES13</h2>
      <ul>
        <li>Top-level await</li>
        <li>Array at() method </li>
        <li>Private Class Fields and Methods</li>
        <li>Object.hasOwn Method</li>
        <li>RegExp match indices</li>
      </ul>
    </div>
  );
};

export default ES13;
