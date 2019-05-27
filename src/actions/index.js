import axios from 'axios';

const API_KEY = '58a8d3884a5b3babeeddb9e9acba9395';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},in`;
	const request = axios.get(url);

	console.log('Request', request)

	return{
		type: FETCH_WEATHER,
		payload: request
	}
}