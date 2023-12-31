import { getDishByCategory } from "../../../services/api/dish";


export const getDishByCate = async (data, token) => {
    /*
    Usage: thong tin mon an theo category
    Params: 
    data: {
        dishCategoryId: number
    }
    token: string

    Return:
    status: string,
    message: string,
    code: number,
    "data": {
        "id": 2,
        "name": "bữa sang",
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
        const response = await getDishByCategory(data, token);
        switch (response.statusCode) {
            case 404:
                // Not found
                return { status: 'failed', message: 'Không tìm thấy danh mục món ăn', code: 404 };
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
    } catch (error) {
        console.log(error, "in getDishByCate");
        throw error;
    }
}