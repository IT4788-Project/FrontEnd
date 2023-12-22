// this function works as a filter/caller for the UI

import { createUser } from "../../services/api/user";

export const signUp = async (username, password, email) => {
    try {
        const response = await createUser(username, password, email);
        switch (response.statusCode) {
            case 400:
                // Bad request
                return { status: 'failed', message: response.error };
            case 500:
                // Unauthorized
                return { status: 'failed', message: "Máy chủ bận, vui lòng thử lại sau ít phút!" };
            case 201:
                // success
                return { status: 'success', message: "Đăng ký tài khoản thành công!" };
            default:
                // null/500/300
                return { status: 'failed', message: 'Lỗi bất định, vui lòng liên hệ nhà phát hành!' };
        }
    } catch (error) {
        throw error;
    }
}

