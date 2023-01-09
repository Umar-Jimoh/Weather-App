import TryAgainBtn from '../shared/TryAgainBtn'


function NetworkError() {
  
  return (
    <div className='error-message'>
      <p className='mb-6 pt-6'>
        The connection to the network is impossible. Please check the status of
        your connection or try again.
      </p>
      <TryAgainBtn />
    </div>
  )
}

export default NetworkError
