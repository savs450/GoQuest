import React from 'react';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Hospital from './components/Hospital/Hospital';
import DoctorList from './components/Doctor/DoctorList';
import Doctor from './components/Doctor/Doctor';



function App() {
  return (
    <div className="App">
    <Doctor/>
      {/* <Hospital/> */}
      
    </div>
  );
}

export default App;
