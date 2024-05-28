import React from "react";
import "./Hospital.css";
import { TiTick } from "react-icons/ti";

function HospitalTemplate() {
  const reason = [
    "Meet Doctor",
    "Health Checkup",
    "Discuss Reports",
    "Medical Certificate",
    "Check Vitals",
    "Membership Support",
  ];

  return (
    <div>
      <div className="template">
        <div className="template_heading">Reason to Visit Us</div>
        <div className="template_details">
          {reason.map((item, i) => (
            <div className="template_container">
              <TiTick />
              <span key={i}>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <h3>Find Health Hub near you in Bengaluru</h3>
      <input className='pincode' placeholder="Enter pincode or Area"></input>
    </div>
  );
}

export default HospitalTemplate;
