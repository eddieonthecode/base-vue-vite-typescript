import axios from 'axios';
import { API_HOST } from './api-host';

export const axiosIns = axios.create({
    baseURL: API_HOST,
    headers: {Accept: 'application/json' }
});

// Thực hiện xử lý ngay trước khi gửi request
axiosIns.interceptors.request.use(async (req) => {
    console.log('Trước khi request');
    return req;
})

// Thực hiện xử lý ngay sau khi nhận response
axiosIns.interceptors.request.use(async (res) => {
    console.log('Sau khi response');
    return res;
})

