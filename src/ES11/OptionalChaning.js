export const optionalChaining = () => {
  const user = {
    name: 'Superman',
    age: 22,
    address: {
      street: 'Söderberga',
      number: '33',
    },
  };
  //  Optional Chaining (?.) -  If any part of the chain is null or undefined, it short-circuits and returns undefined without throwing an error.
  console.log('User education', user.education?.university); // cannot read property unversity of undefined
};
