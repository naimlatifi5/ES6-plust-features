export const arrayToSorted = () => {
  //  Array.prototype.toSorted() - creates a sorted copy of an array without mutating the original array.
  const superheros = ['Superman', 'Batman', 'Flash', 'Annans'];
  const sortedSuperheros = superheros.toSorted();
  console.log('toSorted', sortedSuperheros); // [ 'Batman', 'Flash', 'Superman' ]
  console.log('Original array', superheros); // Original array: [ 'Superman', 'Batman', 'Flash' ]
};
