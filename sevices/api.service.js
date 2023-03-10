//import https from 'https'
import axios from 'axios'
import {getKeyValue, TOKEN_DICTIONARY} from "./storage.service.js";


const getWeather = async (city) => {
  const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token)
  if (!token) {
    throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]')
  }
  if (!city) {
    throw new Error('Не указан город, задайте его через команду -s [CITY]')
  }
  const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: city,
      appid: token,
      lang: 'ru',
      units: 'metric'
    }
  })

  return data

  // получение данных с помощью https---------------------------------------------------
  /*const url = new URL("https://api.openweathermap.org/data/2.5/weather")
  url.searchParams.append('q', city)
  url.searchParams.append('APPID', token)
  url.searchParams.append('lang', 'ru')
  url.searchParams.append('units', 'metric')
  https.get(url, (response) => {
    let res = ''
    response.on('data', (chunk) => {
      res += chunk
    })
    response.on('end', () => {
      console.log(JSON.parse(res))
    })
  })*/
  //-----------------------------------------------------------------------------------
}

export { getWeather }