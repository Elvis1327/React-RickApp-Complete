import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RickScreen } from '../components/rick/RickScreen';
import { RickSearch } from '../components/rick/RickSearch';

export const RickRouter = () => {
    return (
        <div>
            <Switch>
                <Route 
                    exact 
                    path="/rick/screen" 
                    component={RickScreen} 
                    />

                <Route 
                    exact 
                    path="/rick/search" 
                    component={RickSearch} 
                    />
                
                <Redirect to="/rick/screen" />
            </Switch>
        </div>
    )
}
