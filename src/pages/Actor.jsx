import React, {Component} from 'react';
import {Spinner, FirstSection, ErrorMsg} from '../components';
import {GetService} from '../service';
import './Movie.scss';
import './Actor.scss';

export default class MoviePage extends Component {

    getService = new GetService();

    state = {
        background: null,
        image: null,
        name: '',
        biography: '',
        birthday: '',
        birthPlace: '',
        popularity: 0,
        loading: false,
        error: false,
    }

    async setActor() {
        try {
            const {match: {params: {actorId}}} = this.props;
            const { biography, name, place_of_birth, profile_path, popularity, birthday, ...actor } = await this.getService.getActorById(actorId);
            console.log('actor: ', actor);

            if(actor.status_message) {
                this.setState({loading: false, error: 'Sorry, there are no results.'});
                return;
            }

            let images;
            if (place_of_birth) images = await this.getService.getImageByQuery(place_of_birth);
            else images = {hits: [null]};
            
            const image = profile_path ? this.getService.getPosterImage(profile_path) : '/img/no-image.png';
            const background = images.hits[0] ? images.hits[0].largeImageURL : null;
            const [, month, day, year] = new Date(birthday).toString().split(' ');
            const formatBirthday = `${day} ${month} ${year}`;

            this.setState({
                loading: false,
                background,
                name: name || 'There is no actor in your request.',
                image,
                biography,
                birthday: formatBirthday,
                birthPlace: place_of_birth,
                popularity: popularity.toFixed(1) * 10 > 100 ? 100 : popularity.toFixed(1) * 10,
            });
        } catch (error) {
            console.log(error);
            this.setState({loading: false, error: 'Ooops... something goes wrong!'});
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        this.setActor();
    }

    render() {
        const {background, image, name, biography, popularity, birthPlace, birthday, loading, error} = this.state;
        const params = {background, image, title: name, text: biography, rating: popularity};

        if(error) return <ErrorMsg msg={error}/>

        return (
            <main className="actor">
                {loading ? <Spinner className="spinner"/>
                 :  <>
                        <FirstSection {...params}>
                            <ul className="actor-info">
                                <p className="actor-info__birthday">Birthday: {birthday || 'Not found'}</p>
                                <p className="actor-info__birthday">Birth Place: {birthPlace || 'Not found'}</p>
                            </ul>
                        </FirstSection>
                    </>
                }
            </main>
        )
    }
}