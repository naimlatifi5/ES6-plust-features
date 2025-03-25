import * as helpers from './helpers/helpers_es6.js';
import { taxRate, helloWorld } from './helpers/helpers_es6.js';
// // we can rename the exports functions like
import { helloWorld as myHelloWorld } from './helpers/helpers_es6.js';
import squareNumber from './helpers/default_export.js';

export const modules = () => {
  //var nameSpace = nameSpace || {};
  /********************************************
   *        Modules                            *
   *                                           *
   ********************************************/
  //console.log("*************import modules ***********");
  // namespacing in ES5
  // problem with namepsace is name collision and security concersn
  // nameSpace.module1 = function () {
  //   console.log("first module")
  // };
  // console.log(nameSpace);
  // console.log(nameSpace.module1);
  // import only two bindings
  console.log('============ ES6 modules ============');
  console.log('couponCodes example imported here ', taxRate);
  console.log(helloWorld());

  // // we can also import the complete module
  console.log(helpers);

  console.log(myHelloWorld());

  // importing default function

  console.log('My square number is ' + squareNumber(5));
};
