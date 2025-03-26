export const arrayToSpliced = () => {
  // Array.prototype.toSpliced() - returns a new array with elements removed and/or added, without mutating the original array
  const superheros = ['Superman', 'Batman', 'Flash', 'Annans'];
  const splicedSuperheros = superheros.toSpliced(1, 1, 'Aquaman');
  console.log('Tospliced', splicedSuperheros); // [ 'Superman', 'Aquaman', 'Flash' ]
  console.log('original', superheros); // Original array: [ 'Superman', 'Batman', 'Flash' ]

  // Example 2 pure javascript, modifying the original array
  const months = ['Jan', 'March', 'April', 'June'];
  months.splice(1, 0, 'Feb'); // start at index 1 and remove 0 elements, then add 'Feb'
  console.log(months);
};
