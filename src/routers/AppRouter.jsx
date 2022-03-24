import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { validarToken } from '../actions/auth';
import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';
import { Navbar } from '../components/shared/Navbar';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { RickRouter } from './RickRouter';


export const AppRouter = () => {
    const {check} = useSelector(state => state.auth);

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(validarToken())
    },[dispatch])

    return (
        <Router>
            <div>
                <Navbar />
                <Switch>

                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={Login}
                        isAuthenticated={check}
                        />
                    <PublicRoute 
                        exact 
                        path="/register" 
                        component={Register} 
                        isAuthenticated={check}
                        />

                    <PrivateRoute
                        path="/rick" 
                        component={RickRouter} 
                        isAuthenticated={check}
                        />
                    


                    <Redirect to="/login" />
                </Switch>
            </div>
        </Router>
    );
};



