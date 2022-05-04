import axios from 'axios';
import { setLoading, getVideos } from '../actions/videos';

const API_KEY = 'AIzaSyDJydwCXZ1QY5erjdGlAlQ3xkpLT8YRuMQ';

export const getVideosRequest = (term, count) => async dispatch => {
    dispatch(setLoading(true));
    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                maxResults: count,
                key: API_KEY,
                q: term,
            }
        });
        console.log('youtube videos', response);
        dispatch(getVideos(response));
        dispatch(setLoading(false));
    } catch (error) {
        console.log(error);
        dispatch(setLoading(false));
    }
};