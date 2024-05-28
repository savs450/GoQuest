import React from "react";
import "./Hospital.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { GoClockFill } from "react-icons/go";
import { SiTelegram } from "react-icons/si";
import { IoMdCall } from "react-icons/io";
import { SiGooglemaps } from "react-icons/si";
function HospitalCard({ hospital }) {
  // console.log({ hospital });

  return (
    <div className="main_container">
      <p>CliniKK Health Hub &#9733; JP Nagar </p>
      <img className="hospital_img" src={hospital.image} alt='hospital' />
      <div className="section">
      <div className="content">
        <FaMapMarkerAlt size={50} />
        <span>{hospital.location}</span>
      </div>
      <div className="content">
        <MdCall size={30}/>
        <span className="hospital_contact" >{hospital.contactNumber}</span>
      </div>
      <div className="content3">
        <GoClockFill size={30} />
        <span className="hospital_contact">{hospital.availablity}</span>
      </div>
      <div className="content3">
        <SiTelegram size={30} />
        <a className="direction" href={hospital.direction}>Directions</a>
      </div>
      </div>
      <br/>
      <div className="button_section">
        <button className="book_Visit">Book Visit</button>
        <div className="button_background"><IoMdCall size={30}/></div>
        <div  className="button_background">
          <a href={hospital.location}><SiGooglemaps size={30}/></a>
          </div>
      </div>
    </div>
  );
}

export default HospitalCard;
