import WeatherStatsItem from './WeatherStatsItem'
import feelsLikeIcon from '../../assets/feelsLike.svg'
import pressureIcon from '../../assets/pressure.svg'
import humidityIcon from '../../assets/humidity.svg'
import windSpeedIcon from '../../assets/windSpeed.svg'
import windGustIcon from '../../assets/windGust.svg'
import windDegIcon from '../../assets/windDeg.svg'

function WeatherStats({data}) {

  const temp = Math.trunc(data.main?.temp - 273.15)

  const weatherData = [
    {
      text: 'Feels Like',
      value: temp,
      icon: feelsLikeIcon,
      unit: '°',
    },
    {
      text: 'Humiduty',
      value: data.main?.humidity,
      icon: humidityIcon,
      unit: '%',
    },
    {
      text: 'Pressure',
      value: data.main?.pressure,
      icon: pressureIcon,
      unit: 'hPa',
    },
    {
      text: 'Wind Degree',
      value: data.wind?.deg,
      icon: windDegIcon,
      unit: '°',
    },
    {
      text: 'Wind Gust',
      value: data.wind?.gust,
      icon: windGustIcon,
      unit: 'm/s',
    },
    {
      text: 'Wind Speed',
      value: data.wind?.speed,
      icon: windSpeedIcon,
      unit: 'm/s',
    },
  ]

  return (
    <div>
      <div className='weather-details'>
        {weatherData.map((item) => (
          <WeatherStatsItem key={item.text} item={item} />
        ))}
      </div>
    </div>
  )
}

export default WeatherStats
