export const flatAndFlatMap = () => {
  //The flat() method enables you to easily concatenate all sub-array elements of an array

  const arr = [10, [20, [30]]];
  console.log(arr.flat()); // => [10, 20, [30]]
  console.log(arr.flat(1)); // => [10, 20, [30]]
  console.log(arr.flat(2)); // => [10, 20, 30]
};
