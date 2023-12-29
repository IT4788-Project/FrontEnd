import { addOne } from "../../../services/api/lunch";

export const addOneLunch = async (data, token) => {
    /*
    Uasge: thêm 1 lunch mới

    Params:
    data = {
        nutritionDiaryId: Number (bắt buộc),
        timeLunch: String (bắt buộc),
        name: String (bắt buộc),
    }
    token = String (bắt buộc)

    Return: {
        status: String,
        message: String ||     
        data = {
            "id": 3,
            "timeLunch": "20:00:00",
            "name": "nhin di cho lanh",
            "sumCalories": null,
            "nutritionDiaryId": 1
        },
        code: Number
    }
    */
    try {
        const response = await addOne(data, token);
        switch (response.statusCode) {
            case 401:
                // Unauthorized
                return { status: 'failed', message: 'Lỗi xác minh, vui lòng đăng nhập lại', code: 401 };
            case 404:
                // Bad request in body
                return { status: 'failed', message: 'Không có thông tin', code: 404 };
            case 201:
                // success
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
        console.error(error, "(catch in function addOneLunch)");
        return { status: 'failed', message: 'Lỗi kết nối!', code: 500 };
    }
}