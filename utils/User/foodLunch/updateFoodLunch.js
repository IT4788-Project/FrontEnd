import { updateFL } from "../../../services/api/foodLunch";

export const updateFoodLunch = async (data, token) => {
    /*
    Usage: cap nhat danh sach food trong bua an

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
        const response = await updateFL(data, token);
        switch (response.statusCode) {
            case 404:
                // Not found
                return { status: 'failed', message: 'Không tìm thấy bữa ăn', code: 404 };
            case 401:
                // Unauthorized
                return { status: 'failed', message: 'Lỗi xác minh, vui lòng đăng nhập lại', code: 401 };
            case 400:
                // Bad request in body
                return { status: 'failed', message: 'Thông tin không hợp lệ', code: 400 };
            case 200:
                // success
                // return data for double check
                return { status: 'success', data: response.data, code: 200 };
            case 500:
                // internal server error
                return { status: 'failed', message: 'Lỗi máy chủ', code: 500 };
            default:
                return { status: 'failed', message: 'Lỗi không xác định', code: 500 };
        }
    } catch (error) {
        throw error;
    }
}