import React from 'react'
import Header from '../Header'
import DoctorList from './DoctorList'
import Footer from '../Footer'


function Doctor() {
  return (
    <div className="App">
    <Header/>
      <DoctorList />
      <Footer/>
    </div>
  )
}

export default Doctor