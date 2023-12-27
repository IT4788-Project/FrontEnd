import { getUserWeightHistory as getWeight } from "../../../services/api/userWeight";

export const getUserWeightHistory = async (token) => {
    /*
    Usage: lấy thông tin cân nặng của user
    Params:
    token = String (bắt buộc)
    Return: {
        status: String,
        message: String ||     
        data = {
            "statusCode": 200,
            "message": "OK",
            "health": [
                {
                    "id": 20,
                    "currentWeight": 100,
                    "createdAt": "2023-12-27T14:13:24.000Z",
                    "updatedAt": "2023-12-27T14:13:24.000Z",
                    "userId": 5
                },
                {
                    "id": 21,
                    "currentWeight": 100,
                    "createdAt": "2023-12-27T14:21:24.000Z",
                    "updatedAt": "2023-12-27T14:21:24.000Z",
                    "userId": 5
                }
            ]
        },
        code: Number
    }
    */
    try {
        const response = await getWeight(token);
        switch (response.statusCode) {
            case 401:
                // Unauthorized
                return { status: 'failed', message: 'Lỗi xác minh, vui lòng đăng nhập lại', code: 401 };
            case 404:
                // Bad request in body
                return { status: 'failed', message: 'Không tìm thấy thông tin', code: 404 };
            case 200:
                // success
                return { status: 'success', data: response.health, code: 200 };
            case 500:
                // internal server error
                return { status: 'failed', message: 'Máy chủ đang bận, vui lòng thử lại sau!', code: 500 };
            default:
                console.log(response);
                // null/300
                return { status: 'failed', message: 'Lỗi bất định!', code: 500 };
        }
    } catch (error) {
        console.error(error, "(catch in function getUserWeightHistory)");
        return { status: 'failed', message: 'Lỗi kết nối!', code: 500 };
    }
}