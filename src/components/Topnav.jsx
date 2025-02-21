import React from 'react'
import style from '../App.module.css'
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Topnav() {
  return (
    <div className={style.topnav}>
      <h6>Welcome to  Star Packers and Movers</h6>
      <div className={style.ticon}>
        <NavLink to="https://www.facebook.com/your_username_or_id"
        target="_blank"
        rel="noopener noreferrer"><FaFacebook color='blue' /></NavLink>
        <NavLink to="https://www.instagram.com/your_username_or_id"
        target="_blank"
        rel="noopener noreferrer"> <FaInstagram color='red' /></NavLink>
        <NavLink to="https://wa.me/+918888871288">
          <FaWhatsapp color='green' />
        </NavLink>
      </div>
    </div >
  )
}

export default Topnav