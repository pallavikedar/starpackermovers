import React from 'react'
import Slider from '../../components/Slider'
import About from '../About'
import Workwith from '../../components/Workwith'
import style from '../../App.module.css'
import Process from '../../components/Process'
import Feedback from '../../components/Feedback'
import Slid from '../../components/sl/Slide'
import Services from '../../components/Services'
import { FaWhatsapp, FaPhoneSquareAlt  } from "react-icons/fa";


function Main() {
  return (
    <>
    <div className={style.layout}>
    <Slider/>
    <Services/>
    <Process/>
    <About/>
    <Workwith/>
    <Slid/>
    </div>
    </>
  )
}

export default Main