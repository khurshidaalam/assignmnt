import React from 'react'
import "./layout.css";
import logo from "../../images/Iconly/logo.png";
import home from "../../images/Iconly/home.svg";
import optionsearch from "../../images/Iconly/optionsearch.svg";
import briefcase from "../../images/Iconly/briefcase.svg";
import shirt from "../../images/Iconly/shirt.svg";
import pin from "../../images/Iconly/pin.svg";
import refresh from "../../images/Iconly/refresh.svg";

import setting from "../../images/Iconly/Setting.svg";
import ques from "../../images/Iconly/ques.svg";
import logout from "../../images/Iconly/Logout.svg";

const icondata = [
  {
    icon: "",
    iconsrc: `${home}`
  },
  {
    icon: "",
    iconsrc: `${optionsearch}`
  },
  {
    icon: "",
    iconsrc: `${briefcase}`
  },
  {
    icon: "",
    iconsrc: `${shirt}`
  },
  {
    icon: "",
    iconsrc: `${pin}`
  },
  {
    icon: "",
    iconsrc: `${refresh}`
  }
]

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-div">
        <div className='logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='menu-list'>
          <ul className='menu-options'>
            {
              icondata.map((icons, index) => {
                const { icon, iconsrc } = icons;
                return (
                  <li><img src={iconsrc} alt={icon} /></li>
                );
              })
            }
          </ul>
        
          <ul className='bottom-options'>
            <li><img src={setting} alt="" /></li>
            <li><img src={ques} alt="" /></li>
            <li><img src={logout} alt="" /></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar