import React from 'react';
import './Mobiledevice.css'

const MobDevice = () => {
  return (
   <>
   <div className='mobdevice' >
          <ul>
            <li>
              <span className="dropdown">
                < li className="dropbtn">
                  Home
                </li>
                <span className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </span>
              </span>
            </li>
            < li className="dropbtnabout">
            <a href="#">Link 1</a>
          
            </li>
            < li className="dropbtnabout">
    Service
            </li>
            < li className="dropbtnabout">
              Contact
            </li>
          </ul>
        </div>
   </>
  )
}

export default MobDevice