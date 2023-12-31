import { fetchData } from "./base";

export const getDishByCategory = async (data, token) => {
    try {
        const response = await fetchData(`api/dishes/dishCategory/${data.dishCategoryId}`, {
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

export const getDishByTag = async (data, token) => {
    try {
        const response = await fetchData(`api/dishes/tag/${data.tagId}`, {
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

export const getOneDish = async (data, token) => {
    try {
        const response = await fetchData(`api/dishes/${data.dishId}`, {
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

export const getRandomDish = async (token) => {
    try {
        const response = await fetchData(`/api/dishes`, {
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