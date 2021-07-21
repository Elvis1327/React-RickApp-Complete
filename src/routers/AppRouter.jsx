import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { validarToken } from '../actions/auth';
import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';
import { RickScreen } from '../components/rick/RickScreen';
import { RickSearch } from '../components/rick/RickSearch';
import { Navbar } from '../components/shared/Navbar';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


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
                        exact
                        path="/rick-search" 
                        component={RickSearch} 
                        isAuthenticated={check}
                        />
                    
                    <Route
                        exact
                        path="/rick-screen"
                        component={RickScreen}
                    />


                    <Redirect to="/login" />
                </Switch>
            </div>
        </Router>
    );
};



