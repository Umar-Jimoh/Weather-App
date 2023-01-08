
function WeatherStatsItem({item}) {    
    
  return (
    <div className='details'>
      <img className='icon' src={item.icon} alt={item.text} />
      <div className='unit'>
        <h3>{item.text}</h3>
        <p>{item.value}{item.unit}</p>
      </div>
    </div>
  )
}

export default WeatherStatsItem
