import React from 'react';
import './App.scss';
import {MoviesPage, MoviePage} from './pages';
import {Header} from './components';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <>
                <Header />
                <Switch>
                    <Route path='/' component={MoviesPage} exact></Route>
                    <Route path='/:moviesId' component={MoviePage} exact></Route>
                    {/* <Route component={NotFound}></Route> */}
                </Switch>
            </>
        </Router>
    );
}

export default App;