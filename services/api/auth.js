import { fetchData } from './base';

function catchError( error ){

  console.log( error );

}

export const logIn = async (username, password) => {
  try {
    const response = await fetchData('api/auths/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: String(username),
        password: String(password),
      }),
    })
    return response;
  } catch (error) {
    throw error;
  }
}

export const test = async () => {
  const response = await fetchData('api/users', {
    method: 'GET',
  });
  return response;
}