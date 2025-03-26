export const objectFromEntries = () => {
  const person = {
    name: 'John',
    age: 30,
  };
  // Object.entries() - Returns an array person object’s
  console.log(Object.entries(person));
  // [["name", "John"], ["age", 30]]
  // Object.values() - Returns an array of a given object’s own enumerable property values.
  console.log(Object.values(person));
  // ["John", 30]
};
