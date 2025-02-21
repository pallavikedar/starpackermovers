import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import facebook from "../../Assets/images/facebook.png";
import instagran from "../../Assets/images/instagram 2.svg";
import whatsapp from "../../Assets/images/whatsapp.png";
import phone from "../../Assets/images/phone-call (1).png";
function Contact() {
  return (
    <>
      <h1 className="Contacth1">You Can Find Us At</h1>
      <div className="contact_wrapper">
        <div className="form_container">
          <div>
            <h2>Email </h2>
            <p> packerstar29@gmail.com</p>
          </div>
          <div>
            <h2>Phone No</h2>
            <p> 8888871288 /8806317370</p>
          </div>
          <div>
            <h2>Location</h2>
            <p>
              Star Packers and Movers Plot no. 7, <br /> Sant Gyaneshwar
              Society, <br />
              Beside Patel Wine shop Dattawadi, <br /> Nagpur -440023
            </p>
          </div>
          <div className="SocialIcon">
          <Link
            to="https://www.facebook.com/your_username_or_id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="" />
          </Link>
          <Link
            to="https://www.instagram.com/your_username_or_id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagran} alt="" />
          </Link>
          <Link to="https://wa.me/+918888871288">
            <img src={whatsapp} alt="" />
          </Link>
          <Link to="tel:8888871288" target="_blank">
            <img src={phone} alt="" />
          </Link>
        </div>
        </div>

        <div className="google_map">
          <iframe
            title="Starmover"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.0073299676537!2d78.996787075035!3d21.152106580528237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4ea8d6e2479f1%3A0xe6fd30940f203de1!2sShri%20Sai%20Hardware!5e0!3m2!1sen!2sin!4v1705997230327!5m2!1sen!2sin"
            style={{ border: "0px", borderRadius: "20px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            height="100%"
            width="100%"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;
