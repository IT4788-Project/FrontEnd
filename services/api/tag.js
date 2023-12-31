import { fetchData } from "./base";

export const getByName = async (data, token) => {
    try {
        const response = await fetchData(`api/tags/tagname`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        });
        return response;
    } catch (error) {
        throw error;
    }
}

export const getAll = async (token) => {
    try {
        const response = await fetchData(`api/tags`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        });
        return response;
    } catch (error) {
        throw error;
    }
}