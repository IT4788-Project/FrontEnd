import { getFollower as getF } from "../../../services/api/post";

export const getFollower = async (token) => {
    /*
    Usage: lấy danh sách người theo dõi 

    Params:
    token = string

    Return:
    status: string
    message: string
    code: number
    data: list(object)
    */
    try {
        const response = await getF(token)
        switch (response.status) {
            case 401:
                return { status: 'failed', message: 'Bạn không có quyền truy cập', code: 401 };
            case 400:
                return { status: 'failed', message: 'Yêu cầu không hợp lệ', code: 400 };
            case 200:
                return { status: 'success', message: 'Lấy danh sách theo dõi thành công', code: 200, data: response.data };
            default:
                return { status: 'failed', message: 'Lỗi không xác định hoặc máy chủ bảo trì', code: 500 };
        }
    } catch (e) {
        throw e
    }
}