export const asyncAwait = async () => {
  try {
    const response = await fetch('someUrl');
    return response.json();
  } catch (error) {
    console.log('Error occured', error);
  }
};
