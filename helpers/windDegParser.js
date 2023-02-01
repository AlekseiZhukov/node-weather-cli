
const windDegParser = (deg) => {

  if (deg >= 11.25 && deg <= 33.75) {
    return 'Северный Северо-западный'
  }
  if (deg >= 33.76 && deg <= 56.25) {
    return 'Северо-западный'
  }
  if (deg >= 56.26 && deg <= 78.75) {
    return 'Западный Северо-западный'
  }
  if (deg >= 78.76 && deg <= 101.25) {
    return 'Западный'
  }
  if (deg >= 101.26 && deg <= 123.75) {
    return 'Западный Юго-западный'
  }
  if (deg >= 123.76 && deg <= 146.25) {
    return 'Юго-западный'
  }
  if (deg >= 146.26 && deg <= 168.75) {
    return 'Южный Юго-западный'
  }
  if (deg >= 168.76 && deg <= 191.25) {
    return 'Южный'
  }
  if (deg >= 191.26 && deg <= 213.75) {
    return 'Южный Юго-восточный'
  }
  if (deg >= 213.76 && deg <= 236.25) {
    return 'Юго-восточный'
  }
  if (deg >= 236.26 && deg <= 258.75) {
    return 'Восточный Юго-восточный'
  }
  if (deg >= 258.76 && deg <= 281.25) {
    return 'Восточный'
  }
  if (deg >= 281.26 && deg <= 303.75) {
    return 'Восточный Северо-восточный'
  }
  if (deg >= 303.76 && deg <= 326.25) {
    return 'Северо-восточный'
  }
  if (deg >= 326.26 && deg <= 348.75) {
    return 'Северный Северо-восточный'
  }
   return 'Северный'
}
export {windDegParser}