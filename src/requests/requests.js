import axios from 'axios';
import API_PATHS from '../constants/apiPath';

export const getUserNames = async () => {
    try {
        const response = await axios.get(`${API_PATHS.userNames}/users`);
        return response;
    } catch (error) {
        console.log(error);
    }
};
