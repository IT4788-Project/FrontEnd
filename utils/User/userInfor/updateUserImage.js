import { updateImage } from "../../../services/api/user";

export const updateUserImage = async (data, token) => {
    /*
    Usage: cập nhật ảnh đại diện người dùng

    Params:
    data = {
        "image_path": string
    }
    token = string

    Return:
    status: string
    message: string
    code: number
    data: object
    */
    try {
        const response = await updateImage(data, token)
        switch (response.statusCode) {
            case 401:
                return { status: 'failed', message: 'Bạn không có quyền truy cập', code: 401, data: {} };
            case 400:
                return { status: 'failed', message: 'Yêu cầu không hợp lệ', code: 400, data: {} };
            case 200:
                return { status: 'success', message: 'Cập nhật ảnh đại diện thành công', code: 200, data: response.data };
            default:
                return { status: 'failed', message: 'Lỗi không xác định hoặc máy chủ bảo trì', code: 500, data: {} };
        }
    } catch (e) {
        throw e
    }
}