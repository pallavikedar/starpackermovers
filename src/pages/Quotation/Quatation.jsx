import React, { useEffect, useState, useRef } from "react";
import "./Quotation.css";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';


function Quatation() {
    const [formData, setFormData] = useState([]);
    const navigate = useNavigate()
    const [prev, setprev] = useState([]);
    const [nameError, setNameError] = useState("");
    const [PhoneError, setPhoneError] = useState("");
    const [fromError, setFromError] = useState("");
    const [ToError, setToError] = useState("");

    useEffect(() => {
    }, [])


    function num(e) {
        const value = e.target.value;
        const numbericValue = Number(value);

        if (value.length > 10) {
            e.target.value = value.slice(0, 10);
        }

        if (isNaN(numbericValue)) {
            e.target.value = "";
        }
    }

    function handlechange(e) {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    function handleSubmit(e) {
        e.preventDefault()
        setFormData()
        axios.post('http://localhost/api/api.php', formData)
        navigate('/')
        console.log(formData)
    }


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_foq024o', 'template_0bwpy33', form.current, {
                publicKey: 'Etg1rgsQOvVjtW0tp',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

 
    return (
        <>
            <div className="quotation_wrapper">
                <div className="quotation_form">
                    <h1>Enquiry</h1>
                    <form ref={form} onSubmit={sendEmail} >
                        <div>
                            <textarea name="message" value='hello' hidden />
                            <select
                                name='message'
                                required
                            >
                                <option value="" hidden>
                                    Select Service
                                </option>
                                <option value="Reliable Packaging Service ">
                                    Reliable Packaging Service
                                </option>
                                <option value="Household Goods Shifting All over India">
                                    Household Goods Shifting All over India
                                </option>
                                <option value="Local Within City Shifting">
                                    Local Within City Shifting
                                </option>
                                <option value="Car / Bike Vehicle Transportation Service">
                                    Car / Bike Vehicle Transportation Service
                                </option>
                                <option value="Office Relocation Service">
                                    Office Relocation Service
                                </option>
                                <option value="Households Goods Insurance Facilities">
                                    Households Goods Insurance Facilities
                                </option>
                                <option value=" Warehousing Service">
                                    Warehousing Service
                                </option>
                                <option value="Industrial Packaging Service">
                                    Industrial Packaging Service
                                </option>
                            </select>
                        </div>
                        <div className="error_div">
                            <input
                                id="Your Name"
                                type="text"
                                name='message'
                                placeholder="Your Name"
                                required
                            />
                            <span className="error">{nameError}</span>
                        </div>
                        <div className="error_div">
                            <input type="email" name="user_email"  placeholder="Your Gmail"/>

                        </div>

                        <div className="error_div">
                            <input
                                id="Your Contact No."
                                type="tel"
                                name="message"
                                placeholder="Your Contact No."
                                onInput={num}
                                required
                            />
                            <span className="error">{PhoneError}</span>
                        </div>
                        <div className="from_wreapper">
                            <div className="error_div">
                                <input
                                    id="location"
                                    type="text"
                                    name='message'
                                    placeholder="Location From"

                                    required
                                />
                                <span className="error">{fromError} </span>
                            </div>
                            <div className="error_div">
                                <input
                                    id="tolocation"
                                    type="text"
                                    placeholder="Location To"
                                    name='message'
                                    required
                                />
                                <span className="error">{ToError}</span>
                            </div>
                        </div>

                        <div>
                            <input type='date' name="message" />
                        </div>

                        <div className="quotation_form_button">
                            <button type="submit" value="send">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Quatation;