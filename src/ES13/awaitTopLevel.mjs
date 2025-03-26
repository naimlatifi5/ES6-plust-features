import React from 'react';
import axios from 'axios';
const BASE_URL = 'https://jsonplaceholder.typicode.com/';

const fetchData = async (term = 'posts') => {
  try {
    const response = await axios.get(`${BASE_URL}${term}`);
    return response?.data;
  } catch {
    console.error('Error fetching data');
  } finally {
    console.log('Finally block');
  }
};
// Top-Level await - Allows the use of await at the top level of modules without needing to wrap it in an async function
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
