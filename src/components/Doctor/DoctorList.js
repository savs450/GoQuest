import React from 'react';
import DoctorCard from './DoctorCard.js';
import '../../App.css'

const doctors = [
  {
    name: 'Dr Renuka C',
    specialization: 'MBBS',
    rating: 4.9,
    experience:2,
    reviews: 2718,
    location: 'Koramangala, Bangalore',
    fee: '₹250 Consultation fee at clinic',
    available: 'Not Available At',
    image: 'https://img.pristyncare.com/our%20doctors%2FAvatar%2FSanjeevGupta.jpg' ,
  },
  {
    name: 'Dr Siddhant Dubey',
    specialization: 'MBBS',
    rating: 4.9,
    experience:4,
    reviews: 2718,
    location: 'Chikitsa Health Hub Banerghatta Road',
    fee: '₹250 Consultation fee at clinic',
    available: 'Not Available At',
    image:'https://img.pristyncare.com/our%20doctors%2FAvatar%2FSanjeevGupta.jpg'  ,
  },
];

const DoctorList = () => {
  return (
    <div className="doctor-list">
      {doctors.map((doctor, index) => (
        <DoctorCard key={index} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorList;
