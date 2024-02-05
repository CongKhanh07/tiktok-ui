import axios from 'axios';

//Custom baseURL
const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

//Method get
export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export default request;
