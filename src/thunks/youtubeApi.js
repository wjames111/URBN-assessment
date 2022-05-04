import axios from 'axios';
import { setLoading, getVideos } from '../actions/videos';

const API_KEY = 'AIzaSyDJydwCXZ1QY5erjdGlAlQ3xkpLT8YRuMQ';

export const getVideosRequest = (term, count, safety) => async dispatch => {
    dispatch(setLoading(true));
    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                maxResults: count,
                key: API_KEY,
                q: term,
                safeSearch: safety,
            },
        });
        dispatch(getVideos(response.data.items)); // Change name
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
    }
};
