import { findUser } from "../../../services/api/user";

export const findUserById = async (data, token) => {
    /*
    Usage: tìm kiếm thông tin của user theo userId

    Params: data = {
        userId: string
    }
    token: string

    Return: {
        status: string
        message: string
        code: number
        data: 
        {
        "user": {
            "id": 12,
            "name": "Xhxixb",
            "email": "12@gmail.com",
            "password": "$2b$10$t4AggnxHht0Xut1VmgoOY.ogAh9Am4qLQwVz9cWDLTByQH1EE0Yau",
            "passwordChangedAt": null,
            "passwordCode": null,
            "codeResetExpires": null,
            "status": true,
            "followers": [],
            "followings": [
                12
            ],
            "createdAt": "2024-01-06T16:04:27.000Z",
            "updatedAt": "2024-01-06T16:04:27.000Z",
            "images": [
                {
                    "image_path": "https://firebasestorage.googleapis.com/v0/b/imagestore-f373f.appspot.com/o/077b4ff1-f105-4900-959b-6ad8aab7a07c.jpeg?alt=media&token=cb7e55f3-8c9b-4a89-8e7c-b5d2c2dd2a5f"
                }
            ]
        },
        "post": [
            {
                "id": 51,
                "countLike": 0,
                "countReport": 0,
                "countComment": 0,
                "content": "Bài viết của 12",
                "isPublic": true,
                "createdAt": "2024-01-06T16:05:05.000Z",
                "updatedAt": "2024-01-06T16:05:05.000Z",
                "author": 12,
                "comments": [],
                "images": [
                    {
                        "image_path": "https://firebasestorage.googleapis.com/v0/b/imagestore-f373f.appspot.com/o/2202a38a-8830-462a-8f5e-98bd967b70d7.jpeg?alt=media&token=35a5c648-1178-448f-ae18-1a7476c3fd91"
                    },
                    {
                        "image_path": "https://firebasestorage.googleapis.com/v0/b/imagestore-f373f.appspot.com/o/1a5563a1-211a-4840-9e8f-9cfefefaeaa1.jpeg?alt=media&token=17b5a4c4-73da-4afc-b516-2d132840797b"
                    }
                ],
                "like_posts": []
            }
        ]
    }
    }
    */
    try {
        const response = await findUser(data, token)
        switch (response.statusCode) {
            case 401:
                return { status: 'failed', message: 'Bạn không có quyền truy cập', code: 401, data: {} };
            default:
                return response.error ?
                    { status: 'failed', message: response.error, code: 500 }
                    :
                    { status: 'success', message: 'Thành công', code: 200, data: response.data };
        }
    } catch (e) {
        throw e
    }
}