import spinner from '../../assets/spinner.svg'

function Spinner() {
  return (
    <>
      <img
        className='spinner'
        src={spinner}
        alt='loading...'
        style={{ width: 100, height:100, margin: 'auto', display: 'block' }}
      />
    </>
  )
}

export default Spinner
