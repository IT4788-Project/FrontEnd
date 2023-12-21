// after user typed email, call api to send forgot password mail
import { forgotPassword } from "../../services/api/auth";

export const sendOTPMail = async (email) => {
    try {
        const response = await forgotPassword(email);
        switch (response.statusCode) {
            case 400:
                // Bad request
                return { status: 'failed', message: 'Nhập không đúng định dạng gmail' };
            case 401:
                // Unauthorized
                return { status: 'failed', message: 'Gmail không tồn tại trên hệ thống' };
            case 200:
                // success
                saveUserToLocal(username, password);
                return { status: 'success' };
            case 500:
                // internal server error
                return { status: 'failed', message: 'Server đang bận, vui lòng thử lại sau' };
            default:
                // null/500/300
                return { status: 'failed', message: 'Lỗi không xác định' };
        }
    } catch (error) {
        console.error(error, "(catch in function sendOTPMail)");
        return { status: 'failed', message: 'Unknown error' };
    }
}