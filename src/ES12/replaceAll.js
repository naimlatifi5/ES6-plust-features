export const replaceAll = () => {
  // currently js has a method of replace to replace a string  with another string

  const str = 'HIQS to be best HIQS';
  const newStr = str.replace('HIQS', 'HIQ');
  console.log('what is first new string', `****${newStr}***`);

  // to fix this we will use a regex
  const str1 = 'HIQS to be best HIQS';
  const newStr1 = str1.replace(/HIQS/g, 'HIQ');
  console.log('what is first new string with regex', `****${newStr1}***`);

  // but now with ES12 we can use prototype method replaceAll()
  // replaceAll() - replacing all occurrences of a substring in a string

  const str2 = 'HIQS to be best HIQS';
  const newStr2 = str2.replaceAll('HIQS', 'HIQ');
  console.log('String with replace all', `****${newStr2}***`);

  let myString = 'This is interesting book that contains interesting examples';
  let strReplaceAll = myString.replaceAll('interesting', 'Javascript');
  console.log(strReplaceAll); // This is Javascript book that contains JavaScript examples
};
