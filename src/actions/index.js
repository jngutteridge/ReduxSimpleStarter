import axios from 'axios';

const API_KEY = '4b3bd6db190128a907f09ee437bdc775';
const ENTRY_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {

    const url = `${ENTRY_URL}&q=${city},GB`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
