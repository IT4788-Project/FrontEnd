import { follow } from "../../../services/api/post";

export const followNewUser = async (data, token) => {
    /*
    Usage: theo dõi 1 người dùng

    Params:
    data = {
        targetId: number
    }
    token = string

    Return:
    status: string
    message: string
    code: number
    */
    try {
        const response = await follow(data, token)
        switch (response.status) {
            case 401:
                return { status: 'failed', message: 'Bạn không có quyền truy cập', code: 401 };
            case 400:
                return { status: 'failed', message: 'Yêu cầu không hợp lệ', code: 400 };
            case 201:
                return { status: 'success', message: 'Theo dõi thành công', code: 200 };
            default:
                return { status: 'failed', message: 'Lỗi không xác định hoặc máy chủ bảo trì', code: 500 };
        }
    } catch (e) {
        throw e
    }
}