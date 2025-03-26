//https://nitayneeman.com/blog/introducing-string-matchall-method-in-ecmascript-2020/
export const stringMatchAll = () => {
  // #5 - matchAll() - Returns an iterator for all matches in a string
  const regex = /man+/g;
  const str = 'Superman Batman Flash';

  const matches = str.matchAll(regex);

  for (const match of matches) {
    console.log(match[0]); // man man
    console.log(match);
    console.log(match.input); // Superman Batman Flash
  }
  // const regexp = /t(e)(st(\d?))/g;
  // const str = 'test1test2';
  // const resultsArr = [...str.matchAll(regexp)]; // convert iterator to an array

  // console.log(resultsArr[0]); // ["test1", "e", "st1", "1"]
  // console.log(resultsArr[0]); // ["test2", "e", "st2", "2"]
};
