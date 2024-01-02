import { addFL } from "../../../services/api/foodLunch";

export const addFoodLunch = async (data, token) => {
    /*
    Usage: them danh sach food vao trong bua an
    NOTE: ham add chi call 1 lan, moi truy cap tu lan sau phai goi Update

    Params: 
    data = {
        lunchId: number,
        food: [
            {
                id: number,
                quantity: number,
                unit: string
            }
        ]
    }

    Return:
    status: string,
    message: string,
    code: number,
    data:
    {
        "lunch": {
            "id": 8,
            "timeLunch": "20:00:00",
            "name": "buoi c",
            "sumCalories": 400,
            "nutritionDiaryId": 37
        },
        "foods": [
            {
                "id": 2,
                "quantity": 200,
                "unit": "gam"
            },
            {
                "id": 3,
                "quantity": 200,
                "unit": "gam"
            }
        ]
    }
    */
    try {
        const response = await addFL(data, token);
        switch (response.statusCode) {
            case 401:
                // Unauthorized
                return { status: 'failed', message: 'Lỗi xác minh, vui lòng đăng nhập lại', code: 401 };
            case 400:
                // Bad request in body
                return { status: 'failed', message: 'Thông tin không hợp lệ', code: 400 };
            case 201:
                // success
                // return data for double check
                return { status: 'success', data: response.data, code: 201 };
            case 500:
                // internal server error
                return { status: 'failed', message: 'Máy chủ đang bận, vui lòng thử lại sau!', code: 500 };
            default:
                // null/300
                return { status: 'failed', message: 'Lỗi bất định!', code: 500 };
        }
    } catch (error) {
        throw error;
    }
}