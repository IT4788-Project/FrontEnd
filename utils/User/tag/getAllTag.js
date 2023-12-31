import { getAll } from "../../../services/api/tag";

export const getAllTag = async (token) => {
    /*
    Usage: lay tat ca tag

    Params:
    token: string

    Return:
    status: string,
    message: string,
    code: number,
    "data": [
        {
            "id": 1,
            "name": "Calo thấp",
            "createdAt": "2023-12-28T10:14:54.000Z",
            "updatedAt": "2023-12-28T10:14:54.000Z"
        },
        {
            "id": 2,
            "name": "Đạm cao",
            "createdAt": "2023-12-28T10:14:54.000Z",
            "updatedAt": "2023-12-28T10:14:54.000Z"
        },
        {
            "id": 3,
            "name": "Dễ nấu",
            "createdAt": "2023-12-28T10:14:54.000Z",
            "updatedAt": "2023-12-28T10:14:54.000Z"
        },
        {
            "id": 4,
            "name": "Cá",
            "createdAt": "2023-12-28T10:14:54.000Z",
            "updatedAt": "2023-12-28T10:14:54.000Z"
        }
    ]
    */
    try {
        const response = await getAll(token);
        switch (response.statusCode) {
            case 401:
                // Unauthorized
                return { status: 'failed', message: 'Bạn không có quyền truy cập', code: 401 };
            case 404:
                // Not found
                return { status: 'failed', message: 'Không tìm thấy tag', code: 404 };
            case 200:
                return { status: 'success', message: 'Lấy thông tin tag thành công', code: 200, data: response.data };
            default:
                return { status: 'failed', message: 'Lỗi không xác định hoặc máy chủ bảo trì', code: 500 };
        }
    } catch (error) {
        throw error;
    }
    }