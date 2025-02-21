import React from 'react'
import "../pages/Servicepage/Service.css";
import set1 from "../Assets/images/Group 28 (1).svg";
import set2 from "../Assets/images/Group 29 (2).svg";
import set3 from "../Assets/images/Group 30 (2).svg";
import set4 from "../Assets/images/Group 31 (1).svg";
import set5 from "../Assets/images/Group 34 (1).svg";
import set6 from "../Assets/images/Group 35 (1).svg";
import { NavLink } from 'react-router-dom';
import Button from './Button';

function Services() {
  return (
    <>
    <h1 className='h'>Our Services</h1>
    <div className="service_cards">
    <div className="card">
      <img src={set1} alt="" />
      <span>
       <Button/>
      </span>
    </div>
    <div className="card">
      <img src={set2} alt="" />
      <span>
       <Button/>
      </span>
    </div>
    <div className="card">
      <img src={set3} alt="" />
      <span>
       <Button/>
      </span>
    </div>
  </div>
  <div className="service_cards">
  <div className="card">
    <img src={set5} alt="" />
    <span>
    <Button/>
    </span>
  </div>
  <div className="card">
    <img src={set6} alt="" />
    <span>
    <Button/>
    </span>
  </div>
  <div className="card">
    <img src={set4} alt="" />
    <span>
    <Button/>
    </span>
  </div>
</div>
  <div className="last">
  <NavLink to={'/service'}> <button>More ▶</button></NavLink>
  </div>
    </>
  )
}

export default Services