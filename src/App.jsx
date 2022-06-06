import React from 'react';
import { AppRouter } from './routers/AppRouter';
import { RickProvider } from './context/RickProvider';

export const App = () => {

    return (
        <>
          <RickProvider>
            <AppRouter />
          </RickProvider>
        </>
    )
}





