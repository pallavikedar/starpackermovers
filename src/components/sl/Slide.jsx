import React, { useState, useEffect, useRef } from 'react';
import Css from './Slider.module.css';
import a from '../../Assets/Review2.svg'
import b from '../../Assets/Review3.svg'
import c from '../../Assets/Review4.svg'
import d from '../../Assets/Group 1 (5).svg'

function Slider() {
    const slides = [
        { id: 1, className: a },
        { id: 2, className: b },
        { id: 3, className: c },
        { id: 4, className: d},
    ]

    // console.log(slides)

    const [value, setValue] = useState(0);
    const myRef = useRef();
    const [pause, setPause] = useState(false);




    useEffect(() => {
        const intervalId = setInterval(() => {

            if (!pause) {
                setValue((prevValue) => (prevValue + 100) % (slides.length * 100));
                // console.log(value)
            }

        }, 3000);
        return () => {
            clearInterval(intervalId)

        }
    }, [value, pause]);

    const onMouseEnter = () => {
        setPause(true);
    }

    const onMouseLeave = () => {
        setPause(false);
    }


    return (
        <>
            <div className={Css.SlideWapper}>
                <h1>Testimonial</h1>
                <div
                    className={Css.slides}
                    style={{
                        transform: `translateX(-${value}%)`,
                        transition: 'transform 0.5s ease-in-out'
                    }}

                    ref={myRef}


                >
                    {slides.map((slide) => (
                        <div key={slide.id} className={`${Css.slide} `} onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave} >
                          <img src= {slide.className} alt="" /> 
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Slider;
