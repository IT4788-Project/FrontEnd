import { fetchData } from './base';

export const addPersonalInfor = async (data, token) => {
    try {
        const response = await fetchData('api/personalInfos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            authorization: `Bearer ${token}`,
            body: JSON.stringify(data),
        })
        return response;
    } catch (error) {
        throw error;
    }
}

// data = {id: 1}
export const getPersonalInfor = async (data, token) => {
    try {
        const response = await fetchData('api/personalInfos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            authorization: `Bearer ${token}`,
            params: data
        })
        return response;
    } catch (error) {
        throw error;
    }
}