import React from 'react';
import { useForm } from '../../hooks/userForm';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAuth } from '../../actions/auth';
import validator from 'validator';

export const Login = () => {
    const dispatch = useDispatch();
    const { checkSpinerForm } = useSelector(state => state.formSpiner);

    const validateForm = (valuesForm) => {
        const errors = {password: '', email: ''};
        if(valuesForm.password.length < 6){
            errors.password = 'El campo debe de tener 6 o mas caracteres'
        }if(!validator.isEmail(valuesForm.email)){
            errors.email = 'debe contener caracteres parecidos a un email'
        }
        return errors;
    }
    const { handleInputChange, valuesForm, onBlurErrors, errors } = useForm({
        email: 'test1@gmail.com',
        password: '123456'
    }, validateForm);
    const { email, password } = valuesForm;

    const handleLogin = (e) => {
        e.preventDefault();

        dispatch(loginAuth(email, password))
    };


    return (
        <div className="main-container">
            <div className="main-form-login">
                <h1>Login</h1>
                <hr />
                <form onSubmit={handleLogin}>
                    <div className="inputs">
                        <label>Email</label>
                        <input 
                            type="email" 
                            placeholder="Put your Email"
                            className="input"
                            autoComplete="none"
                            name="email"
                            onChange={handleInputChange}
                            value={email}
                            onBlur={onBlurErrors}
                        />
                    </div>
                    {errors?.email && <p className="_form-errors">{errors.email}</p>}
                    <div className="inputs">
                        <label>Password</label>
                        <input 
                            type="password" 
                            placeholder="Put your Password"
                            className="input"
                            autoComplete="none"
                            name="password"
                            onChange={handleInputChange}
                            value={password}
                            onBlur={onBlurErrors}
                        />
                    {errors?.password && <p className="_form-errors">{errors.password}</p>}
                    </div>
                    {(checkSpinerForm === true) 
                        ? (<div className="_form-spiner">
                            <div className="_form-loader"></div>
                        </div>)
                        : 
                        (<button
                        type="submit"
                        className="boton-login"
                        >
                            Login
                        </button>)
                    }
                </form>
                <span className="login-acount">
                    Aun no tienes cuenta? 
                    <Link to="/register"> Registrate</Link>
                </span>
            </div>
        </div>
    )
}
