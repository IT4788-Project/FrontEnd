import { getPersonalInfor } from "../../../services/api/personalInfors";

export const getInfor = async (token) => {
    /*
    Usage: lấy thông tin cá nhân khi đăng nhập
    Params:
    token = String (bắt buộc)
    Return: {
        status: String,
        message: String ||     
        data = {
            tự console ra xem chứ t mệt quá rồi
        },
        code: Number
    }
    */
    try {
        const response = await getPersonalInfor(token);
        switch (response.statusCode) {
            case 401:
                // Unauthorized
                return { status: 'failed', message: 'Lỗi xác minh, vui lòng đăng nhập lại', code: 401 };
            case 404:
                // Bad request in body
                return { status: 'failed', message: 'Không tìm thấy thông tin', code: 404 };
            case 200:
                // success
                return { status: 'success', data: response.personalInfo, code: 200 };
            case 500:
                // internal server error
                return { status: 'failed', message: 'Máy chủ đang bận, vui lòng thử lại sau!', code: 500 };
            default:
                console.log(response);
                // null/300
                return { status: 'failed', message: 'Lỗi bất định!', code: 500 };
        }
    } catch (error) {
        console.error(error, "(catch in function getInfor)");
        return { status: 'failed', message: 'Lỗi kết nối!', code: 500 };
    }
}