//https://nitayneeman.com/blog/introducing-string-matchall-method-in-ecmascript-2020/
export const stringMatchAll = () => {
  const regexp = /t(e)(st(\d?))/g;
  const str = 'test1test2';
  const resultsArr = [...str.matchAll(regexp)]; // convert iterator to an array

  console.log(resultsArr[0]); // ["test1", "e", "st1", "1"]
  console.log(resultsArr[0]); // ["test2", "e", "st2", "2"]
};
