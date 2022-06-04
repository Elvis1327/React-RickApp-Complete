import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar, RickSearch, RickScreen } from '../components';


export const AppRouter = () => {

    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                    <Route path='/search' element={<RickSearch />} />
                    <Route path='/' element={<RickScreen />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};



