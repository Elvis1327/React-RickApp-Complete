import axios from 'axios';

export const authLogin = async (email, password) => {
    const urlLogin = `https://fullstack-project13.herokuapp.com/api/auth/login`;
    const body = {email, password};
    const { data } = await axios.post(urlLogin, body);
    return data;
}

export const authRegister = async (nombre, email, password) => {
    const urlRegister = 'https://fullstack-project13.herokuapp.com/api/auth/register';
    const body = { nombre, email, password };
    const { data } = await axios.post(urlRegister, body);
    return data;
}

export const authValidarToken = async () => {
    const url = 'https://fullstack-project13.herokuapp.com/api/auth/validate-token';
    const token = localStorage.getItem('x-token') || '';
    const { data } = await axios.get(url, {
        headers: {'x-token': token}
    });
    return data;
};





