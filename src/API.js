import axios from 'axios';
import { Helper } from './Helper';


axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.post['Content-Type'] = 'application/json';


export const login = (userCredentials, history) => {
    const token = axios.post('/users/login', userCredentials);
    localStorage.setItem('AwesomeReads', token.data);
    history.push('/profile');
}

export const signup = async (user, history) => {
    const token = await axios.post('/users/', user, { headers: { 'content-type': 'multipart/form-data' } });
    localStorage.setItem('AwesomeReads', token.data);
    history.push('/profile');
}



export const getUserInfo = async () => {

    debugger;
    const res = await axios.get('/users/', { headers: { "Authorization": `Bearer ${localStorage.getItem('AwesomeReads')}` } });
    debugger;
    const user = res.data;
    const stringPhoto = Helper.arrayBufferToBase64(user.photo.data);
    const encodedPhoto = `data:${user.photo.contentType};base64,${stringPhoto}`;
    return { ...res.data, photo: encodedPhoto };
}
