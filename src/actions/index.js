import axios from 'axios';

const API_KEY = '2f492897118fe77f9f5126a7752ec2a1';
//ES6 instead of +API_KEY
const ROOT_URL= `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){
    console.log(city);
    const url =`${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}