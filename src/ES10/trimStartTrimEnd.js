export const trimStartTrimEnd = () => {
  const str = '   string   ';

  // es2019
  console.log(str.trimStart()); // => "string   "
  console.log(str.trimEnd()); // => "   string"

  // the same as
  console.log(str.trimLeft()); // => "string   "
  console.log(str.trimRight()); // => "   string"
};
