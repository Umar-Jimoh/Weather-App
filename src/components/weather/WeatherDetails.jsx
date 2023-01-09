import { useContext } from 'react'
import WeatherIcon from 'react-open-weather-icons'
import WeatherContext from '../../Contexts/WeatherContext'
import WeatherStatsList from './WeatherStatsList'
import Spinner from '../shared/Spinner'
import NotFound from './NotFound'
import NetworkError from './NetworkError'
import IpGeolocationError from './IPGeolocationError'

function WeatherDetails() {
  const { isLoading, weatherData, notFound, networkError, ipGeolocationError } =
    useContext(WeatherContext)

  const temp = Math.trunc(weatherData.main?.temp - 273.15)

  // Get Weather date
  const localDate = new Date()
  const localTime = localDate.getTime()
  const localOffset = localDate.getTimezoneOffset() * 60000
  const utc = localTime + localOffset
  const countryDt = utc + (1000 * weatherData.timezone)
  const weatherDate = new Date(countryDt).toDateString().slice(0, 10)
  

  return isLoading ? (<Spinner />) : networkError ? (<NetworkError />) : ipGeolocationError ? (<IpGeolocationError />) : notFound ? ( <NotFound />) : (
    <div>
      <h1 className='city'>
        {weatherData.name},<span>{weatherData.sys.country}</span>
      </h1>
      <p className='date'>{weatherDate}</p>
      <div className='weather'>
        <WeatherIcon
          name={weatherData.weather[0].icon}
          className='my-awesome-icon weather--icon'
        />
        <div className='weather--temp'>
          <p className='weather--temp-degree'>{temp}°C</p>
          <h2>{weatherData.weather[0].description}</h2>
        </div>
      </div>
      <WeatherStatsList data={weatherData}/>
    </div>
  )
}

export default WeatherDetails