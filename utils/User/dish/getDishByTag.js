import { getDishByTag as getByTag } from "../../../services/api/dish";

export const getDishByTag = async (data, token) => {
    /*
    Usage: tim thong tin mon an theo tag
    Params: 
    data: {
        tagId: number
    }
    token: string

    Return:
    status: string,
    message: string,
    code: number,
    "data": {
        "id": 1,
        "name": "Calo thấp",
        "createdAt": "2023-12-28T10:14:54.000Z",
        "updatedAt": "2023-12-28T10:14:54.000Z",
        "dishes": [
            {
                "id": 1,
                "name": "Gà rán nguyên con",
                "dish_description": "Gà rán nguyên con nhúng mỡ nóng, ăn kèm với rau sống và nước chấm",
                "images": [
                    {
                        "id": 1,
                        "image_path": null
                    }
                ],
                "tags": [
                    {
                        "id": 1,
                        "name": "Calo thấp"
                    },
                    {
                        "id": 2,
                        "name": "Đạm cao"
                    },
                    {
                        "id": 3,
                        "name": "Dễ nấu"
                    }
                ]
            },
            {
                "id": 2,
                "name": "Lợn luộc",
                "dish_description": "Gà rán nguyên con nhúng mỡ nóng, ăn kèm với rau sống và nước chấm",
                "images": [
                    {
                        "id": 2,
                        "image_path": null
                    }
                ],
                "tags": [
                    {
                        "id": 1,
                        "name": "Calo thấp"
                    },
                    {
                        "id": 2,
                        "name": "Đạm cao"
                    }
                ]
            },
            {
                "id": 3,
                "name": "Rượu mận",
                "dish_description": "Gà rán nguyên con nhúng mỡ nóng, ăn kèm với rau sống và nước chấm",
                "images": [],
                "tags": [
                    {
                        "id": 1,
                        "name": "Calo thấp"
                    },
                    {
                        "id": 2,
                        "name": "Đạm cao"
                    },
                    {
                        "id": 3,
                        "name": "Dễ nấu"
                    }
                ]
            }
        ]
    }
    */
    try {
        const response = await getByTag(data, token);
        switch (response.statusCode) {
            case 404:
                // not found
                return { status: 'failed', message: 'Không tìm thấy món ăn nào', code: 404 };
            case 401:
                // Unauthorized
                return { status: 'failed', message: 'Lỗi xác minh, vui lòng đăng nhập lại', code: 401 };
            case 200:
                // success
                // return data for double check
                return { status: 'success', data: response.data, code: 200 };
            case 500:
                // internal server error
                return { status: 'failed', message: 'Lỗi máy chủ, vui lòng thử lại sau', code: 500 };
            default:
                return { status: 'failed', message: 'Lỗi không xác định, vui lòng thử lại sau', code: 500 };
        }
    }
    catch (error) {
        console.log(error, "in getDishByTag");
        throw error;
    }
}