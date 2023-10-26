import axios from 'axios';

const api = axios.create({
    baseURL: 'https://arriving-previously-seahorse.ngrok-free.app' 
});

export default api;
