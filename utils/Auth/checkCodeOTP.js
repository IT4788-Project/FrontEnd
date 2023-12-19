// this function is used to send OTP code typed by user

import { checkCode } from "../../services/api/auth";

export const checkCodeOTP = async (code) => {
    try {
        const response = await checkCode(code);
        switch (response.statusCode) {
            case 400:
                // Bad request in body
                return { status: 'failed', reason: 'Code không chính xác' };
            case 200:
                // success
                return { status: 'success' };
            case 500:
                // internal server error
                return { status: 'failed', reason: 'Server is busy, check again later !' };
            default:
                // null/500/300
                return { status: 'failed', reason: 'Unknown error' };
        }
    } catch (error) {
        console.error(error, "(catch in function checkCodeOTP)");
        return { status: 'failed', reason: 'Unknown error' };
    }
}