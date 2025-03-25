export const asyncAwait = async () => {
  const response = await fetch('someUrl');
  return response.json();
};
