export const groupBy = () => {
  //groupBy object method - Allows us to group the array of objects based on a given callback function
  const superheroes = [
    { name: 'Batman', id: 9801 },
    { name: 'Superman', id: 9804 },
    { name: 'Flash', id: 9802 },
    { name: 'Annans', id: 9803 },
  ];

  const groupedById = Object.groupBy(superheroes, (superhero) => superhero.id);
  console.log('Item grouped by id:', groupedById);
};
