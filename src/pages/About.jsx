import React from 'react'
import style from '../App.module.css'
import { useNavigate } from 'react-router-dom'

function About() {
    const navigate = useNavigate()
    return (
        <div className={style.aboutWrapper}>
            <h1 className={style.about}>About us</h1>
            <h1 className={style.star}>Star Packers And Movers</h1>
            <div className={style.ul}>
                <div className={style.li}>

                    <li>Star Packers And Movers  work in a market since 2013</li> <br />
                    <li>Star Packers and Movers give you professional service. We understand that you
                        want your precious items to reach its destination in a safe condition. We have
                        experienced and trained staff to pack your items carefully and load them
                        professionally. Our trucks and drivers are optimized for the safe transfer of your cargo</li>
                </div>
         
            </div> <br />
            <div className={style.aboutBtn}>
            <button onClick={()=>navigate('/about')}>Know More</button>
            </div>

        </div>
    )
}

export default About