import { fetchData } from "./base";

export const getAll = async (token) => {
    try {
        const response = await fetchData(`api/healthyGoals`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
        return response;
    } catch (error) {
        throw error;
    }
}

export const getOne = async (data, token) => {
    try {
        const url = `api/healthyGoals/`+data.healthyGoalId;
        const response = await fetchData(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
        return response;
    } catch (error) {
        throw error;
    }
}

export const addGoal = async (data, token) => {
    try {
        const response = await fetchData(`api/healthyGoals`, {
            method: 'POST',
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

export const deleteGoal = async (data, token) => {
    try {
        const response = await fetchData(`api/healthyGoals/${data.healthyGoalId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
        return response;
    } catch (error) {
        throw error;
    }
}

export const updateGoal = async (data, token) => {
    try {
        const {healthyGoalId, ...dataBody} = data;
        const response = await fetchData(`api/healthyGoals/${data.healthyGoalId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(dataBody)
        })
        return response;
    } catch (error) {
        throw error;
    }
}