import React, { useState } from 'react';
import "./layout.css";
import search from "../../images/Iconly/Search.webp";
import chat from "../../images/Iconly/Chat.webp";
import notification from "../../images/Iconly/Notification.webp";
import lacoste from "../../images/Iconly/lacoste-logo.png";


const Navbar = () => {
  const [explore, setExplore] = useState(true);
  const [activity, setActivity] = useState(false);

  
  
  return (
    <>
      <div className="navbar-div">
          <div className="nav-content">
              <div className='switch-btns'>
                <button className='nav-btn' onClick={()=> {setExplore(!explore); setActivity(false)}}>
                {
                  explore === true ? <p className='active-btn'>explore</p> : <p>explore</p>
                  }
                  </button>
                  <button className='nav-btn' onClick={()=> {setActivity(!activity); setExplore(false)} }>
                {
                  activity === false ? <p>activity</p>: <p className='active-btn'>activity</p> 
                  }
                  </button>
                
              </div>
              <div className='search-area'>
              <div className='search-icon'>
                <img src={search} alt="search icon"/>
              </div>
                <input class="search-input" type="search" placeholder='Search by name, group, type and others'/>
              </div>
              <div className='nav-right-icons'>
                <ul className='navicon-list' style={{listStyle: "none", display: "flex"}}>
                  <li><img className='nav-list-icon' src={chat} alt="search icon"/><span className='number'>2</span></li>
                  <li><img className='nav-list-icon' src={notification} alt="search icon"/><span className='number'>6</span></li>
                  <li><img className='nav-list-icon' src={lacoste} alt="search icon"/></li>
                </ul>
              </div>
          </div>
      </div>
    </>
  )
}

export default Navbar