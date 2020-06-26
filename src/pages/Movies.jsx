import React, {Component} from 'react';
import {Home, Search} from '../components';
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
        console.log('search: ', search);
        return (
            <main className="movies">
                <Home getMovies={this.getMovies}/>
                <Search onInputChange={this.onInputChange}/>
            </main>
        )
    }
}