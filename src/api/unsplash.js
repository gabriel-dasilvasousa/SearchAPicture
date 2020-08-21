import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID lX1s38hRz_juI4g8IR9PNRTjOArphy2R2nKGvTMR8DA'
    }
});