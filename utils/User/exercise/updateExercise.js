import { updateOneExercise } from "../../../services/api/exercise";

export const updateExercise = async (data, token) => {
    /*
    Usage: cập nhật một bài tập của user trong ngày
    Params:
    data = {
        exercise_name: String || null,
        exerciseTime: Time || null,
        exercise_decription: String || null,
        nutritionDiaryId: Number (bắt buộc),
        exerciseId: Number (bắt buộc)
    }
    token = String (bắt buộc)
    Return: {
        status: String,
        message: String,
        code: Number
    }
    */
    try {
        const response = await updateOneExercise(data, token);
        switch (response.statusCode) {
            case 400:
                // Bad request in body
                return { status: 'failed', message: 'Lỗi dữ liệu đầu vào hoặc trùng thông tin (giờ)', code: 400 };
            case 401:
                // Unauthorized
                return { status: 'failed', message: 'Lỗi xác minh, vui lòng đăng nhập lại', code: 401 };
            case 404:
                // Bad request in body
                return { status: 'failed', message: 'Không tìm thấy thông tin', code: 404 };
            case 200:
                // success
                // return data for double check
                return { status: 'success', message: "Update thành công", code: 200 };
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