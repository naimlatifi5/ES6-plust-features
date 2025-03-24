import React from 'react';
import { logicalAssignmentOperator } from './logicalAssignmentOperator';
import { numericSeperator } from './numericSeperator';
import { getName, getNamePrivate } from './privateGettersSetters';
import { replaceAll } from './replaceAll';
// import './numericSeperator.js';
// import './replaceAll.js';
// import './logicalAssignmentOperator.js';
// import './promiseAny.js';
// import './privateMethods.js';
// import './privateGettersSetters.js';
// import './weakRefs.js';
const ES12 = () => {
  logicalAssignmentOperator();

  numericSeperator();

  getName();
  getNamePrivate();

  privateMethods();

  promiseAny();

  replaceAll();

  weakRefs();

  return (
    <div>
      New features of ES12
      <ul>
        <li>Numeric separators</li>
        <li>String.prototype.replaceAll</li>
        <li>Logical assignment operators</li>
        <li>Promise.any</li>
        <li>Private class methods</li>
        <li>Private getters and setters</li>
        <li>WeakRef and Finalization Registry</li>
      </ul>
    </div>
  );
};

export default ES12;
