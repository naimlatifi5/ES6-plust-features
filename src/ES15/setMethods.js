export const setMethods = () => {
  // Set methods - union, intersection and difference
  const superheroesSet = new Set(['Batman', 'Superman', 'Flash', 'James']);
  const humansSet = new Set(['Bruce', 'Clark', 'Barry', 'James']);

  const union = superheroesSet.union(humansSet); // contains all the elements from both sets
  const intersection = superheroesSet.intersection(humansSet); // contains the common elements in both sets
  const difference = superheroesSet.difference(humansSet); // contains the elements that are in superheroesSet but not in humansSet

  console.log('Union - ', union);
  console.log('Intersection - ', intersection);
  console.log('Difference - ', difference);
};
