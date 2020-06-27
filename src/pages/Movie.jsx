import React, {Component} from 'react';

export default class MoviePage extends Component {

    componentDidMount() {
        const {match: {params: {moviesId}}} = this.props;
        console.log(moviesId);
    }

    render() {
        console.log(this.props);
        return (
            <main className="movie">
                I'm movie!
            </main>
        )
    }
}