import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: {
        'Content-Type': 'application/json'
    }
});

// We can add interceptors to request.
axiosInstance.interceptors.request.use((config) => {
    return config;
})

// we can add interceptors to response.
axiosInstance.interceptors.response.use((res) => {
    return res;
})