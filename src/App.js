import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './hourly.css'
import { useEffect, useState } from 'react';
import DayForecast from './components/DayForecast';
import {
  HashRouter,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import WeekForecast from './components/WeekForecast';
import MainFooter from './components/MainFooter';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [forecasts, setForecasts] = useState({})
  const [highlights, setHighlights] = useState(null)
  const [forecastData, setForecastData] = useState(null)
  const [name, setname] = useState("Preet")

  const data = async () => {
    try {
      const source = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=India&days=14&aqi=yes&alerts=yes`);
      const response = await source.json();

      setForecasts(response);
      setHighlights(response?.current);
      setForecastData(response?.forecast)

    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }
  useEffect(() => {
    data();
  }, [])

  return (
    <HashRouter>
      <div className="container-fluid">
        <div className="row min-vh-100">
          {/* Head Section of Webpage */}
          <div className="col-md-4 col-lg-3  text-white p-3 rain-img ">
            {(forecasts?.current?.temp_c && forecasts?.current?.condition) && (
              <Header location={forecasts.location} forecastData={forecastData} highlights={highlights} />
            )}

          </div>

          {/*Forcast Section */}
          <div className="col-md-8 col-lg-9 p-4 main-bg">

            <Main>
              <Routes>
                <Route path="/" element={<DayForecast forecast={forecasts} forecastData={forecastData} />} />
                <Route path="/day" element={<DayForecast forecast={forecasts} forecastData={forecastData} />} />
                <Route path="/week" element={<WeekForecast forecast={forecasts} forecastData={forecastData} />} />
              </Routes>
            </Main>

            {/* Highlight Section */}
            {highlights && (
              <Footer forecast={forecasts} highlights={highlights} forecastData={forecastData} />
            )}

          </div>
        </div>
      </div>
        <MainFooter />
    </HashRouter>
  );
}

export default App;
