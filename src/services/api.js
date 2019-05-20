import axios from 'axios';

const api = axios.create({
    baseURL: 'https://curso-react-backend.herokuapp.com',
});

export default api;