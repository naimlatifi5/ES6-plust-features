// need to use babel plugin https://babeljs.io/docs/en/babel-plugin-proposal-logical-assignment-operators
export const logicalAssignmentOperator = () => {
  let x = 1;
  let y = 2;
  //x &&= y; // logical assignment operator
  console.log(x); // 2

  // this is similar to this
  if (x) {
    x = y;
  }

  var a; // null or undefined
  var b = a ?? 5; // the right hand side is evaluated and set to 5 for a
  console.log('what is b', b);
};
