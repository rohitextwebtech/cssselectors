import React,{useState} from "react";

import "./Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import MobDevice from './MobDevice';
import Button from '@mui/material/Button';
const Navbar = () => {
  const[data,setdata]=useState(true)

  const handleClick=()=>{
    setdata(!data)
  }

  return (
    <>
    {/* min width 654 */}
  
        <div className="HandleNavbar">
        <div>
          <div className="image">
            <div className="front">
       
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmg6VbQr7k4bE8m1sGjODK19nEZn-UKVChBg&usqp=CAU"
            width="50px"
            alt="dfcb "
            className="Handlemoblogo"
          />
          </div>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <span className="dropdown">
                <li className="dropbtn">
                  Home
                </li>
                <span className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </span>
              </span>
            </li>
            <li className="about">
              About
            </li>
            <li className="about">
             Service
            </li>
            <li className="about">
             Contact
            </li>
          </ul>
        </div>
      </div>  

      {/* max width:653 */}
     
     <div className="mobileDevice">
         <div >
         <div className='image'>
        <div className='front'>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmg6VbQr7k4bE8m1sGjODK19nEZn-UKVChBg&usqp=CAU"
            alt="dfcb " className="HandlMobimage"
          />
        </div>
        </div>
        </div>
        <div>
        <Button onClick={handleClick}><MenuIcon sx={{color:'white',fontSize:'24px'}}/></Button>  
        </div>
        </div>
        <div className="dropdownmenu">
        {data?<MobDevice/>:null}
        </div>
    


    </>
  );
};

export default Navbar;
