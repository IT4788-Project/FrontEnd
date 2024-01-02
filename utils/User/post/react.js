import { reactPost } from "../../../services/api/post";

export const react = async (data, token) => {
    /*
    Usage: thả tim vào bài viết

    Params:
    data = {
        postId: number
    }
    token = string

    Return:
    status: string
    message: string
    code: number
    */  
    try {
        const response = await reactPost(data, token)
        switch (response.status) {
            case 401:
                return { status: 'failed', message: 'Bạn không có quyền truy cập', code: 401 };
            case 400:
                return { status: 'failed', message: 'Yêu cầu không hợp lệ', code: 400 };
            case 200:
                return { status: 'success', message: 'Thả tim thành công', code: 200 };
            default:
                return { status: 'failed', message: 'Lỗi không xác định hoặc máy chủ bảo trì', code: 500 };
        }
    } catch (e) {
        throw e
    }
}
