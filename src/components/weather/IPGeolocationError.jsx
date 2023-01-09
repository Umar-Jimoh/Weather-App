import TryAgainBtn from '../shared/TryAgainBtn'

function IPgeolocationError() {
  return (
    <div className='error-message'>
      <p className='mb-6 pt-6'>
        Try again to get your location weather details, or search by
        city/country.
      </p>
      <TryAgainBtn/>
    </div>
  )
}

export default IPgeolocationError
