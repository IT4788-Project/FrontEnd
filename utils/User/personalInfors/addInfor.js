import { addPersonalInfor } from "../../../services/api/personalInfors";

export const addInfor = async (data, token) => {
    /*
    Usage: thêm thông tin cá nhân khi đăng ký tài khoản mới
    Params: 
    data = {
        fullName: String (bắt buộc),
        birthDay: Date || null,
        height: Number || null,
        gender: String (bắt buộc),
        nutritionGoal: String || null,
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
        const response = await addPersonalInfor(data, token);
        switch (response.statusCode) {
            case 401:
                // Unauthorized
                return { status: 'failed', message: 'Lỗi xác minh, vui lòng đăng nhập lại', code: 401 };
            case 400:
                // Bad request in body
                return { status: 'failed', message: 'Thông tin cung cấp không hợp lệ hoặc thông tin đã tồn tại', code: 400 };
            case 201:
                // success
                return { status: 'success', message: 'Thêm thông tin thành công', code: 201 };
            case 500:
                // internal server error
                return { status: 'failed', message: 'Máy chủ đang bận, vui lòng thử lại sau!', code: 500 };
            default:
                // null/300
                return { status: 'failed', message: 'Lỗi bất định!', code: 500 };
        }
    } catch (error) {
        console.error(error, "(catch in function addInfor)");
        return { status: 'failed', message: 'Lỗi kết nối!', code: 500 };
    }
}