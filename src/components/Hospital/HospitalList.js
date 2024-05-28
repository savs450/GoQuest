import React from 'react';
import HospitalCard from './HospitalCard';


function HospitalList() {
    const data = [
        {
          image:"https://cdn.clinikk.com/trinity/visit-us/hero-section/visit-us-hero-small.webp",
          location:"24/1, Puttenahalli Road, JP Nagar 6th Phase, Ashta Laxmi Layout, J. P. Nagar, Bengaluru, Karnataka 560078 Near Sri Satya Ganapathi Temple",
          contactNumber: "9752007200",
          availablity: "Monday-Saturday 9 AM-9 PM",
          direction:'https://www.google.com/maps/@28.4257782,77.043591,16z?entry=ttu'
        },
        {
            image:"https://cdn.clinikk.com/trinity/visit-us/hero-section/visit-us-hero-small.webp",
            location:"24/1, Puttenahalli Road, JP Nagar 6th Phase, Ashta Laxmi Layout, J. P. Nagar, Bengaluru, Karnataka 560078 Near Sri Satya Ganapathi Temple",
            contactNumber: "9752007200",
            availablity: "Monday-Saturday 9 AM-9 PM",
            direction:'https://www.google.com/maps/@28.4257782,77.043591,16z?entry=ttu'
          },
          {
            image:"https://cdn.clinikk.com/trinity/visit-us/hero-section/visit-us-hero-small.webp",
            location:"24/1, Puttenahalli Road, JP Nagar 6th Phase, Ashta Laxmi Layout, J. P. Nagar, Bengaluru, Karnataka 560078 Near Sri Satya Ganapathi Temple",
            contactNumber: "9752007200",
            availablity: "Monday-Saturday 9 AM-9 PM",
            direction:'https://www.google.com/maps/@28.4257782,77.043591,16z?entry=ttu'
          },
          {
            image:"https://cdn.clinikk.com/trinity/visit-us/hero-section/visit-us-hero-small.webp",
            location:"24/1, Puttenahalli Road, JP Nagar 6th Phase, Ashta Laxmi Layout, J. P. Nagar, Bengaluru, Karnataka 560078 Near Sri Satya Ganapathi Temple",
            contactNumber: "9752007200",
            availablity: "Monday-Saturday 9 AM-9 PM",
            direction:'https://www.google.com/maps/@28.4257782,77.043591,16z?entry=ttu'
          },
        ];
  return (
    <div className='Hospital_cards'>
        {data.map((item,i)=>(
           <HospitalCard key={i} hospital={item} />
        ))}
    </div>
  )
}

export default HospitalList