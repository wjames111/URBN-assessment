import { GET_STATION } from '../actions/station';

export const stations = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_STATION: {
            const { station } = payload;
            return {
                ...state,
                station,
            };
        }
        default: {
            return state;
        }
    }
};
