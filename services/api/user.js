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