import React from 'react';
import axios from 'axios';
const BASE_URL = 'https://jsonplaceholder.typicode.com/';
const fetchData = async (term = 'posts') => {
  const response = await axios.get(`${BASE_URL}${term}`);
  return response?.data;
};

await Promise.resolve(console.log('Inkoop'));
const getPosts = async () => {
  const results = await fetchData();
  console.log('Print all the posts', results);
};

export const awaitTopLevel = () => {
  console.log('======= Await at top level ========');
  getPosts();
  console.log('End of the function');
};
