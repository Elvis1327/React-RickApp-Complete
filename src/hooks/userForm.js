import { useState } from 'react';

export const useForm = (initialState) => {
    const [ valuesForm, setValuesLogin ] = useState(initialState);
    
    const handleInputChange = (e) => {
        setValuesLogin({
            ...valuesForm,
            [e.target.name]: e.target.value
        });
    };
    const resetForm = () => {
        setValuesLogin(initialState);
    };
    return { valuesForm, handleInputChange, resetForm};
};




