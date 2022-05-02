import { GET_TRIP } from '../actions/trip';

export const trips = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_TRIP: {
            const { trip } = payload;
            return {
                ...state,
                trip,
            };
        }
        default: {
            return state;
        }
    }
};
