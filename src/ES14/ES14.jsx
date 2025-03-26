import React from 'react';
import { arrayToReverse } from './arrayToReverse';
import { arrayToSorted } from './arrayToSorted';
import { arrayToSpliced } from './arrayToSpliced';
const ES14 = () => {
  //arrayToSorted();
  // arrayToReverse();
  arrayToSpliced();
  return (
    <>
      <h2>New features of ES14 2023</h2>
      <ul>
        <li>Array.prototype.toSorted </li>
        <li>Array.prototype.toReversed() </li>
        <li>Array.prototype.toSpliced() </li>
        <li>Symbol.prototype.description </li>
      </ul>
    </>
  );
};

export default ES14;
