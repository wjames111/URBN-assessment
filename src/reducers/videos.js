import { SET_LOADING, SET_SEARCH_TERM, SET_SEARCH_COUNT, SET_SEARCH_SAFETY, GET_VIDEOS, SELECTED_VIDEO } from '../actions/videos';

const initialState = {
    isLoading: false,
    searchTerm: '',
    searchCount: 10,
    searchSafety: 'none',
    allVideos: [],
    currentVideo: {},
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
        case SET_SEARCH_SAFETY:
            {
                const { safety } = payload;
                return {
                    ...state,
                    searchSafety: safety,
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
        case SELECTED_VIDEO:
            {
                const { video } = payload;
                return {
                    ...state,
                    currentVideo: video,
                };
            }
        default:
            {
                return state;
            }
    }
};