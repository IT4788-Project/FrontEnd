import { fetchData } from './base';

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

export const getAllUsers = async () => {
  try {
    const response = await fetchData('api/users', {
      method: 'GET',
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export const forgotPassword = async (email) => {
  try {
    const response = await fetchData('api/auths/forgotPassword', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: String(email)
      }),
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export const checkCode = async (code, mail) => {
  try {
    const response = await fetchData('api/auths/checkCode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: String(mail),
        verificationCode: Number(code)
      }),
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export const resetPassword = async (newPassword) => {
  try {
    const response = await fetchData('api/auths/resetPassword', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        newPassword: String(newPassword)
      }),
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export const logOut = async (accessToken) => {
  try {
    const response = await fetchData('api/auths/logout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
}