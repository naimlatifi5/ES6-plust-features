export const objectFromEntries = () => {
  const person = {
    name: 'John',
    age: 30,
  };

  console.log(Object.entries(person));
  // [["name", "John"], ["age", 30]]

  console.log(Object.values(person));
  // ["John", 30]
};
