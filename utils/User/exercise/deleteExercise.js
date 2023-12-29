import { deleteOneExercise } from "../../../services/api/exercise";

export const deleteExercise = async (data, token) => {
    /*
    Usage: xóa một bài tập của user trong ngày
    Params:
    data = {
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
        const response = await deleteOneExercise(data, token);
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
                return { status: 'success', message: "Xóa thành công", code: 200 };
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