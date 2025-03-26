export const arrayToReverse = () => {
  //  Array.prototype.toReversed() - returns a new array with the elements in reversed order, without modifying the original array.
  const superheros = ['Superman', 'Batman', 'Flash', 'Annans'];
  const reversedSuperheros = superheros.toReversed();
  console.log('Reversed', reversedSuperheros); // [ 'Flash', 'Batman', 'Superman' ]
  console.log('Origintal', superheros); // Original array: [ 'Superman', 'Batman', 'Flash' ]
};
