import React, { useEffect, useState } from "react";
import { databases } from "../../Appwrite/config";
// import image from "../../Assets/Group 46 (1).svg";
// import "./Enquiry.css";
// import Calender from "../../Components/Calender/Calender";



function AppWrite() {

    const [name, setName] = useState();
    const [status, setStatus] = useState();
    const [number, setNumber] = useState();
    const [occasion, setOccasion] = useState();
    const [date, setDate] = useState();

    console.log(process.env.REACT_APP_APPWRITE_URL )
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let x = await databases.createDocument(process.env.REACT_APP_APPWRITE_DATABSE_ID, process.env.REACT_APP_APPWRITE_COLLECTION_ID1, 'unique()', {
                name: name,
                number: number,
                date: date,
                occasion: occasion,
                status: status,
            })
            console.log(x)
        } catch (error) {
            console.log(error)
        }



    };
    useEffect(()=>{
        getData()
    },[])

    const getData = async (e) => {
        try {
            let x = await databases.listDocuments(process.env.REACT_APP_APPWRITE_DATABSE_ID, process.env.REACT_APP_APPWRITE_COLLECTION_ID1, [

            ])
            console.log(x.documents)
        } catch (error) {
            console.log(error)
        }



    };







    return (
        <div>
            <div className="mainab">
                <div className="wrapperabout">
                    <div className="container">
                        <img alt="img" />
                    </div>
                    <div className="heading1">Enquiry</div>
                </div>

                <div className="EncontWrapper">
                    <div className="calenderWrapper">

                        <div className="boxwrapper">
                            <div className="boxw">
                                <div className="box"></div> <div>Booked</div>
                            </div>
                            <div className="boxw">
                                <div className="box1"></div> <div>Available</div>
                            </div>
                        </div>
                    </div>
                    <div className="formWrapper">
                        <div className="headingEn">Enquiry Form</div>

                        <form onSubmit={handleSubmit}>

                            <div className="label">
                                <label>Name:</label>
                            </div>
                            <div className="input">
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="name"
                                    required
                                />
                            </div>
                            <div className="label">
                                <label>Status:</label>
                            </div>
                            <div className="input">
                            <select
                            name='status'
                            value={status}
                            onChange={(e) =>setStatus(e.target.value)}
                            required
                        >
                            <option value="" hidden>
                                Select Service
                            </option>
                            <option value="Available ">
                                Available
                            </option>
                            <option value="Booked">
                                Booked
                            </option>
                            
                        </select>
                            </div>
                            <div className="label">
                                <label>Phone:</label>
                            </div>
                            <div className="input">
                                <input
                                    type="tel"
                                    name="number"
                                    maxLength={10}
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                    placeholder="phone"
                                />
                            </div>
    
                            <div className="label">
                                <label>Occassion:</label>
                            </div>
                            <div className="input">
                                <input
                                    type="text"
                                    name="occasion"
                                    value={occasion}
                                    onChange={(e) => setOccasion(e.target.value)}
                                    placeholder="Occassion"
                                    required

                                />
                            </div>
                            <div className="label">
                                <label>Date:</label>
                            </div>
                            <div className="input">
                                <input
                                    type="date"
                                    name="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    placeholder="Detail"
                                    required

                                />
                            </div>
                            <div className="button">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppWrite;