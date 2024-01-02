import { createPost } from "../../../services/api/post";

export const createNewPost = async (data, token) => {
    /*
    Usage: tạo bài viết mới

    Params:
    data = {
        "content": "Hello mike fence 2",
        "images": [
            "http://image1.com/image/1",
            "http://image1.com/image/1"
        ],
        "isPublic": true
    }
    token = string

    Return:
    status: string
    message: string
    code: number
    */
    try {
        const response = await createPost(data, token)
        switch (response.statusCode) {
            case 401:
                return { status: 'failed', message: 'Bạn không có quyền truy cập', code: 401 };
            case 400:
                return { status: 'failed', message: 'Yêu cầu không hợp lệ', code: 400 };
            case 201:
                return { status: 'success', message: 'Tạo bài viết thành công', code: 201 };
            default:
                return { status: 'failed', message: 'Lỗi không xác định hoặc máy chủ bảo trì', code: 500 };
        }
    } catch (e) {
        throw e
    }
}