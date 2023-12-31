import { addFL } from "../../../services/api/foodLunch";

export const addFoodLunch = async (data, token) => {
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
                console.log(response);
                // null/300
                return { status: 'failed', message: 'Lỗi bất định!', code: 500 };
        }
    } catch (error) {
        throw error;
    }
}