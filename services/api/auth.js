import { fetchData } from './base';

export const logIn = async (username, password) => {
  const response = await fetchData('login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  return response;
}
