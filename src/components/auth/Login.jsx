import React from 'react';
import { useForm } from '../../hooks/userForm';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAuth } from '../../actions/auth';

export const Login = () => {
    const dispatch = useDispatch();


    const { handleInputChange,  valuesForm } = useForm({
        email: 'test1@gmail.com',
        password: '123456'
    });
    const { email, password } = valuesForm;

    const handleLogin = (e) => {
        e.preventDefault();

        dispatch(loginAuth(email, password))

    }

    return (
        <div className="main-container">
            <div className="main-form-login">
                <h1>Login</h1>
                <hr />
                <form onSubmit={handleLogin}>
                    <div className="inputs">
                        <label>Email</label>
                        <input 
                            type="text" 
                            placeholder="Put your Email"
                            className="input"
                            autoComplete="none"
                            name="email"
                            onChange={handleInputChange}
                            value={email}
                        />
                    </div>
                    <div className="inputs">
                        <label>Password</label>
                        <input 
                            type="text" 
                            placeholder="Put your Password"
                            className="input"
                            autoComplete="none"
                            name="password"
                            onChange={handleInputChange}
                            value={password}
                        />
                    </div>
                    <button
                        type="submit"
                        className="boton-login"
                    >
                        Login
                    </button>
                </form>
                <span className="login-acount">
                    Aun no tienes cuenta? 
                    <Link to="/register"> Registrate</Link>
                </span>
            </div>
        </div>
    )
}
