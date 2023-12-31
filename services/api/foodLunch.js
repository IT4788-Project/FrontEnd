import { fetchData } from "./base";

const addFoodLunch = async (data, token) => {
    try {
        console.log(data);
        const response = await fetchData(`api/food_lunch/${data.lunchId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
        });
        return response;
    } catch (error) {
        throw error;
    }
    }

export { addFoodLunch as addFL };