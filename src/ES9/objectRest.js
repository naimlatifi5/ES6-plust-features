export const objectRest = () => {
  let { fname, lname, ...rest } = {
    fname: 'Hemanth',
    lname: 'HM',
    location: 'Earth',
    type: 'Human',
  };
  console.log('what is fname', fname);
  console.log('what is lname', lname);
  console.log('what is rest', rest);
};
