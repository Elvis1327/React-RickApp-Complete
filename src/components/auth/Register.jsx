import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerAuth } from '../../actions/auth';
import { useForm } from '../../hooks/userForm';


export const Register = () => {
    const dispatch = useDispatch()
    
    const { handleInputChange, valuesForm } = useForm({
        name: 'rochy',
        email: 'test2@gmail.com',
        password: '123456'
    });
    const { name, email, password } = valuesForm;
    

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(registerAuth(name, email, password))

    }

    return (
        <div className="main-container">
            <div className="main-form-register">
                <h1>Register</h1>
                <hr />
                <form onSubmit={handleSubmit}>
                <div className="inputs">
                        <label>Name</label>
                        <input 
                            type="text" 
                            placeholder="Put your Email"
                            className="input"
                            autoComplete="none"
                            name="name"
                            value={name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="inputs">
                        <label>Email</label>
                        <input 
                            type="text" 
                            placeholder="Put your Email"
                            className="input"
                            autoComplete="none"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="inputs">
                        <label>Password</label>
                        <input 
                            type="text" 
                            placeholder="Put your Password"
                            className="input"
                            autoComplete="off"
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="boton-login"
                    >
                        Register
                    </button>
                </form>
                <span className="register-acount">Ya tienes cuenta? <Link to="/login"> Inicia Seccion</Link> </span>
            </div>
        </div>
    )
}
