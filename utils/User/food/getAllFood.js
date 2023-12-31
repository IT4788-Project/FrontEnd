import { getAll } from "../../../services/api/food";

export const getAllFood = async (token) => {
    /*
    Usage: lay thong tin tat ca mon an
    Params: 
    token: string

    Return:
    status: string,
    message: string,
    code: number,
    "data": [
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
    */
    try {
        const response = await getAll(token);
        switch (response.statusCode) {
            case 404:
                // Not found
                return { status: 'failed', message: 'Không tìm thấy món ăn', code: 404 };
            case 200:
                return { status: 'success', message: 'Lấy thông tin món ăn thành công', code: 200, data: response.data };
            default:
                return { status: 'failed', message: 'Lấy thông tin món ăn thất bại', code: 500 };
        }
    } catch (error) {
        throw error;
    }
}