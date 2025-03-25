export const objectSpread = () => {
  let { fname, lname, ...rest } = {
    fname: 'Hemanth',
    lname: 'HM',
    location: 'Earth',
    type: 'Human',
  };
  let info = { fname, lname, ...rest };
  console.log('what is info', info);
};
