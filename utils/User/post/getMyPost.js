import { getPostMe } from "../../../services/api/post";

export const getMyPost = async (token) => {
    /*
    Usage: lấy danh sách bài viết của mình

    Params:
    token = string

    Return:
    status: string
    message: string
    code: number
    data: array
    */
    try {
        const response = await getPostMe(token)
        switch (response.statusCode) {
            case 401:
                return { status: 'failed', message: 'Bạn không có quyền truy cập', code: 401, data: [] };
            case 400:
                return { status: 'failed', message: 'Yêu cầu không hợp lệ', code: 400, data: [] };
            case 200:
                return { status: 'success', message: 'Lấy danh sách bài viết thành công', code: 200, data: response.data };
            default:
                return { status: 'failed', message: 'Lỗi không xác định hoặc máy chủ bảo trì', code: 500, data: [] };
        }
    } catch (e) {
        throw e
    }
}