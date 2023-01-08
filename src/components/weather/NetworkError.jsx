import {useContext} from 'react'
import WeatherContext from '../../Contexts/WeatherContext'


function NetworkError() {

  const { location, fetchLocation, setIsLoading } =
    useContext(WeatherContext)

  const handleRetry = () => {
    setIsLoading(true)
    fetchLocation(location)
  }
  
  
  return (
    <div className='error-message'>
      <p className='mb-6 pt-6'>
        The connection to the network is impossible. Please check the status of
        your connection or try again.
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

export default NetworkError
