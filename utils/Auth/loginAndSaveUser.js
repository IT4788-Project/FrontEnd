// this function is used to login and save user in local storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logIn } from '../../services/api/auth';
import { saveUserToLocal } from '../../services/local/dataStore';

/*
    Return data for display in SignIn UI
*/
const loginAndSaveUser = async (username, password) => {
    try {
        const response = await logIn(username, password);
        switch (response.statusCode) {
            case 400:
                // Bad request
                return { status: 'failed', reason: 'Bad request' };
            case 401:
                // Unauthorized
                return { status: 'failed', reason: 'Unauthorized' };
            case 200:
                // success
                saveUserToLocal(username, password);
                return { status: 'success' };
            default:
                // null/500/300
                return { status: 'failed', reason: 'Unknown error' };
        }
    } catch (error) {
        console.error(error, "(catch in function loginAndSaveUser)");
        return { status: 'failed', reason: 'Unknown error' };
    }
}
export default loginAndSaveUser;