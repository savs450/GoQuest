import React from "react";
import HospitalCard from "./HospitalCard";
import Header from "../Header";
import HospitalList from "./HospitalList";
import HospitalTemplate from "./hospitalTemplate";
import Footer from "../Footer";




function Hospital() {

  return (
    <div>
      <Header />
      <HospitalTemplate/>
      <HospitalList/>
      <Footer/>
    </div>
  );
}

export default Hospital;
