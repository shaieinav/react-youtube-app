import axios from 'axios';

const KEY = 'AIzaSyCHXez1eyHFAqwwu_K0btxRIbbmLZU8PnA';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY,
    }
});