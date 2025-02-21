import React from 'react'
import style from '../App.module.css'
import tcs from '../Assets/tcs.png'
import angel from '../Assets/angel.png'
import pav from '../Assets/pav.png'
import tr from '../Assets/trans.png'
import cal from '../Assets/cal.png'
import bajaj from '../Assets/bajaj.png'

function Workwith() {
  return (
    <div className={style.work}>
      <h1>We Have Worked With</h1>
  {/*<div className={style.conteudo}>
        <img src={tcs} alt="" />
        <img src={angel} alt="" />
        <img src={pav} alt="" />
      </div>
      <div className={style.conteudoo}>
        <img src={bajaj} alt="" />
        <img src={cal} alt="" />
        <img src={tr} alt="" />
      </div> */} 
      
      <div className={style.conteudo}>
        <img src={tcs} alt="" />
        <img src={angel} alt="" />
        <img src={pav} alt="" />
        <img src={bajaj} alt="" />
        <img src={cal} alt="" />
        <img src={tr} alt="" />
      </div> 
      <div className={style.wbtn}>
      <button>More Then 200+ Customers</button></div>
 
    </div>
  )
}

export default Workwith