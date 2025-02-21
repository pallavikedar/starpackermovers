import React from 'react'
import style from '../../App.module.css'
import logo from '../../Assets/flogo.png'
import { FaFacebook, FaInstagram  } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.fservices}>
                <h3>Our Services</h3>
                <li>
                    Reliable Packaging Service
                </li>
                <li>Household Goods Shifting in All Over India</li>
                <li>Car / Bike Vehicle Transportation Service</li>
                <li>Office Relocation Service</li>
                <li>Insurance Facilities</li>
                <li>Warehousing Service</li>
                <li>Industrial Packaging Service</li>

            </div>
            <div className={style.ficon}> 
            <h3>Social Media </h3>
            <div className={style.ff}> 
            <NavLink to="https://www.facebook.com/your_username_or_id"
            target="_blank"
            rel="noopener noreferrer"><FaFacebook color='blue' fontSize='42px'/></NavLink>
            <NavLink to="https://www.instagram.com/your_username_or_id"
            target="_blank"
            rel="noopener noreferrer"><FaInstagram color='red' fontSize='42px' /></NavLink>
            </div>
            <div className={style.flogo}>
                <img src={logo} alt="" />
                <address>
                    Star Packers and Movers Plot no. 7,<br />
                    Sant Gyaneshwar Society, <br />
                    Beside Patel Wine shop Dattawadi,<br />
                    Nagpur -440023 <br />
                    <b>8888871288 /8806317370</b>
                </address>
            </div>
            </div>
        </div>
    )
}

export default Footer