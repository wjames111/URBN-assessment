export const GET_TRIP = 'GET_TRIP';
export const getTrip = (trip) => ({
    type: GET_TRIP,
    payload: { trip },
});
