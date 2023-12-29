import { findOneNutritionDiary } from "../../../services/api/nutritionDiary";

export const getNutrition = async (data, token) => {
    /*
    Usage: lấy thông tin dinh dưỡng
    Params:
    data = {
        "time": "2021-05-31"
    }
    token = String (bắt buộc)
    Return: {
        status: String,
        message: String,
        code: Number,
        data: Object
    }
    */
    try {
        const response = await findOneNutritionDiary(data, token);
        switch (response.statusCode) {
            case 401:
                // Unauthorized
                return { status: 'failed', message: 'Lỗi xác minh, vui lòng đăng nhập lại', code: 401 };
            case 400:
                // Bad request in body
                return { status: 'failed', message: 'Thông tin cung cấp không hợp lệ hoặc thông tin đã tồn tại', code: 400 };
            case 200:
                // success
                return { status: 'success', message: 'Lấy thông tin thành công', code: 200, data: response.data };
            case 500:
                // internal server error
                return { status: 'failed', message: 'Máy chủ đang bận, vui lòng thử lại sau!', code: 500 };
            default:
                // null/300
                return { status: 'failed', message: 'Lỗi bất định!', code: 500 };
        }
    } catch (error) {
        console.error(error, "(catch in function getNutrition)");
        return { status: 'failed', message: 'Lỗi kết nối!', code: 500 };
    }
}