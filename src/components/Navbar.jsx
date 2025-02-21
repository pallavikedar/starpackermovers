import React from 'react'
import logo from '../Assets/logo.jpg'
import menu from '../Assets/menu2.png'
import { NavLink } from 'react-router-dom'
// import style from '../App.module.css'
import './nav.css'
function Header() {
    const [showNavbar, setShowNavbar] = React.useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    };

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="logo">
                        <NavLink to="/"><img src={logo} alt="" /> </NavLink>
                    </div>
                    <div className="menu-icon" onClick={handleShowNavbar}>
                        <img src={menu} alt="" /> 
                    </div>
                    <div className={`nav-elements  ${showNavbar && "active"}`}>
                        <ul> 
                            <li>

                                <NavLink className='NavLink' to="/" onClick={() => setShowNavbar(!showNavbar)}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink className='NavLink' to="/about" onClick={() => setShowNavbar(!showNavbar)}>About</NavLink>
                            </li>
                            <li>
                                <NavLink className='NavLink' to="/service" onClick={() => setShowNavbar(!showNavbar)}>Services</NavLink>
                            </li>
                            <li>
                                <NavLink className='NavLink' to="/q" onClick={() => setShowNavbar(!showNavbar)}>Quotation</NavLink>
                            </li>
                            <li>
                                <NavLink className='NavLink' to="/contact" onClick={() => setShowNavbar(!showNavbar)}>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header