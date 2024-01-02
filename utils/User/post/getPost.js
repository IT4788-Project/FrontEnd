import { getDetailPost } from "../../../services/api/post";

export const getPost = async (data, token) => {
    /*
    Usage: Lấy bài viết theo id

    Params:
    data = {
        postId: number
    }
    token = string

    Return:
    status: string
    message: string
    code: number
    data: object
    */
    try {
        const response = await getDetailPost(data, token)
        switch (response.statusCode) {
            case 401:
                return { status: 'failed', message: 'Bạn không có quyền truy cập', code: 401 };
            case 400:
                return { status: 'failed', message: 'Yêu cầu không hợp lệ', code: 400 };
            case 200:
                return { status: 'success', message: 'Lấy bài viết thành công', code: 200, data: response.data };
            default:
                return { status: 'failed', message: 'Lỗi không xác định hoặc máy chủ bảo trì', code: 500 };
        }
    } catch (e) {
        throw e
    }
}