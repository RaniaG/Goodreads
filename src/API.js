import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.post['Content-Type'] = 'application/json';


export const login = (userCredentials) => {
    return axios.post('/users/login', userCredentials);
}

export const signup = (user) => {
    return axios.post('/users/', user, { headers: { 'content-type': 'multipart/form-data' } });
}

export const getUserInfo = () => {
    return axios.get('/users/', { headers: { "Authorization": `Bearer ${localStorage.getItem('AwesomeReads')}` } });
}