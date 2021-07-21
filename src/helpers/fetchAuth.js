import axios from 'axios';

export const authLogin = async (email, password) => {
    const urlLogin = `https://mi-rest-api13.herokuapp.com/api/auth/join`;
    const body = {email, password};
    const { data } = await axios.post(urlLogin, body);
    return data;
}

export const authRegister = async (name, email, password) => {
    const urlRegister = 'https://mi-rest-api13.herokuapp.com/api/auth/create';
    const body = { name, email, password };
    const { data } = await axios.post(urlRegister, body)
    return data;
}

export const authValidarToken = async () => {
    const url = 'https://mi-rest-api13.herokuapp.com/api/auth/renew';
    const token = localStorage.getItem('x-token') || '';
    const { data } = await axios.get(url, {
        headers: {'x-token': token}
    });
    return data;
};





