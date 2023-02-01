import chalk from "chalk"
import dedent from "dedent-js"
import {windDegParser} from "../helpers/windDegParser.js";

const printError = (error) => {
  console.log( dedent`${ chalk.bgRed(' ERROR: ')} ${error}` )
}

const printSuccess = (message) => {
  console.log( dedent`${ chalk.bgGreen(' SUCCESS: ')} ${message}` )
}

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(' HELP: ')}
    Без параметров - вывод погоды
    -s [CITY] для установки города
    -h для вывода помощи
    -t [API_KEY] для сохранения токена
    `
  )
}

const printWeather = (weather) => {
  console.log(dedent(`${chalk.bgCyan(` Погода в городе ${weather.name}: `)} ${weather.weather[0].description}
    ${chalk.bgGreen(' температура: ')} ${weather.main.temp}\u00B0C (ощущается как ${weather.main.feels_like}\u00B0C)
    ${chalk.bgGreen(' давление: ')} ${weather.main.pressure * 0.75} мм.рт.столба
    ${chalk.bgGreen(' влажность: ')} ${weather.main.humidity}%
    ${chalk.bgGreen(' ветер: ')} \"${windDegParser(weather.wind.deg)}\" ${weather.wind.speed}м/сек. ${weather.wind.gust ? `с порывами до ${weather.wind.gust} м/сек.`: ''} 
    `))
}

export { printError, printSuccess, printHelp, printWeather }