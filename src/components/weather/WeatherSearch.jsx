import { useState, useContext } from 'react'
import WeatherContext from '../../Contexts/WeatherContext'

function Search() {
  const [displayErrorMessage, setDisplayErrorMessage] = useState(false)


  const { isLoading, location, fetchLocation, setIsLoading, setLocation } =
    useContext(WeatherContext)


  // Text Change
  const handleTextChange = ({ target: { value } }) => {
    if (value.trim() !== '' && value.trim().length < 3) {
      setDisplayErrorMessage(true)
    } else {
      setDisplayErrorMessage(false)
    }

    setLocation(value.trim())
  }

  // handle Submit
  const handleSubmit = (e) => {
    e.preventDefault()

    // search validation

    if (location.trim().length < 3) {
      return
    } else {
      fetchLocation(location)
      setIsLoading(true)

    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex justify-center'>
        <div className='mb-1 w-full'>
          <div className='search'>
            <input
              type='search'
              disabled={isLoading ? 'disabled' : ''}
              className='search__input'
              placeholder='Search by City, or Country'
              aria-label='Search'
              aria-describedby='button-addon2'
              style={{
                border: `1px solid ${displayErrorMessage ? 'red' : '#c7c7c7'}`,
              }}
              onChange={handleTextChange}
              value={location}
            />
            <button
              className='search__btn'
              type='button'
              id='button-addon2'
              onClick={(e) => {
                handleSubmit(e)
              }}
              disabled={isLoading ? 'disabled' : ''}
            >
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='search'
                className='w-4'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path
                  fill='currentColor'
                  d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className='message'
        style={{ opacity: `${displayErrorMessage ? '1' : '0'}` }}
      >
        Text must be minimum of 3 characters
      </div>
    </form>
  )
}

export default Search
