export const arrayAt = () => {
  const superheroes = ['Batman', 'Superman', 'Spiderman', 'Ironman', 'Captain America'];
  console.log(superheroes.at(1)); // Superman (from the start)
  console.log(superheroes.at(-1)); // Captain America (from the end of array)
  console.log(superheroes.at(-2)); // Ironman (from the end of array)
};
