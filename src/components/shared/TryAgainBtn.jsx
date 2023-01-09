import { useContext } from 'react'
import WeatherContext from '../../Contexts/WeatherContext'

function TryAgainBtn() {
  const {
    setIsLoading,
    location,
    fetchLocation,
    ipGeolocationError,
    fetchIpAddress,
  } = useContext(WeatherContext)

  const handleRetry = () => {
    setIsLoading(true)
    ipGeolocationError ? fetchIpAddress() : fetchLocation(location)
  }

  return (
    <>
      <button
        type='button'
        className='network-error__button'
        onClick={() => handleRetry()}
      >
        Try again
      </button>
    </>
  )
}

export default TryAgainBtn
