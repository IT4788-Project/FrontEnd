import { getByTag } from "../../../services/api/food";

export const getFoodByTag = async (data, token) => {
    /*
    Usage: tim thong tin mon an theo tag
    Params: 
    data: {
        tagId: number
    }
    token: string

    Return:
    status: string,
    message: string,
    code: number,
    "data": {
        "id": 1,
        "name": "Calo thấp",
        "createdAt": "2023-12-28T10:14:54.000Z",
        "updatedAt": "2023-12-28T10:14:54.000Z",
        "food": [
            {
                "id": 1,
                "name": "Thịt chó",
                "calories": 99,
                "glucozo": 0,
                "lipit": 50,
                "protein": 100,
                "vitamin": 0,
                "unit": "gram"
            },
            {
                "id": 2,
                "name": "Thịt gà",
                "calories": 1000,
                "glucozo": 0,
                "lipit": 50,
                "protein": 100,
                "vitamin": 0,
                "unit": "gram"
            },
            {
                "id": 3,
                "name": "Thịt mèo",
                "calories": 88,
                "glucozo": 0,
                "lipit": 50,
                "protein": 100,
                "vitamin": 0,
                "unit": "gram"
            }
        ]
    }
    */
    try {
        const response = await getByTag(data, token);
        switch (response.statusCode) {
            case 404:
                // Not found
                return { status: 'failed', message: 'Không tìm thấy món ăn', code: 404 };
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
        console.log(error, "in getFoodByTag");
        throw error;
    }
}