import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [location, setLocation] = useState('')
  const [weatherData, setWeatherData] = useState([])
  const [notFound, setNotFound] = useState(false)
  const [networkError, setNetworkError] = useState(false)
  const [ipGeolocationError, setIpGeolocationError] = useState(false)

  useEffect(() => {
    fetchIpAddress()
    // eslint-disable-next-line
  }, [])

  // const axios = require('axios')

  const WEATHER_API = process.env.REACT_APP_WEATHER_API
  const WEATHER_URL = process.env.REACT_APP_WEATHER_URL
  const IPGEOLOCATION_URL = process.env.REACT_APP_IPGEOLOCATION_URL
  const IPGEOLOCATION_API = process.env.REACT_APP_IPGEOLOCATION_API


  const fetchIpAddress = async () => {
    try {
      const res = await axios.get(`${IPGEOLOCATION_URL}/ipgeo?apiKey=${IPGEOLOCATION_API}`)
      const {city} = res.data
      fetchLocation(city)
      
    } catch(error) {
      setIpGeolocationError(true)
    }
      
  }

  // fetch Location Data
  const fetchLocation = async (location) => {
    try {
      const res = await axios.get(
        `${WEATHER_URL}/data/2.5/weather?q=${location}&mode=json&units=metric,&appid=${WEATHER_API}`
      )

      if (res.status === 200) {        
        setWeatherData(res.data)
        setNotFound(false)
        setNetworkError(false)
        setIsLoading(false)

      } else {

        throw new Error(res.status)
      }
    } catch (error) {

      const { status } = error.request

      if (status === 0) {
        setNotFound(false)
        setNetworkError(true)
      }
       else if (status === 404) {
        setNetworkError(false)
        setNotFound(true)
      }

      setIsLoading(false)
    }

    setIpGeolocationError(false)
  }

  return (
    <WeatherContext.Provider
      value={{
        isLoading,
        weatherData,
        location,
        notFound,
        networkError,
        ipGeolocationError,
        setLocation,
        setIsLoading,
        fetchLocation,
        fetchIpAddress,
        setIpGeolocationError,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherContext

// const fetchIpAddress = async () => {
//   const res = await fetch(
//     `${IPGEOLOCATION_URL}/ipgeo?apiKey=${IPGEOLOCATION_API}`
//   )
//   const data = await res.json()
//   fetchLocation(data.city)
// }

// // fetch Location Data
// const fetchLocation = async (location) => {
//   try {
//     const res = await fetch(
//       `${WEATHER_URL}/data/2.5/weather?q=${location}&mode=json&units=metric,&appid=${WEATHER_API}`
//     

//     if (res.ok) {
//       const data = await res.json()
//       setWeatherData(data)
//       setNotFound(false)
//       setNetworkError(false)
//       setIsLoading(false)
//     } else {
//       throw new Error(res.status)
//     }
//   } catch (error) {
//     if (error.message === 'Failed to fetch') {
//       setNotFound(false)
//       setNetworkError(true)
//     } else if (error.message === '404') {
//       setNetworkError(false)
//       setNotFound(true)
//     }

//     setIsLoading(false)
//   }
// }
