import React from "react";
import './DoctorCard.css'
// import './new.css'
import { AiFillLike } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const DoctorCard = ({ doctor }) => {
  console.log(doctor.name);
  return (
    <div>
      <div className="doctorInfo">
        <img src={doctor.image} alt={doctor.name} className="doctor-image" />
        <div className="doctor-designation">
          <p className="doctorName">{doctor.name}</p>
          <p className="specialization">{doctor.specialization}</p>
          <p className="experience">
            {`${doctor.experience} experience overall`}
          </p>
        </div>
      </div>
      <hr />
      <div>
        <span className="rating">
          <div className="patient-recomend">
            <p className="sec1">
              <AiFillLike color="fff" size={25} />
              <span>97%</span>
            </p>
            <p>Patient Recomendation</p>
          </div>
          <div className="patient-recomend">
            <p className="sec2">
              <BsStarHalf color="fff" />
              <span>{doctor.rating}</span>
            </p>
            <p>Patient Ratings</p>
          </div>
        </span>
      </div>
      <hr />
      <div className="address">
        <div>
          <span className="location">{doctor.location}</span>&nbsp;
          &bull;&nbsp;Primary Care
        </div>
        <div>
          <span className="open">Open</span>
          <span>&bull; &nbsp;Mon-Fri 9:30-1 P.M 4-8:30 P.M</span>
        </div>
        <div>
          <span>&#8377;250</span>
          <span>Consultation fee at Clinic</span>
        </div>
      </div>
      <hr/>
      <div className="buttonGroup">
      <button className="view_profile">View Profile </button>
      <button className="book-btn">Book Clinic Visit </button>
      </div>
      <hr/>
    </div>
  );
};

export default DoctorCard;
