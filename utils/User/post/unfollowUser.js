import { unfollow } from "../../../services/api/post";

export const unfollowUser = async (data, token) => {
    /*
    Usage: bỏ theo dõi người dùng

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
        const response = await unfollow(data, token)
        switch (response.statusCode) {
            case 401:
                return { status: 'failed', message: 'Bạn không có quyền truy cập', code: 401 };
            default:
                return response.error ? 
                { status: 'failed', message: response.error, code: 500 }
                :
                { status: 'success', message: 'Thành công', code: 200 };
        }
    } catch (e) {
        throw e
    }
}