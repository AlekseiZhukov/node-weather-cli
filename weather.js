#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import {printHelp, printSuccess, printError, printWeather} from "./sevices/log.service.js";
import {getKeyValue, saveKeyValue, TOKEN_DICTIONARY} from "./sevices/storage.service.js";
import {getWeather} from "./sevices/api.service.js";


const saveToken = async (token) => {
  if (!token.length) {
    return printError('Не передан token')
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token)
    printSuccess('token сохранен')
  } catch (e) {
    printError(e.message)
  }
}

const saveCity = async (city) => {
  if (!city.length) {
    return printError('Не указан город')
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city)
    printSuccess('Город сохранен')
  } catch (e) {
    printError(e.message)
  }
}

const getForcast = async () => {
  try {
    const city = await getKeyValue(TOKEN_DICTIONARY.city)
    const weather = await getWeather(process.env.CITY ?? city)
    printWeather(weather)
  } catch (e) {
    if (e?.response?.status === 400 ) {
      printError("Неверно указан город")
    } else if (e?.response?.status === 401) {
      printError("Неверно указан token")
    } else {
      printError(e.message)
    }
  }

}

const initCLI = () => {
  const args = getArgs(process.argv)

  if (args.h) {
    return printHelp()
  }
  if (args.s) {
    return saveCity(args.s)
  }
  if (args.t) {
    return saveToken( args.t)
  }
  return getForcast()
}

initCLI()