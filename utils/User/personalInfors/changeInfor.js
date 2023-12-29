import { changeInformation } from "../../../services/api/personalInfors";

export const changeInfor = async (data, token) => {
    /*
    Usage: sửa thông tin cá nhân trong luồng sử dụng
    Params: 
    data = {
        fullName: String (bắt buộc),
        birthDay: Date || null,
        height: Number || null,
        gender: String (bắt buộc),
        nutritionalGoal: String || null,
        initialWeight: Number || null,
        currentWeight: Number (bắt buộc),
        targetWeight: Number || null,
        hip: Number || null,
        waist: Number || null
    }
    token = String (bắt buộc)
    Return: {
        status: String,
        message: String,
        code: Number
    }
    */
    try {
        const response = await changeInformation(data, token);
        switch (response.statusCode) {
            case 401:
                // Unauthorized
                return { status: 'failed', message: 'Lỗi xác minh, vui lòng đăng nhập lại', code: 401 };
            case 404:
                // Bad request in body
                return { status: 'failed', message: 'Không tìm thấy thông tin người dùng, liên hệ NPH', code: 404 };
            case 200:
                // success
                return { status: 'success', message: 'Sửa thông tin thành công', code: 200 };
            case 500:
                // internal server error
                return { status: 'failed', message: 'Máy chủ đang bận, vui lòng thử lại sau', code: 500 };
            default:
                // null/500/300
                return { status: 'failed', message: 'Lỗi bất định!', code: 500 };
        }
    } catch (error) {
        console.error(error, "(catch in function changeInfor)");
        return { status: 'failed', message: 'Lỗi kết nối!', code: 500 };
    }
}