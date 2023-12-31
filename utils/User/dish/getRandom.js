import { getRandomDish } from "../../../services/api/dish";

export const getRandom = async (token) => {
    /*
    Usage: thong tin 10 mon an ngau nhien

    Params: 
    token: string

    Return:
    status: string,
    message: string,
    code: number,
    "data": {
        "id": 1,
        "name": "Gà rán nguyên con",
        "dish_description": "Gà rán nguyên con nhúng mỡ nóng, ăn kèm với rau sống và nước chấm",
        "images": [
            {
                "id": 1,
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
            },
            {
                "id": 3,
                "name": "Dễ nấu"
            }
        ]
    }
    */
    try {
        const response = await getRandomDish(token);
        switch (response.statusCode) {
            case 401:
                // Unauthorized
                return { status: 'failed', message: 'Lỗi xác minh, vui lòng đăng nhập lại', code: 401 };
            case 200:
                // success
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