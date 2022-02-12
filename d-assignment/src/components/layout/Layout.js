import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import "./layout.css";

const Layout = (props) => {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <div className='main-content-div'>
           {props.children} 
        </div>
        
    </div>
  )
}

export default Layout;