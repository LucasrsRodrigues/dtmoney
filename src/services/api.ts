import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://drmoney.netlify.app/api'
})