import { getAllDishCategory } from "../../../services/api/dishCategory";

export const getAllDC = async (token) => {
    /*
    Usage: lay danh sach tat ca cac category cua db

    Params: 
    token: string

    Return:
    status: string,
    message: string,
    code: number,
    data: [
        {
            "id": 1,
            "name": "bữa sang"
        },
        {
            "id": 2,
            "name": "bữa sang"
        }
    ]
    */
    try {
        const response = await getAllDishCategory(token);
        switch (response.statusCode) {
            case 401:
                // Unauthorized
                return { status: 'failed', message: 'Lỗi xác minh, vui lòng đăng nhập lại', code: 401 };
            case 200:
                // success
                // return data for double check
                return { status: 'success', data: response.data, code: 200 };
            case 500:
                // internal server error
                return { status: 'failed', message: 'Lỗi máy chủ, vui lòng thử lại sau', code: 500 };
            default:
                return { status: 'failed', message: 'Lỗi không xác định, vui lòng thử lại sau', code: 500 };
        }
    } catch (error) {
        console.log(error, "in getAllDC");
        throw error;
    }
}