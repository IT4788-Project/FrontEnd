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
    data: {
    "followers": [
        2
    ],
    "followings": [
        4,
        8,
        2,
        5,
        6,
        9,
        11
    ]
}
    */
    try {
        const response = await getF(token)
        switch (response.statusCode) {
            case 401:
                return { status: 'failed', message: 'Bạn không có quyền truy cập', code: 401 };
            default:
                return response.error ? 
                { status: 'failed', message: 'Lỗi không xác định hoặc máy chủ bảo trì', code: 500 }
                :
                { status: 'success', message: 'Thành công', code: 200, data: response };
        }
    } catch (e) {
        throw e
    }
}