import { deletePost } from "../../../services/api/post";

export const deleteMyPost = async (data, token) => {
    /*
    Usage: xóa bài viết của mình

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
        const response = await deletePost(data, token)
        switch (response.statusCode) {
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