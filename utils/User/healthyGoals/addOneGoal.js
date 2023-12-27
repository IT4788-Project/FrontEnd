import { addGoal } from "../../../services/api/healthyGoal";

export const addOneGoal = async (data, token) => {
    /*
    Usage: thêm một mục tiêu cho user

    Params:
    data = {
        targetName: String (bắt buộc),
        currentWeight: Number (bắt buộc),
        targetWeight: Number (bắt buộc),
        sumCalories: Number (bắt buộc),
        timeStart: Date (bắt buộc),
        timeEnd: Date (bắt buộc)
    }
    token = String (bắt buộc)

    Return: {
        status: String,
        message: String ||     
        data = {
            "id": 9, // id của mục tiêu sẽ tự tăng
            "targetName": "le minh hieu",
            "currentWeight": 78.2,
            "targetWeight": 68,
            "sumCalories": 60000,
            "timeStart": "2023-11-10",
            "timeEnd": "2023-11-21",
            "userId": 5
        },
        code: Number
    }
    */
    try {
        const response = await addGoal(data, token);
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
        console.error(error, "(catch in function addOneGoal)");
        return { status: 'failed', message: 'Lỗi kết nối!', code: 500 };
    }
}