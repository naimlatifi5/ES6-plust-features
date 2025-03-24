import { awaitTopLevel } from './awaitTopLevel.mjs';

const ES13 = () => {
  awaitTopLevel();
  return (
    <div>
      New features of ES13
      <ul>
        <li>Top-level await</li>
        <li>Private Class Fields and Methods</li>
        <li>at() method </li>
        <li>Object.hasOwn Method</li>
        <li>RegExp match indices</li>
      </ul>
    </div>
  );
};

export default ES13;
