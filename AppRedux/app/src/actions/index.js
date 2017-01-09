import axios from 'axios'
const API_KEY_WEATHER = '8a995434df6e87c2922c19a9bf964555'
const ROOT_URL        = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY_WEATHER}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather (city) {
    //construct the url query string
    const url = `${ROOT_URL}&q=${city},us&mode=JSON`
    //perofrm the request with axios 
    const request = axios.get(url) 
    return {
        type: FETCH_WEATHER ,
        payload: request 
    }
}
