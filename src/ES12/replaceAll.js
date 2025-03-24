export const replaceAll = () => {
  // currently js has a method of replace to replace a string  with another string

  const str = 'HIQS to be best HIQS';
  const newStr = str.replace('HIQS', 'HIQ');
  console.log(newStr); // "Frontbencher sits at the Back" --- this replace only the first occurrance Back-bancher and not Back at the end of string

  // to fix this we will use a regex

  const str1 = 'HIQS to be best HIQS';
  const newStr1 = str1.replace(/HIQS/g, 'HIQ');
  console.log(newStr1); // "Frontbencher sits at the Front"

  // but now with ES12 we can use prototype method replaceAll()

  const str2 = 'HIQS to be best HIQS';
  const newStr2 = str2.replaceAll('HIQS', 'HIQ');
  console.log(newStr2); // "Frontbencher sits at the Front"

  let myString = 'This is interesting book that contains interesting examples';
  let strReplaceAll = myString.replaceAll('interesting', 'Javascript');
  console.log(strReplaceAll); // This is Javascript book that contains JavaScript examples
};
