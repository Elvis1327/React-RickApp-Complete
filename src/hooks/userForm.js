import { useState } from 'react';

export const useForm = (initialState, validateForm) => {
    const [ valuesForm, setValuesLogin ] = useState(initialState);
    const [ errors, setErrors ] = useState({})
    
    const handleInputChange = (e) => {
        setValuesLogin({
            ...valuesForm,
            [e.target.name]: e.target.value
        });
    };
    const resetForm = () => {
        setValuesLogin(initialState);
    };

    const onBlurErrors = () => {
        setErrors(validateForm(valuesForm))
    }

    return { valuesForm, handleInputChange, resetForm, onBlurErrors, errors };
};




