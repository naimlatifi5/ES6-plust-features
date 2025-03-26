export const withES15 = () => {
  //  with() method - changes a value of a given index and could be chained with other methods like map
  const superheroes = [
    { name: 'Batman', id: 9801 },
    { name: 'Superman', id: 9804 },
    { name: 'Flash', id: 9802 },
    { name: 'Annans', id: 9803 },
  ];

  const updateAnnansWithSupergirl = superheroes.with(3, { name: 'Supergirl', id: 9805 });
  console.log('apply with() method: ', updateAnnansWithSupergirl);
};
