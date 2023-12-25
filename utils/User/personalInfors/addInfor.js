import { addPersonalInfor } from "../../../services/api/personalInfors";

// them thong tin cho user
export const addInfor = async (data, token) => {
    try {
        const response = await addPersonalInfor(data, token);
        console.log(response.statusCode);
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