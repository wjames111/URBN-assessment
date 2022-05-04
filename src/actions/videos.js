export const SET_LOADING = 'SET_LOADING';
export const setLoading = (isLoading) => ({
    type: SET_LOADING,
    payload: { isLoading },
});

export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const setSearchTerm = (term) => ({
    type: SET_SEARCH_TERM,
    payload: { term },
});

export const SET_SEARCH_COUNT = 'SET_SEARCH_COUNT';
export const setSearchCount = (count) => ({
    type: SET_SEARCH_COUNT,
    payload: { count },
});

export const GET_VIDEOS = 'GET_VIDEOS';
export const getVideos = (allVideos) => ({
    type: GET_VIDEOS,
    payload: { allVideos },
});