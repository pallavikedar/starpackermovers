import React from 'react'
import style from '../App.module.css'
import step1 from '../Assets/step1.svg'
import step2 from '../Assets/step2.svg'
import step3 from '../Assets/step3.svg'
import step4 from '../Assets/step4.svg'

function Process() {
  return (
    <div className={style.process}>
    <h1>Our Process</h1>
    <div className={style.step}>
    <img src={step1} alt="" />
    <img src={step2} alt="" />
    <img src={step3} alt="" />
    <img src={step4} alt="" />
    </div>
    </div>
  )
}

export default Process