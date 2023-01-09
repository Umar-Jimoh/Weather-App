import { useContext } from 'react'
import WeatherContext from '../../Contexts/WeatherContext'

function IPgeolocationError() {
  const { setIsLoading, fetchIpAddress } = useContext(WeatherContext)

  const handleRetry = () => {
    setIsLoading(true)
    fetchIpAddress()
  }

  return (
    <div className='error-message'>
      <p className='mb-6 pt-6'>
        Try again to get your location weather details, or search by
        city/country.
      </p>
      <button
        type='button'
        className='network-error__button'
        onClick={() => handleRetry()}
      >
        Try again
      </button>
    </div>
  )
}

export default IPgeolocationError
