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
            default:
                return response.error ? 
                { status: 'failed', message: response.error, code: 500 }
                :
                { status: 'success', message: 'Thành công', code: 200, data: response };
        }
    } catch (e) {
        throw e
    }
}
