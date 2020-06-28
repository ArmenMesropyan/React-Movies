export default class GetService {
    config = {
        movieAPI: 'https://api.themoviedb.org/3/',
        pixabayAPI: 'https://pixabay.com/api/',
        movieKey: 'b3b72e264bfde0ee393669648c9ca8a5',
        pixabayKey: '15212282-8558594e4fc03d75ba0bb8a93',
        imageURL: 'http://image.tmdb.org/t/p/',
        backgroundSize: 'w1280',
        posterSize: 'w500',
    }

    async fetchData(endpoint) {
        try {
            const data = await fetch(endpoint).then(data => data.json());
            return data;
        } catch (error) {
            return Promise.reject(error);
        }
    }

    getMovies = async(page) => {
        try {
            const { movieAPI, movieKey } = this.config;
            const endpoint = `${movieAPI}movie/popular?api_key=${movieKey}&language=en-US&page=${page}`;
            const data = await this.fetchData(endpoint)
            return data;
        } catch (error) {
            return Promise.reject(error);
        }
    }

    getMoviesByQuery = async(query, page) => {
        try {
            const { movieAPI, movieKey } = this.config;
            const endpoint = `${movieAPI}search/movie?api_key=${movieKey}&language=en-US&query=${query}&page=${page}`;
            const data = await this.fetchData(endpoint)
            return data;
        } catch (error) {
            return Promise.reject(error);
        }
    }

    getMovieById = async(id, path = '') => {
        try {
            const { movieAPI, movieKey } = this.config;
            const endpoint = `${movieAPI}movie/${id}${path}?api_key=${movieKey}&language=en-US`;
            const data = await this.fetchData(endpoint)
            return data;
        } catch (error) {
            return Promise.reject(error);
        }
    }

    getActorById = async(id) => {
        try {
            const { movieAPI, movieKey } = this.config;
            const endpoint = `${movieAPI}person/${id}?api_key=${movieKey}&language=en-US`;
            const data = await this.fetchData(endpoint)
            return data;
        } catch (error) {
            return Promise.reject(error);
        }
    }

    getImageByQuery = async(query) => {
        try {
            const { pixabayAPI, pixabayKey } = this.config;
            const endpoint = `${pixabayAPI}?key=${pixabayKey}&q=${encodeURIComponent(query)}&image_type=photo&min_width=1280&`;
            const data = await this.fetchData(endpoint)
            return data;
        } catch (error) {
            return Promise.reject(error);
        }
    }

    getBackgroundImage(url) {
        const { imageURL, backgroundSize } = this.config;
        return `${imageURL}${backgroundSize}${url}`
    }

    getPosterImage(url) {
        const { imageURL, posterSize } = this.config;
        return `${imageURL}${posterSize}${url}`
    }
}