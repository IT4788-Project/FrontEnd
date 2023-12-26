import { changeInformation } from "../../../services/api/personalInfors";

export const changeInfor = async (data, token) => {
    /*
    Usage: sửa thông tin cá nhân trong luồng sử dụng
    Params: 
    data = {
        fullName: String || null,
        birthDay: Date || null,
        height: Number || null,
        gender: String || null,
        nutritionGoal: String || null,
        initialWeight: Number || null,
        currentWeight: Number || null,
        targetWeight: Number || null,
        hip: Number || null,
        waist: Number || null,
        userId: Number || null
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
            case 200:
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