import React, {Component} from 'react';
import {Home} from '../components';

export default class MoviesPage extends Component {
    state = {
        search: '',
    }

    render() {
        return (
            <main className="movies">
                <Home />
            </main>
        )
    }
}