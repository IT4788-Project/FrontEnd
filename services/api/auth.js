import { fetchData } from './base';

export const logIn = async (username, password) => {
  const response = await fetchData('/api/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  return response;
}

export const test = async () => {
  const response = await fetchData('api/users', {
    method: 'GET',
  });
  return response;
}