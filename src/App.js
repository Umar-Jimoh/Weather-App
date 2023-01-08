import WeatherSearch from './components/weather/WeatherSearch'
import { WeatherProvider } from './Contexts/WeatherContext'
import WeatherDetails from './components/weather/WeatherDetails'

function App() {
  return (
    <WeatherProvider>
      <div className='container'>
        <main className='main'>
          <WeatherSearch />
          <WeatherDetails />
        </main>
      </div>
    </WeatherProvider>
  )
}

export default App
