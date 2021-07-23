import { authLogin, authRegister, authValidarToken } from "../helpers/fetchAuth";
import { TYPES } from "../types/types"
import Swal from 'sweetalert2';

export const loginAuth = (email, password) => {
    return async (dispatch) => {

            const info = await authLogin(email, password);
            console.log(info)
            if(info.ok === true){
                localStorage.setItem('x-token', info.token)
                dispatch(login({
                    name: info.name,
                    email: info.email
                }));
            }else{
                Swal.fire('error', info.msg, 'error')
            }
        }
};
const login = (user) => {
    return {
        type: TYPES.authLogin,
        payload: user
    };
};

export const registerAuth = (name, email, password) => {
    return async (dispatch) => {
        const resp = await authRegister(name, email, password);
        const bodyRegister = { name: resp.name, email: resp.email }
        if(resp.ok === true){
            localStorage.setItem('x-token', resp.token)
        };
        dispatch(register(bodyRegister))
    }
}

const register = (user) => {
    return {
        type: TYPES.authRegister,
        payload: user
    }
};


export const validarToken = () => {
    return async(dispatch) => {
        const resp = await authValidarToken();
        dispatch(login({
            name: resp.name,
            id: resp.uid
        }));
        dispatch(register({
            name: resp.name,
            id: resp.uid
        }))
    }
}


export const logoutAcount = () => {
    return async (dispatch) => {
        localStorage.clear();
        dispatch(logout());
    }
}

const logout = () => {
    return {
        type: TYPES.logOut,
        payload: false
    }
}





