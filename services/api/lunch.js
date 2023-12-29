import { fetchData } from "./base";

export const getAll = async (data, token) => {
    try {
        const response = await fetchData(`api/lunch/${data.nutritionDiaryId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        });
        return response;
    } catch (error) {
        throw error;
    }
};

export const getOne = async (data, token) => {
    try {
        const response = await fetchData(`api/foods/${data.nutritionDiaryId}/${data.lunchId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        });
        return response;
    } catch (error) {
        throw error;
    }
}

export const addOne = async (data, token) => {
    try {
        const response = await fetchData(`api/foods/${data.nutritionDiaryId}`, {
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

export const updateOne = async (data, token) => {
    try {
        const response = await fetchData(`api/foods/${data.nutritionDiaryId}/${data.lunchId}`, {
        method: "PUT",
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

export const deleteOne = async (data, token) => {
    try {
        const response = await fetchData(`api/foods/${data.nutritionDiaryId}/${data.lunchId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        });
        return response;
    } catch (error) {
        throw error;
    }
}