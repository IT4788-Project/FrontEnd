import {fetchData} from './base'

export const follow = async (data, token) => {
    try {
        const targetId = data.targetId
        const response = await fetchData(`api/users/follow/${targetId}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        return response;
    } catch (e) {
        throw e; 
    }
}

export const unfollow = async (data, token) => {
    try {
        const targetId = data.targetId
        const response = await fetchData(`api/users/unfollow/${targetId}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        return response;
    } catch (e) {
        throw e; 
    }
}

export const createPost = async (data, token) => {
    try {
        const response = await fetchData(`api/posts`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        return response;
    } catch (e) {
        throw e; 
    }
}

export const reactPost = async (data, token) => {
    const postId = data.postId
    try {
        const response = await fetchData(`api/posts/reaction/${postId}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        return response
    } catch (e) {
        throw e; 
    }
}

export const commentPost = async (data, token) => {
    const targetId = data.targetId
    try {
        const response = await fetchData(`api/posts/comment/${targetId}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
    return response;
    } catch (e) {
        throw e; 
    }
}

export const getDetailPost = async (data, token) => {
    const postId = data.postId
    try {
        const response = await fetchData(`api/posts/${postId}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        return response;
    } catch (e) {
        throw e; 
    }
}

export const getListPost = async (token) => {
    try {
        const response = await fetchData(`api/posts`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        return response;
    } catch (e) {
        throw e; 
    }
}

export const getFollower = async (token) => {
    try {
        const response = fetchData('api/users/follows', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        return response;
    } catch (e) {
        throw e;
    }
}