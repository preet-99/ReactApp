import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
const Main = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      <div className="container mt-4">
        <div className='d-flex flex-row gap-2'>
          {/* Adding custom style */}
          <Link style={{
            textDecoration: 'underline',
            textDecorationThickness: '4px',
            textUnderlineOffset: '5px'
          }} className={`${path === "/day" ? "text-decoration-underline" : "text-decoration-none"} text-dark f-2`} to="/day">Today</Link>
          {/* Adding custom style */}
          <Link style={{
            textDecoration: 'underline',
            textDecorationThickness: '4px',
            textUnderlineOffset: '5px'
          }} className={`${path === "/week" ? "text-decoration-underline" : "text-decoration-none"} text-dark f-2`} to="/week">Week</Link>
        </div>
        <div>
          {/* Accept Children from app.js by using router */}
          {children}
        </div>

      </div>
    </>
  )
}

export default Main