import { fetchData } from './base';

export const addPersonalInfor = async (data, token) => {
    try {
        const response = await fetchData('api/personalInfos', {
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

export const getPersonalInfor = async (token) => {
    try {
        const response = await fetchData(`api/personalInfos`, {
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


export const changeInformation = async (data, token) => {
    try {
        const response = await fetchData('api/personalInfos', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        })
        return response;
    } catch (error) {
        throw error;
    }
}

// need later double check with backend
export const deletePersonalInfor = async (token) => {
    try {
        const response = await fetchData('api/personalInfos', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
        return response;
    } catch (error) {
        throw error;
    }
}