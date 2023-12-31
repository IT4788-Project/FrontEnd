import { fetchData } from "./base";

export const getAllDishCategory = async (token) => {
    try {
        const response = await fetchData(`api/dishCategories`, {
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
};