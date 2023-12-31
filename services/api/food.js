import { fetchData } from "./base";

export const getByTag = async (data, token) => {
    try {
        const response = await fetchData(`api/foods/tag/${data.tagId}`, {
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

export const getAll = async (token) => {
    try {
        const response = await fetchData(`api/foods`, {
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