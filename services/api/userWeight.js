import { fetchData } from "./base";

export const getUserWeightHistory = async (token) => {
  try {
    const response = await fetchData(`api/userWeights`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export const updateCurrentUserWeight = async (data, token) => {
  try {
      const response = await fetchData(`api/userWeights`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(data)
      })
      return response;
  } catch (error) {
      throw error;
  }
}