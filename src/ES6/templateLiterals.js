export const templateLiterals = () => {
  let group = 'HIQ tech meetup';
  let greeting = 'Welcome to ' + group + '\n' + 'with new features in ES+';

  let greeting1 = `Welcome to ${group}
        with new features in ES6`;

  console.log(greeting);
  console.log(greeting1);

  /********************************************
   *        Default parameters in ES6          *
   *                                           *
   **********************************************/

  console.log('*********** Template literals ************');
  let myName = 'Naim';
  console.log(`Literal templates-Hello \`there\` template and ${myName} `);

  //ES6
  const myObectTemplate = {
    learn: 'Javascript',
    hiCollege: 'HIQ',
  };

  console.log('============= Template created with ES6 ==============');

  let myMessage = `Hello I am here because I want to learn ${myObectTemplate.learn}
 from HiCollege here at ${myObectTemplate.hiCollege}`;
  console.log(myMessage);

  // ES5
  console.log('==========Template created with ES5 =========== ');
  let myMessageES5 =
    'Hello I am here because I want to learn ' +
    myObectTemplate.learn +
    '\n' +
    'from HiCollege here at ' +
    myObectTemplate.hiCollege;

  console.log(myMessageES5);

  const objectArrays = [];
  const obje1 = {
    name: 'Naim',
    lastName: 'Latifi',
  };

  const obje2 = {
    name: 'George',
    lastName: 'Andersson',
  };

  objectArrays.push(obje1, obje2);
  console.log(objectArrays);

  // function with tempalte ES6
  const template = (data) => `<div>
     ${data
       .map(
         (item) => `
      <span>${item.name}</span>
      <span>${item.lastName}</span>
      `,
       )
       .join('')}
  </div>`;

  // create an div element
  var divElement = document.createElement('div');
  divElement.classList.add('template-literal-ie6');
  divElement.innerHTML = template(objectArrays);
  document.body.appendChild(divElement);
  console.log(template(objectArrays));

  // Tagged template with function string.raw
  // if we write template without String.raw and \n will return new line on template

  let myTaggedTemplate = String.raw`This is a multilne template string
   another example with tagged function \n and will not create a new line
  `;
  console.log('Tag template', myTaggedTemplate);

  function foo(strings, ...values) {
    console.log('Strings ', strings); // string value on template "hello there"
    console.log('Values', values); // placeholders used in template (description)
  }
  const myObject = {
    description: '3',
  };

  let description = myObject.descrition;
  console.log(foo`Hello there template ${description}`);

  function tags(stringValue, ...values) {
    // implementation

    console.log(stringValue);
    console.log(values);
  }

  let number1 = 3;
  let number2 = 4;
  let template2 = tags`Hello tags ${number1} ${number2}`; // numb1 and num2 are placeholder on array return from tags
  console.log(template2);
};
