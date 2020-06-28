import React, {Component} from 'react';
import {Spinner, FirstSection} from '../components';
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
            const { biography, name, place_of_birth, profile_path, popularity, birthday } = await this.getService.getActorById(actorId);

            const images = await this.getService.getImageByQuery(place_of_birth);
            const image = this.getService.getPosterImage(profile_path);
            const background = images.hits[0] ? images.hits[0].largeImageURL : null;
            const [, month, day, year] = new Date(birthday).toString().split(' ');
            const formatBirthday = `${day} ${month} ${year}`;

            this.setState({
                loading: false,
                background,
                name,
                image,
                biography,
                birthday: formatBirthday,
                birthPlace: place_of_birth,
                popularity,
            });
        } catch (error) {
            console.log(error);
            this.setState({loading: false, error: true});
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        this.setActor();
    }

    render() {
        const {background, image, name, biography, popularity, birthPlace, birthday, loading, error} = this.state;
        const params = {background, image, title: name, text: biography, rating: Math.round(popularity * 10)};

        return (
            <main className="actor">
                {loading ? <Spinner className="spinner"/>
                 :  <>
                        <FirstSection {...params}>
                            <ul className="actor-info">
                                <p className="actor-info__birthday">Birthday: {birthday}</p>
                                <p className="actor-info__birthday">Birth Place: {birthPlace}</p>
                            </ul>
                        </FirstSection>
                    </>
                }
            </main>
        )
    }
}