import { fetchData } from "./base";

export const createUser = async (username, password, email) => {
    try {
        const response = await fetchData("api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: String(username),
                password: String(password),
                email: String(email),
            }),
        });
        return response;
    } catch (error) {
        throw error;
    }
}

export const getByName = async (data, token) => {
    try {
        const response = await fetchData(`api/users/findUser/name`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data),
        });
        return response;
    } catch (error) {
        throw error;
    }
}

export const updateImage = async (data, token) => {
    try {
        const response = await fetchData(`api/users/image/update`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data),
        });
        return response;
    } catch (error) {
        throw error;
    }
}

export const getUserDisplayInfor = async (token) => {
    try {
        const response = await fetchData(`api/users/about/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        });
        return response;
    } catch (error) {
        throw error;
    }
}