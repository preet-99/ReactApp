import React from 'react'

const Footer = (props) => {

  // Access the forecastData,highlights using props
  let { highlights, forecastData } = props;

  // Convert air quality parameters(objects) into array and fixed position after decimel
  let aqi = Object.values(highlights.air_quality)[5].toFixed(2);
   
  return (
    <>
      <div className="container mt-4">
        <h4>Today’s Highlights</h4>
        {/*Parent of Cards */}
        <div className="row mt-3">

          {/*Wind Status Card */}
          <div className="col-6 mb-2 rounded ">
            <div className="card text-black bg-white brdr-rds p-2 ">
              <h6 className="card-title heading-op">Wind Status</h6>
              <span className="card-text f-2">{highlights.wind_kph} km/h </span>
              <span>{highlights.wind_dir}</span>
              {(() => {
                if (highlights.wind_kph > 0 && highlights.wind_kph <= 5) return <span>Calm</span>;
                else if (highlights.wind_kph > 6 && highlights.wind_kph <= 11) return <span>Light Air</span>;
                else if (highlights.wind_kph > 12 && highlights.wind_kph <= 19) return <span>Light Breeze</span>;
                else if (highlights.wind_kph > 20 && highlights.wind_kph <= 29) return <span>Gentle Breeze</span>;
                else if (highlights.wind_kph > 30 && highlights.wind_kph <= 39) return <span>Moderate Breeze</span>;
                else if (highlights.wind_kph > 40 && highlights.wind_kph <= 50) return <span>Fresh Breeze</span>;
                else if (highlights.wind_kph > 51 && highlights.wind_kph <= 61) return <span>Strong Breeze</span>;
                else if (highlights.wind_kph > 62 && highlights.wind_kph <= 74) return <span>Near Gale</span>;
                else if (highlights.wind_kph > 75 && highlights.wind_kph <= 88) return <span>Gale</span>;
                else if (highlights.wind_kph > 89 && highlights.wind_kph <= 102) return <span>Stong Gale</span>;
                else if (highlights.wind_kph > 103 && highlights.wind_kph <= 117) return <span>Strom</span>;
                else return <span>Hurricane</span>;
              })()}
            </div>
          </div>

          {/*Sunrise & Sunset Card */}
          <div className="col-6 mb-2">
            <div className="card text-black bg-white brdr-rds p-2">
              <h6 className="card-title heading-op">{Number(highlights.is_day) === 1 ? "Sunrise & Sunset" : "Moonrise & Moonset"}
              </h6>
              {Number(forecastData?.forecastday?.[0].astro.is_sun_up) === 1 ? (
                <>
                  <span className="card-text f-3 ">{forecastData.forecastday[0].astro.sunrise} </span>
                  <small className='f-4' >-1m 44s</small>
                  <span className="card-text f-3 ">{forecastData.forecastday[0].astro.sunset} </span>
                  <small className='f-4' >+2m22s</small>
                </>
              ) : (
                <>
                  <span className="card-text f-3 ">{forecastData.forecastday[0].astro.moonrise} </span>
                  <small className='f-4' >-1m 44s</small>
                  <span className="card-text f-3 ">{forecastData.forecastday[0].astro.moonset} </span>
                  <small className='f-4' >+2m22s</small>
                </>)}
            </div>
          </div>

          {/*Humidity Card */}
          <div className="col-6 mb-2">
            <div className="card text-black bg-white brdr-rds p-2">
              <h6 className="card-title heading-op ">Humidity</h6>
              <p className="card-text f-2">{highlights.humidity}%</p>
              {(() => {
                if (highlights.humidity > 0 && highlights.humidity <= 30) return <span>Low Humidity</span>;
                else if (highlights.humidity > 31 && highlights.humidity <= 50) return <span>Comfortable</span>;
                else if (highlights.humidity > 51 && highlights.humidity <= 60) return <span>Moderate Humidity</span>;
                else if (highlights.humidity > 61 && highlights.humidity <= 70) return <span>High Himudity</span>;
                else return <span>Very High/Excessive Humidity</span>;
              })()}
            </div>
          </div>

          {/*Air Quality Card */}
          <div className="col-6 mb-2">
            <div className="card text-black bg-white brdr-rds p-2">
              <h6 className="card-title heading-op">Air Quality</h6>
              <p className="card-text f-2">{aqi}</p>
              {(() => {
                if (aqi > 0 && aqi < 50) return <span>Good</span>;
                else if (aqi > 50 && aqi <= 154) return <span>Moderate to Unhealthy for Sensitive Groups</span>;
                else if (aqi > 155 && aqi <= 254) return <span>Unhealthy</span>;
                else if (aqi > 255 && aqi <= 154) return <span>Very Unhealthy</span>;
                else return <span>Hazardous</span>
              })()}
            </div>
          </div>

          {/*Feels Like Card */}
          <div className="col-6 mb-2">
            <div className="card text-black bg-white brdr-rds p-2">
              <h6 className="card-title heading-op">Feels Like</h6>
              <p className="card-text f-2">{highlights.feelslike_c}°c</p>
            </div>
          </div>

          {/*Visibility Card */}
          <div className="col-6 mb-2">
            <div className="card text-black bg-white brdr-rds p-2">
              <h6 className="card-title heading-op">Visibility</h6>
              <p className="card-text f-2">{highlights.vis_km} km</p>
              {(() => {
                if (highlights.vis_km < 1) return <span>Severely Reduced</span>;
                else if (highlights.vis_km > 1 && highlights.vis_km <= 1.9) return <span>Very Poor</span>;
                else if (highlights.vis_km > 2 && highlights.vis_km < 3.9) return <span>Poor</span>;
                else if (highlights.vis_km > 4 && highlights.vis_km < 5.9) return <span>Moderate</span>;
                else if (highlights.vis_km > 6 && highlights.vis_km < 10) return <span>Good</span>;
                else return <span>Excellent</span>;
              })()}
            </div>
          </div>

          {/*Air Pressure Card */}
          <div className="col-6 mb-2">
            <div className="card text-black bg-white brdr-rds p-2">
              <h6 className="card-title heading-op">Air Pressure</h6>
              <p className="card-text f-2">{highlights.pressure_mb} mb</p>
              {(() => {
                if (highlights.pressure_mb <= 980) return <span>Very Low</span>;
                else if (highlights.pressure_mb > 981 && highlights.pressure_mb <= 1000) return <span>Low </span>;
                else if (highlights.pressure_mb > 1001 && highlights.pressure_mb <= 1015) return <span>Normal</span>;
                else if (highlights.pressure_mb > 1016 && highlights.pressure_mb <= 1030) return <span>High</span>;
                else return <span>Very High</span>;
              })()}
            </div>
          </div>

          {/*Dew Point Card */}
          <div className="col-6 mb-2">
            <div className="card text-black bg-white brdr-rds p-2">
              <h6 className="card-title heading-op">Dew point</h6>
              <p className="card-text f-2">{highlights.dewpoint_c}°c</p>
              {(() => {
                if (highlights.dewpoint_c > 0 && highlights.dewpoint_c <= 10) return <span>Dry</span>;
                else if (highlights.dewpoint_c > 11 && highlights.dewpoint_c <= 15) return <span>Comfortable</span>;
                else if (highlights.dewpoint_c > 16 && highlights.dewpoint_c <= 18) return <span>Slightly Humid</span>;
                else if (highlights.dewpoint_c > 19 && highlights.dewpoint_c <= 21) return <span>Moderately Humid</span>;
                else if (highlights.dewpoint_c > 22 && highlights.dewpoint_c <= 24) return <span>Humid</span>;
                else if (highlights.dewpoint_c > 25 && highlights.dewpoint_c <= 26) return <span>Very Humid</span>;
                else return <span>Extremely Humid / Oppressive</span>;
              })()}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer