import React from 'react'

const Header = (props) => {
  // Access the location,forecastData,highlights using props
  let { location, forecastData, highlights } = props;
  
 const handleClick = () =>{
  alert(`Sorry For inconvenience,this feature is undermaintenance.
    `)
 }
 
  return (
    <>
      {/* Search Section */}
      <div className="container d-flex flex-column gap-5 ">
        <div className='mt-2 search-parent'>
          <form className="d-flex search-d " role="search" >
            <input onClick={handleClick} className="form-control me-2 brdr " type="search" placeholder=" Search for places" name="q" aria-label="Search" />
          </form>
        </div>



        {/* Displaying current temperature */}
        <div className='container d-flex flex-column gap-2 text-black '>
          <div className='d-flex  gap-4 temp-parent flex-lg-column'>
            <h1 className='heading-temp'>{highlights.temp_c}°c</h1>
          </div>

          <div className='d-flex flex-row gap-4 align-content-end' >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-cloud-fill" viewBox="0 0 16 16">
              <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383" />
            </svg>
            {/* Displaying current clouds % */}
            <span className='f-3 fw-semibold'>{highlights.cloud}% Clouds</span>
          </div>

          <div className='d-flex flex-row gap-3 space-between'>

            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-cloud-drizzle-fill" viewBox="0 0 16 16">
              <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973" />
            </svg>
            <h4 className='f-3 fw-semibold'>{forecastData.forecastday[0].day.condition.text}-{forecastData.forecastday[0].day.daily_chance_of_rain}%</h4>
            <h4 className='f-3 fw-semibold'>{location.region}, {location.country}</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header