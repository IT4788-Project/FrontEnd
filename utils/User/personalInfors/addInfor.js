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
        currentWeight: Number || null,
        targetWeight: Number || null,
        hip: Number || null,
        waist: Number || null,
        userId: Number (bắt buộc)
    }
    token = String (bắt buộc)
    Return: {
        status: String,
        message: String
    }
    */
    try {
        const response = await addPersonalInfor(data, token);
        switch (response.statusCode) {
            case 400:
                // Bad request in body
                return { status: 'failed', message: 'Thông tin cung cấp không hợp lệ' };
            case 201:
                // success
                return { status: 'success', message: 'Thêm thông tin thành công' };
            case 500:
                // internal server error
                return { status: 'failed', message: 'Máy chủ đang bận, vui lòng thử lại sau!' };
            default:
                // null/500/300
                return { status: 'failed', message: 'Lỗi bất định!' };
        }
    } catch (error) {
        console.error(error, "(catch in function addInfor)");
        return { status: 'failed', message: 'Lỗi kết nối!' };
    }
}