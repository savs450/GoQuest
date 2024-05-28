import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaLanguage } from "react-icons/fa";
import '../App.css';
function Header() {
  return (
    <>
     <header className="App-header">
        <MdDashboard size={30}/>
        <h2>CLINIKK</h2>
        <FaLanguage  size={30} className='language-icon'/>
        <span className='login'>Login</span>
      </header></>
  )
}

export default Header