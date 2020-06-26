import React from 'react';
import './App.scss';
import {MoviesPage} from './pages';
import {Header} from './components';

const App = () => {
    return (
        <>
            <Header />
            <MoviesPage />
        </>
    );
}

export default App;