import React from 'react'
import { useState } from 'react';
const WeekForecast = (props) => {
   let { forecastData } = props;
   const hourlyData = forecastData?.forecastday?.[0]?.hour || [];
   const c = forecastData?.forecastday?.[0] || [];

  return (
   <>
      <div>
        <h3>Sorry for Inconvinience
          we are working on it
        </h3>
      </div>
   </>
  )
}

export default WeekForecast