import { updateGoal } from "../../../services/api/healthyGoal";

export const updateOneGoal = async (data, token) => {
    try {
        const response = await updateGoal(data, token);
        switch (response.statusCode) {
            case 401:
                // Unauthorized
                return { status: 'failed', message: 'Lỗi xác minh, vui lòng đăng nhập lại', code: 401 };
            case 404:
                // Bad request in body
                return { status: 'failed', message: 'Không tìm thấy thông tin', code: 404 };
            case 200:
                // success
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
        console.error(error, "(catch in function updateOneGoal)");
        return { status: 'failed', message: 'Lỗi kết nối!', code: 500 };
    }
}