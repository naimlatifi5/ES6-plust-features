import React from 'react';
import { flatAndFlatMap } from './flatAndFlatMap';
import { objectFromEntries } from './ObjectFromEntries';
import { trimStartTrimEnd } from './trimStartTrimEnd';

const ES10 = () => {
  flatAndFlatMap();
  objectFromEntries();
  trimStartTrimEnd();
  return (
    <>
      ES10 features
      <ul>
        <li>Array.prototype flat flatMap</li>
        <li>Object.fromEntries()</li>
        <li>String.prototype.trimStart()</li>
        <li>String.prototype.trimEnd()</li>
      </ul>
    </>
  );
};

export default ES10;
