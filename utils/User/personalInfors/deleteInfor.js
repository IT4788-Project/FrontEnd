import { deletePersonalInfor } from "../../../services/api/personalInfors";

// API đang bị lỗi, chưa thể sử dụng
export const deleteInfor = async (data, token) => {
    /*
    Usage: xóa thông tin cá nhân trong luồng sử dụng
    Params: 
    data = {
        userId: Number (bắt buộc)
    }
    token = String (bắt buộc)
    Return: {
        status: String,
        message: String
    }
    */
    try {
        const response = await deletePersonalInfor(data, token);
        switch (response.statusCode) {
            case 404:
                // Bad request in body
                return { status: 'failed', message: 'Người dùng không tồn tại, liên hệ NPH' };
            case 200:
                // success
                return { status: 'success', message: 'Xóa thông tin thành công' };
            case 500:
                // internal server error
                return { status: 'failed', message: 'Máy chủ đang bận, vui lòng thử lại sau!' };
            default:
                // null/500/300
                return { status: 'failed', message: 'Lỗi bất định!' };
        }
    } catch (error) {
        console.error(error, "(catch in function deleteInfor)");
        return { status: 'failed', message: 'Lỗi kết nối!' };
    }
}