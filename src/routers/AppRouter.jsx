import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar, RickSearch, RickScreen, NotFound } from '../components';


export const AppRouter = () => {

    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                    <Route path='/search' element={<RickSearch />} />
                    <Route path='/' element={<RickScreen />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};



