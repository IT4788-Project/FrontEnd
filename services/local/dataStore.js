/*
    This module contains functions to interact with the local data store
    Use LocalStorage (react native)
*/

import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveUserToLocal = async (username, password, token) => {
    const user = {
        'email': String(username),
        'password': String(password),
        'token': String(token)
    }
    // clear before save
    await AsyncStorage.removeItem('user');
    await AsyncStorage.setItem('user', JSON.stringify(user));
}

