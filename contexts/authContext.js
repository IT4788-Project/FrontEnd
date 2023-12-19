import React, { createContext, useEffect, useState, useContext } from "react";
import AsyncStorage from '@react-native-community/async-storage';

import { logIn } from "../services/api/auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // khi khởi động app -> luôn chạy check local storage
    useEffect(() => {
        // lấy user từ AsyncStorage
        const getUser = async () => {
            try {
                const user = await AsyncStorage.getItem('user');
                // nếu có userdata thì xử lý data đó
                if (user) {
                    // thử đăng nhập lại với user lấy được từ AsyncStorage
                    const response = await logIn(user.username, user.password);
                    if (response.ok) {
                        // user data có username, password, token
                        setUser(response.data);
                        setLoading(false);
                    } else {
                        // nếu đăng nhập thất bại thì xóa user trong AsyncStorage
                        await AsyncStorage.removeItem('user');
                        // sẽ tự nhảy về auth stack
                        setLoading(false);
                    }
                } else {
                    console.log('no user in async storage (authContext)');
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getUser();
    }, []);

    // khi logout sẽ xóa user trong AsyncStorage để đưa về auth stack
    const logOut = async () => {
        try {
            await AsyncStorage.removeItem('user');
            setUser(null);
        } catch (error) {
            console.log(error);
        }
    };

    const signUp = async (username, password) => {
        const response = await fetchData('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        return response;
    };

    const value = {
        user,
        loading,
        logIn,
        logOut,
        signUp
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
