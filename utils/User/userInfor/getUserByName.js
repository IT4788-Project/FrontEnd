import { getByName } from "../../../services/api/user";

export const getUserByName = async (data, token) => {
    /*
    Usage: lấy thông tin người dùng theo tên

    Params:
    data = {
        "name": string
    }
    token = string

    Return:
    status: string
    message: string
    code: number
    data: object
    */
    try {
        const response = await getByName(data, token)
        switch (response.statusCode) {
            case 401:
                return { status: 'failed', message: 'Bạn không có quyền truy cập', code: 401, data: {} };
            case 400:
                return { status: 'failed', message: 'Yêu cầu không hợp lệ', code: 400, data: {} };
            case 200:
                return { status: 'success', message: 'Lấy thông tin người dùng thành công', code: 200, data: response.data };
            default:
                return { status: 'failed', message: 'Lỗi không xác định hoặc máy chủ bảo trì', code: 500, data: {} };
        }
    } catch (e) {
        throw e
    }
}