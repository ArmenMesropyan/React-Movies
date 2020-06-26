import React, {Component} from 'react';
import {Home} from '../components';
import {GetService} from '../service';

export default class MoviesPage extends Component {
    state = {
        search: '',
    }
    getService = new GetService();

    getMovies = async() => {
        try {
            const movies = await this.getService.getMovies();
            return movies;
        } catch (error) {
            return Promise.reject(error);
        }
    }

    render() {
        return (
            <main className="movies">
                <Home getMovies={this.getMovies}/>
            </main>
        )
    }
}