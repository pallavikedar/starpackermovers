import { useState } from 'react';
import { BrowserRouter, Routes, Route,  NavLink } from 'react-router-dom'
import Navbar from './components/Navbar';
import Topnav from './components/Topnav';
import Main from './pages/main/Main';
import Footer from './pages/footer/Footer';
import About from './pages/about/About';
import Contact from './pages/Contact/Contact';
import Service from './pages/Servicepage/Service';
import Quatation from './pages/Quotation/Quatation';
import { FaWhatsapp, FaPhoneSquareAlt } from "react-icons/fa";
import style from './App.module.css'
import Showquat from './components/Equiry/Showquat';
import Login from './pages/Login/Login';
import AppWrite from './components/Equiry/AppWrite';
import AppWriteSeound from './components/Equiry/AppWriteSecound';
import ScrollToTop from './Scroll';

function App() {
  const [valid,setValid]=useState(false);

  
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop/>
        <Topnav />
        <Navbar />
        <Routes>
          <Route element={<Main />} path='/' />
          <Route element={<About />} path='/about' />
          <Route element={<Contact />} path='/contact' />
          <Route element={<About />} path='/about' />
          <Route element={<Quatation/>} path='/q'/>
          <Route element={<Service />} path='/service' />
          <Route element={<Login setValid={setValid} valid={valid}/>} path='/admin' />
          <Route element={<Showquat/>} path='/showData'/>
          <Route element={<AppWrite/>} path='/f'/>
          <Route element={<AppWriteSeound/>} path='/s'/>
        </Routes>
        <Footer />
        <div className={style.home}>
        <NavLink to="https://wa.me/+918888871288"
        target="_blank"
        rel="noopener noreferrer">
        <FaWhatsapp color='green' /></NavLink>
        <NavLink to="tel://8888871288"> <FaPhoneSquareAlt  color='green'/></NavLink>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
