export const optionalChaining = () => {
  const user = {
    name: 'Superman',
    age: 22,
    address: {
      street: 'Söderberga',
      number: '33',
    },
  };
  console.log('User education', user.education?.university); // cannot read property unversity of undefined
};
