import React, {Component} from 'react';
import {Home, Search, MoviesList} from '../components';
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

    onInputChange = (e) => {
        const {value} = e.target;
        this.setState({search: value});
    }

    render() {
        const {search} = this.state;
        return (
            <main className="movies">
                <Home getMovies={this.getMovies}/>
                <Search onInputChange={this.onInputChange}/>
                <MoviesList search={search} getMovies={this.getMovies}/>
            </main>
        )
    }
}