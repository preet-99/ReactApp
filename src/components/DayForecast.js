const DayForecast = (props) => {
  // Access the forecastdata using props  
  let { forecastData } = props;
  // Make variable hourlyData to store hourly-data 
  const hourlyData = forecastData?.forecastday?.[0]?.hour || []

  return (
    <>
      <div className="d-flex overflow-auto rounded-2 p-3 mt-1">

        {hourlyData.map((item, index) => (
          <div
            key={index}
            className="forecast-box bg-white brdr-rds hourly-tiles text-black text-center mx-2 p-2 rounded"
          >
            {/* Displaying the temperature corresponding time*/}
            <div><strong>{item.temp_c}°</strong></div>

            <div>
              {/* Displaying the weather condition with image */}
              <img
                src={item.condition.icon}
                alt="cloudy"
                style={{ width: '50px', height: '40px' }}
              />
            </div>
            {/* Displaying the time corresponding to weather condition */}
            <div>{item.time.split(" ")[1]}</div>
            <div></div>

          </div>
        ))}
      </div>
    </>
  )
}

export default DayForecast