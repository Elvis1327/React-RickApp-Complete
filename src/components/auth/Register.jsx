import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerAuth } from '../../actions/auth';
import { useForm } from '../../hooks/userForm';
import validator from 'validator';


export const Register = () => {
    const dispatch = useDispatch();
    const { checkSpinerForm } = useSelector(state => state.formSpiner);


    const validateForm = (valuesForm) => {
        let error = {name: '', email: '', password: ''};
        if(valuesForm.name.length < 5){
            error.name = 'El nombre debe de tener 5 o mas caracteres';
        }
        if(!validator.isEmail(valuesForm.email)){
            error.email = 'debe contener caracteres parecidos a un email';
        }
        if(valuesForm.password.length < 6){
            error.password = 'El campo debe de tener 6 o mas caracteres';
        }
        return error;
    }
    
    const { handleInputChange, valuesForm, onBlurErrors, errors } = useForm({
        name: '',
        email: '',
        password: ''
    }, validateForm);
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
                            onChange={handleInputChange}
                            onBlur={onBlurErrors}
                        />
                    </div>
                    {errors?.name && <p className="_form-errors">{errors.name}</p>}
                    <div className="inputs">
                        <label>Email</label>
                        <input 
                            type="text" 
                            placeholder="Put your Email"
                            className="input"
                            autoComplete="none"
                            name="email"
                            onChange={handleInputChange}
                            onBlur={onBlurErrors}
                        />
                        {errors?.email && <p className="_form-errors">{errors.email}</p>}
                    </div>
                    <div className="inputs">
                        <label>Password</label>
                        <input 
                            type="text" 
                            placeholder="Put your Password"
                            className="input"
                            autoComplete="off"
                            name="password"
                            onChange={handleInputChange}
                            onBlur={onBlurErrors}
                        />
                    </div>
                    {errors?.password && <p className="_form-errors">{errors.password}</p>}
                    {(checkSpinerForm === true)
                    ?
                    (<div className="_form-spiner">
                        <div className="_form-loader"></div>
                    </div>)
                    :
                    <button
                        type="submit"
                        className="boton-login"
                    >
                        Register
                    </button>
                    }
                </form>
                <span className="register-acount">Ya tienes cuenta? <Link to="/login"> Inicia Seccion</Link> </span>
            </div>
        </div>
    )
}
