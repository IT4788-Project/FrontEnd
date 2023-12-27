import { deleteGoal } from "../../../services/api/healthyGoal";

export const deleteOneGoal = async (data, token) => {
    /*
    Usage: xóa một mục tiêu của user

    Params:
    data = {
        healthyGoalId: Number (bắt buộc)
    }
    token = String (bắt buộc)

    Return: {
        status: String,
        message: String  
        code: Number
    }
    */
    try {
        const response = await deleteGoal(data, token);
        switch (response.statusCode) {
            case 401:
                // Unauthorized
                return { status: 'failed', message: 'Lỗi xác minh, vui lòng đăng nhập lại', code: 401 };
            case 404:
                // Bad request in body
                return { status: 'failed', message: 'Không tìm thấy mục tiêu đã chọn', code: 404 };
            case 200:
                // success
                return { status: 'success', message: 'Đã xóa thành công', code: 200 };
            case 500:
                // internal server error
                return { status: 'failed', message: 'Máy chủ đang bận, vui lòng thử lại sau!', code: 500 };
            default:
                console.log(response);
                // null/300
                return { status: 'failed', message: 'Lỗi bất định!', code: 500 };
        }
    } catch (error) {
        console.error(error, "(catch in function deleteOneGoal)");
        return { status: 'failed', message: 'Lỗi kết nối!', code: 500 };
    }
}