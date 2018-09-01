import axios from 'axios';
const API_KEY = '3a0088d2cfbfdec91f49f5a62c6dd764';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const COUNTRY_CODE = 'us';
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url =`${ROOT_URL}&q=${city},${COUNTRY_CODE}`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request,
    };
}