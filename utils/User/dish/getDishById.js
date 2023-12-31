import { getOneDish } from "../../../services/api/dish";

export const getDishById = async (data, token) => {
    /*
    Usage: thong tin mon an theo id
    Params: 
    data: {
        dishId: number
    }
    token: string

    Return:
    status: string,
    message: string,
    code: number,
    "data": {
        "id": 2,
        "name": "Lợn luộc",
        "dish_description": "Gà rán nguyên con nhúng mỡ nóng, ăn kèm với rau sống và nước chấm",
        "images": [
            {
                "id": 2,
                "image_path": null
            }
        ],
        "tags": [
            {
                "id": 1,
                "name": "Calo thấp"
            },
            {
                "id": 2,
                "name": "Đạm cao"
            }
        ],
        "food": []
    }
    */
    try {
        const response = await getOneDish(data, token);
        switch (response.statusCode) {
            case 404:
                // Not found
                return { status: 'failed', message: 'Không tìm thấy món ăn', code: 404 };
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
        throw error;
    }
}