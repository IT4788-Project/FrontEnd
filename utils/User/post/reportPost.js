import { report } from "../../../services/api/post";

export const reportPost = async (data, token) => {
    /*
    Usage: báo cáo bài viết
    
    Params:
    data = {
        "postId": 13
    }
    token = string

    Return:
    status: string
    message: string
    code: number
    */
    try {
        const response = await report(data, token)
        switch (response.statusCode) {
            case 401:
                return { status: 'failed', message: 'Bạn không có quyền truy cập', code: 401 };
            case 400:
                return { status: 'failed', message: 'Yêu cầu không hợp lệ', code: 400 };
            case 201:
                return { status: 'success', message: 'Báo cáo bài viết thành công', code: 201 };
            default:
                return { status: 'failed', message: 'Lỗi không xác định hoặc máy chủ bảo trì', code: 500 };
        }
    } catch (e) {
        throw e
    }
}