import { SET_LOADING, SET_SEARCH_TERM, SET_SEARCH_COUNT, GET_VIDEOS } from '../actions/videos';

const initialState = {
    isLoading: false,
    searchTerm: '',
    searchCount: 10,
    allVideos: {},
};

export const videos = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_LOADING:
            {
                const { isLoading } = payload;
                return {
                    ...state,
                    isLoading,
                };
            }
        case SET_SEARCH_TERM:
            {
                const { term } = payload;
                return {
                    ...state,
                    searchTerm: term,
                };
            }
        case SET_SEARCH_COUNT:
            {
                const { count } = payload;
                return {
                    ...state,
                    searchCount: count,
                };
            }
        case GET_VIDEOS:
            {
                const { allVideos } = payload;
                return {
                    ...state,
                    allVideos,
                };
            }
        default:
            {
                return state;
            }
    }
};