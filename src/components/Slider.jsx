import React from 'react'
import style from '../App.module.css'
import star from '../Assets/Group 22.svg'
import Quatation from '../pages/Quotation/Quatation';


function Slider() {
    const [showNavbar, setShowNavbar] = React.useState(false);

    const handleShowQouat = () => {
        setShowNavbar(!showNavbar);
    };
    return (
        <>
            <div className={style.slider}>
                <div className={style.container}>
                    <div className={style.heading}>
                        <img src={star} alt="" />

                    </div>
                    <div className={style.btn}>
                        <button onClick={handleShowQouat}>
                            Get A Quote
                        </button>
                    </div>
                </div>
            </div>
            {
                showNavbar ? <div className={style.getQouat}>

                    <Quatation showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
                    <span className={style.cross} onClick={() => setShowNavbar(false)}>❌</span>


                </div> 

                    : ''
            }

        </>
    )
}

export default Slider