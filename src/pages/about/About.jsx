import React from "react";
import "./About.css";
import iso from "../../Assets/images/iso-removebg-preview 1.png";
import imo from "../../Assets/images/DocScanner_04-Mar-2023_4-20_pm_page-0001-removebg-preview 1.png";

function About() {
  return (
    <>
      <div className="About_Wrapper">
        <h1 className="about_heading">About</h1>
        <div className="About_content">
        <div className="a">
          <ul>
            <li>Star Packers And Movers work in a market since 2013 </li>
            <li>
              Star Packers and Movers give you professional service. We
              understand that you want your precious items to reach its
              destination in a safe condition. We have experienced and trained
              staff to pack your items carefully and load them professionally.
              Our trucks and drivers are optimized for the safe transfer of your
              cargo.
            </li>
            <li>
              Reliable Packaging
              <p>
                Packing and wrapping of your valuable items by experienced
                workers.
              </p>
            </li>
            <li>
              Vehicle Transportation
              <p>
                We will take care of your beloved car while transporting it from
                one city to another anywhere in India.
              </p>
            </li>
            <li>
              Office Relocation
              <p>
                Office relocation is challenging for any business and with Star
                Packers and Movers , you don't need to focus on moving
              </p>
            </li>
            <li>
              Insurance Facilities
              <p>
                We offer insurance option for your very precious items and
                valuable households.
              </p>
            </li>
            <li>
              Warehouse Service
              <p>
                We offer warehouse service to our customers at very competitive
                prices.
              </p>
            </li>
            <li>
              Industrial Packaging
              <p>
                We have experienced staff for moving industrial items and goods
                with care and professional manner.
              </p>
            </li>
          </ul>
        </div>
      </div>
      </div>
      <div className="About_logoes">
        <div className="About_isologo">
          <img src={iso} alt="iso" />
          <p> ISO Certified Company</p>
        </div>
        <div className="About_isologo">
          <img src={imo} alt="imo" />
          <p> Associate Member of the Indian Movers Association </p>
        </div>
      </div>
    </>
  );
}

export default About;
