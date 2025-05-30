export const desctruction = () => {
  /********************************************
   *   Destructing objects ES6                 *
   *                                           *
   **********************************************/

  console.log('================== Destructing objects ES6 =================');
  const personObject = {
    name: ' Naim',
    lastName: 'Latifi',
    education: {
      university: 'Linne University',
    },
  };

  // accessing property on objecst with destructing ES6
  let { name, lastName } = personObject;

  // name , lastName must match in personObject when destructing
  // what ES6 does here is that it assign name and lastName as variables as :
  // let name = personObject.name;
  // let lastName = personObject.lastName;
  // console.log(name1, + lastName1);
  console.log('What is my name ', name);
  console.log(lastName);

  // if there is no property on object that undefined is returned
  let { birthday } = personObject;
  console.log('Property does not exist we get undefined', birthday);
  // we can reasign the name of the key property
  let { name: anotherName } = personObject;
  console.log('Reasigned the name of the property', anotherName);
  // we can add parameters as in function for destructing object

  let { city = 'Stockholm' } = personObject;
  console.log('Added city', city);
  // destructing in the nested object
  let {
    education: { university },
  } = personObject;
  console.log('Destructing in nested object', university);

  console.log('========= ES5 example to compare with destructing ========');
  // ES5
  const name1 = personObject.name;
  const lastName1 = personObject.lastName;
  console.log(name1);
  console.log(lastName1);

  console.log('================ Destructing arrays in ES6 ==========');
  // similar as destructing objects but we use square brackes instead []
  let myArrayData = ['1', '2', '3'];
  let [one] = myArrayData;
  console.log('Element pulled away', one);
  console.log('What is my array', myArrayData);

  // get the rest of parameters use spread operator with ...rest
  let [firstElementInArray, ...rest] = myArrayData;
  console.log('First element on array ', firstElementInArray);
  console.log('The rest get as array- ', rest); // [2,3]

  // if we are interested to destruct only the particular item from array then we can do like this
  // comma sepeartor is important to ignore all other items we are not interested for
  let [, , bringMeThirdElement] = myArrayData;
  console.log('Third element from array ', bringMeThirdElement);

  console.log('============ Destructing parameters ES5 ===========');
  // ES5
  function destructParams(obj) {
    let myName = obj.name; // duplicate  code obj,let
    let myLastName = obj.lastName; // duplicate code obj, let
    console.log('ES5-My name is: ', myName, 'And lastName is: ', myLastName);
  }
  destructParams(personObject);

  console.log('============ Destructing parameters ES6');
  // ES6
  function destructParamsES6({ name, lastName }) {
    // name and lastName must be mapped to the object property
    // no code duplication with destructing
    console.log('ES6- My name is: ', name, 'And lastName is: ', lastName);
  }
  destructParamsES6(personObject);

  console.log('===========Swiping files ES5 ==============');
  // swiping variables ES5
  let a = 1;
  let b = 2;
  let temp;

  temp = a;
  a = b;
  b = temp;

  console.log('What is a ', a);
  console.log('What is b ', b);

  console.log('========== Swiping files with ES6 ========== ');
  // swiping with ES6
  let c = 3;
  let d = 4;
  [c, d] = [d, c];
  console.log('What is c ', c);
  console.log('What is d ', d);
};
