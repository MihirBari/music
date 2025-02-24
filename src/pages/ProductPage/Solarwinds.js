import React from 'react'
import projImg1 from "../../assets/img/SW_Logo.png";
import { Link } from 'react-router-dom';

export const Solarwinds = () => {
  return (
    <>  
    <h1 style={{ textAlign: "center"  }}>SOLARWINDS</h1>
    <div className='product-Solar'>
        <div>
        <img src={projImg1} alt='Solarwinds' />
        </div>
        <div>
        <p>SolarWinds stands out as the sole unified platform that seamlessly 
            combines monitoring, observability, and service management. It empowers users with
             comprehensive insight into their IT infrastructure, enabling proactive identification
              of bottlenecks across the entire system.</p>
             <Link to='/SolarWinds'>
             <button className="custom-button">
              <span>
              Read More
              </span>
           </button>
             </Link>
        </div>
    </div>
    </>
  )
}
