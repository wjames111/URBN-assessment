export const GET_STATION = 'GET_STATION';
export const getStation = (station) => ({
	type: GET_STATION,
	payload: { station },
});
