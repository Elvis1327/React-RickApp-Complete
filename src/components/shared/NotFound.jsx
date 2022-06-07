import React from 'react';
import { useNavigate } from 'react-router-dom';

import notFoundImg from '../../assets/not-found.png';

export const NotFound = () => {

    const navigate = useNavigate();

    return (
        <div className="_not-found-container">
            <img src={notFoundImg} alt="-not-found-pic" />
            <span>
                We can't seem to ifnd the page you're looking for.
            </span>
            <button className="_button-not-found" onClick={() => navigate(-1)}>
                Go Back
            </button>
        </div>
    )
}

