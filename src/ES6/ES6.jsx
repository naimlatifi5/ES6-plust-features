import React from 'react';
//import './classes.js';
import { arrowFunction } from './arrowFunction.js';
import { desctruction } from './destructing.js';
import { modules } from './modules.js';
import { objectLiterals } from './objectLiterals.js';
import { sayHelloToRestAndSpread } from './sayHelloToRestAndSpread.js';
import { templateLiterals } from './templateLiterals.js';
import { promises } from './promises.js';
import { variableScopingLetConst } from './variableScopingLetConst.js';

const ES6 = () => {
  console.log('====== Variable scoping ======'); // Variable scoping
  variableScopingLetConst();

  // console.log('====== Template literals ======'); // Template literals
  // templateLiterals();

  // console.log('====== Object literal ======'); // Object literal
  // objectLiterals();

  // console.log('====== Say hello to spread and rest ======'); // Say hello to spread and rest
  // sayHelloToRestAndSpread();

  // console.log('====== Destructing ======'); // Destructing
  // desctruction();

  // console.log('====== Arrow Function ======'); // Arrow Function
  // arrowFunction();

  // console.log('====== Modules ======'); // Modules
  // modules();

  // console.log('====== Promises ======'); //Promises
  // promises();

  return (
    <>
      ES6 New features
      <ul>
        <li>Let and const</li>
        <li>Template literals</li>
        <li>Object literals</li>
        <li>Arrow function</li>
        <li>Destructuring Assignment</li>
        <li>Rest and Spread Operators</li>
        <li>Classes: Cleaner Object-Oriented Programming</li>
        <li>Modules: Native Import and Export</li>
        <li>Promises: Simplified Asynchronous Programming</li>
      </ul>
    </>
  );
};

export default ES6;
