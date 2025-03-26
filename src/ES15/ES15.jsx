import React from 'react';
import { groupBy } from './groupBy';
import { setMethods } from './setMethods';
import { withES15 } from './with';
const ES15 = () => {
  groupBy();
  withES15();
  setMethods();
  return (
    <>
      <h2>New features of ES15 2024</h2>
      <ul>
        <li>groupBy</li>
        <li>with</li>
        <li>Set Methods (unions, intersection, differences) </li>
        <li>withResolver</li>
      </ul>
    </>
  );
};

export default ES15;
