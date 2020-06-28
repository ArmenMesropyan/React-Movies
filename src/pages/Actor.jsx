import React, {Component} from 'react';
import {Spinner} from '../components';
import {GetService} from '../service';
import './Movie.scss';

export default class MoviePage extends Component {

    getService = new GetService();

    state = {
        movie: null,
        cast: null,
        crew: null,
        title: '',
        loading: false,
        error: false,
        trailers: null,
    }

    async setActor() {
        try {
            const {match: {params: {actorId}}} = this.props;
            const {
                biography,
                name,
                place_of_birth,
                profile_path,
                popularity,
                birthday } = await this.getService.getActorById(actorId);
                
            const {hints: [background]} = await this.getService.getImageByQuery(place_of_birth);
            console.log('background: ', background);
            
        } catch (error) {
            this.setState({loading: false, error: true});
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        this.setActor();
    }

    render() {
        const {loading, error} = this.state;

        return (
            <div>Actor page</div>
            // <main className="actor">
            //     {loading ? <Spinner className="actor__spinner"/>
            //      :  <>
            //             <BreadCrumbs title={title} movieId={moviesId}/>
            //             <MovieHome movie={movie} getService={this.getService} crew={crew}/>
            //             <TrailersList trailers={trailers}/>
            //             <ActorsList actors={cast} getService={this.getService}/>
            //         </>
            //     }
            // </main>
        )
    }
}