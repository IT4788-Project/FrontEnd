import { changeInformation } from "../../../services/api/personalInfors";

// API đang bị lỗi, chưa thể sử dụng
export const changeInfor = async (data, token) => {
    /*
    Usage: sửa thông tin cá nhân trong luồng sử dụng
    Params: 
    data = {
        gender: String (bắt buộc),
        nutritionGoal: String,
        initialWeight: Number,
        currentWeight: Number,
        targetWeight: Number,
        hip: Number,
        waist: Number,
        userId: Number (bắt buộc)
    }
    token = String (bắt buộc)
    Return: {
        status: String,
        message: String
    }
    */
    try {
        const response = await changeInformation(data, token);
        switch (response.statusCode) {
            case 404:
                // Bad request in body
                return { status: 'failed', message: 'Không tìm thấy thông tin người dùng, liên hệ NPH' };
            case 201:
                // success
                return { status: 'success', message: 'Sửa thông tin thành công' };
            case 500:
                // internal server error
                return { status: 'failed', message: 'Máy chủ đang bận, vui lòng thử lại sau' };
            default:
                // null/500/300
                return { status: 'failed', message: 'Lỗi bất định!' };
        }
    } catch (error) {
        console.error(error, "(catch in function changeInfor)");
        return { status: 'failed', message: 'Lỗi kết nối!' };
    }
}