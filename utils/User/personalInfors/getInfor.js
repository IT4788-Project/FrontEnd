import { getPersonalInfor } from "../../../services/api/personalInfors";

export const getInfor = async (data, token) => {
    /*
    Usage: lấy thông tin cá nhân khi đăng nhập
    Params:
    data = {
        id: Number (bắt buộc)
    }
    token = String (bắt buộc)
    Return: {
        status: String,
        message: String ||     
        data = {
        gender: String,
        nutritionGoal: String,
        initialWeight: Number,
        currentWeight: Number,
        targetWeight: Number,
        hip: Number,
        waist: Number,
        userId: Number
        }
    }
    */
    try {
        const response = await getPersonalInfor(data, token);
        switch (response.statusCode) {
            case 404:
                // Bad request in body
                return { status: 'failed', message: 'Không tìm thấy thông tin' };
            case 200:
                // success
                return { status: 'success', data: data };
            case 500:
                // internal server error
                return { status: 'failed', message: 'Máy chủ đang bận, vui lòng thử lại sau!' };
            default:
                // null/500/300
                return { status: 'failed', message: 'Lỗi bất định!' };
        }
    } catch (error) {
        console.error(error, "(catch in function getInfor)");
        return { status: 'failed', message: 'Lỗi kết nối!' };
    }
}