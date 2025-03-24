export const paddingStrings = () => {
  console.log('here are padding strings');
  let string = 'hello';
  console.log(string.padStart(10));
  console.log(string.padEnd(10));
  console.log(string.padStart(10, '1234567890'));
  console.log(string.padEnd(10, '1234567890'));
  console.log(string.padStart(10, 'ab'));
  console.log(string.padEnd(10, 'ab'));
  console.log(string.padStart(10, '123'));
  console.log(string.padEnd(10, '123'));
};
