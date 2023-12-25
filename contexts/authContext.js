// Thư viện context giúp chia sẻ dữ liệu giữa các component

import React, { createContext, useEffect, useState, useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { logIn, logOut } from "../services/api/auth";
import { loginAndSaveUser } from "../utils/Auth/loginAndSaveUser";

const AuthContext = createContext();

/*
    Provider này chứa state cho người dùng tại session hiện tại
    Các function làm việc với cả client và server
*/
const AuthProvider = ({ children }) => {
    // dữ liệu user này được sử dụng trong session hiện tại của app
    // dữ liệu user trong session này sẽ bị xóa khi app bị kill
    // user thực sự sẽ được lưu trong AsyncStorage (username và password)
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // khi khởi động app -> luôn chạy check local storage
    useEffect(() => {
        _autoLogin();
    }, []);

    useEffect(() => {
        console.log('user in session (authContext): ', user);
    }, [user]);

    // function này sẽ tự động đăng nhập mỗi khi khởi động app
    const _autoLogin = async () => {
        try {
            // đọc data user từ AsyncStorage
            const user = await AsyncStorage.getItem('user');
            // nếu có userdata thì xử lý data đó
            if (user) {
                // thử đăng nhập lại với user lấy được từ AsyncStorage
                const response = await logIn(user.username, user.password);
                if (response.ok) {
                    // user data có username, password, token, userId
                    setUser({
                        username: String(username),
                        password: String(password),
                        userId: String(response.text.userData.id),
                        token: String(response.text.accessToken)
                    });
                    setLoading(false);
                } else {
                    // nếu đăng nhập thất bại thì xóa user trong AsyncStorage
                    await AsyncStorage.removeItem('user');
                    // sẽ tự nhảy về auth stack
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

    // function này sử dụng loginAndSaveUser để đăng nhập và lưu user vào AsyncStorage
    // function này làm việc với người dùng bằng state user
    const _signIn = async (username, password) => {
        try {
            // làm việc với API và AsyncStorage
            const response = await loginAndSaveUser(username, password);
            // làm việc với session
            if (response.status === 'success') {
                setUser(response.userData);
            } else {
                setUser(null);
                console.log("SignIn failed: ", response.message);
            }
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    // khi logout sẽ xóa user trong AsyncStorage để đưa về auth stack
    // đây là logout ở client, tuy nhiên vẫn gọi API để logout ở server
    // ko cần quan tâm đến response của API nên ko cần filter response
    const _logOut = async () => {
        try {
            const token = user.token;
            if (token) {
                // logout ở server
                const response = await logOut(token);
                // xử lý logout ở client
                await AsyncStorage.removeItem('user');
                // mặc định thì kill app cũng sẽ xóa data ở state 
                console.log("Logout successfully, response from server: ", response);
                setUser(null);
            } else {
                setUser(null);
                console.log("Error in logOut function (Auth): No token found for current user");
            }
        } catch (error) {
            console.log("Error in logOut function (Auth): ", error);
        }
    };

    const value = {
        user,
        loading,
        _signIn,
        _logOut
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook để dễ dàng sử dụng context trong component
const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
};

export { AuthContext, AuthProvider, useAuth };
