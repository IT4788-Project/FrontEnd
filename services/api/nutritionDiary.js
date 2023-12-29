import { fetchData } from "./base";

export const addNewNutritionDiary = async (data, token) => {
    try {
        const response = await fetchData('api/nutritionDiaries', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        })
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
}

export const findOneNutritionDiary = async (data, token) => {
    try {
        const response = await fetchData('api/nutritionDiaries/getOne', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        })
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
}