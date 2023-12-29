import { fetchData } from './base';

export const getAllExercises = async (data, token) => {
  try {
    const response = await fetchData(`api/exercises/${data.nutritionDiaryId}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
      }
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export const getOneExercise = async (data, token) => {
    try {
        const response = await fetchData(`api/exercises/${data.nutritionDiaryId}/${data.exerciseId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return response;
    } catch (error) {
        throw error;
    }
}

export const addOneExercise = async (data, token) => {
    try {
        const response = await fetchData(`api/exercises/${data.nutritionDiaryId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        return response;
    } catch (error) {
        throw error;
    }
}

export const updateOneExercise = async (data, token) => {
    try {
        const response = await fetchData(`api/exercises/${data.nutritionDiaryId}/${data.exerciseId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        return response;
    } catch (error) {
        throw error;
    }
}

export const deleteOneExercise = async (data, token) => {
    try {
        const response = await fetchData(`api/exercises/${data.nutritionDiaryId}/${data.exerciseId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        throw error;
    }
}