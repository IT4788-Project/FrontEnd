import { getOneExercise } from "../../../services/api/exercise";

export const getExercise = async (data, token) => {
    /*
    Usage: lấy một bài tập của user trong ngày
    Params:
    data = {
        nutritionDiaryId: Number (bắt buộc),
        exerciseId: Number (bắt buộc)
    }
    token = String (bắt buộc)
    Return: {
        status: String,
        message: String ||     
        data = {
            "id": 1,
            "exercise_name": "chay bo",
            "exerciseTime": "07:00:01",
            "exercise_decription": "tap cho vui",
            "nutritionDiaryId": 5
        },
        code: Number
    }
    */
    try {
        const response = await getOneExercise(data, token);
        switch (response.statusCode) {
            case 401:
                // Unauthorized
                return { status: 'failed', message: 'Lỗi xác minh, vui lòng đăng nhập lại', code: 401 };
            case 404:
                // Bad request in body
                return { status: 'failed', message: 'Không tìm thấy thông tin', code: 404 };
            case 200:
                // success
                // return data for double check
                return { status: 'success', data: response.data, code: 200 };
            case 500:
                // internal server error
                return { status: 'failed', message: 'Máy chủ đang bận, vui lòng thử lại sau!', code: 500 };
            default:
                console.log(response);
                // null/300
                return { status: 'failed', message: 'Lỗi bất định!', code: 500 };
        }
    } catch (error) {
        throw error;
    }
}