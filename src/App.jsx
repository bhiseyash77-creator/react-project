
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./compo/Home";
import Add from "./compo/Add";
import Pending from "./compo/Pending";
import Login from "./compo/Login";
import Register from "./compo/Register";
import Naavbar from "./compo/Naavbar";
import Footer from "./compo/Footer";
import Students from "./compo/Students";
import AboutUs from "./compo/AboutUs";
import OurServices from "./compo/OurServices";
import TopPlacedStudents from "./compo/TopPlacedStudents";
import InquiryForm from "./compo/InquiryForm";
import Contact from "./compo/Contact";
import Card from "./compo/Card";
import AdmissionForm from "./compo/AdmissionForm";
import OwnerDashboard from "./compo/OwnerDashboard";


function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Naavbar isLogin={isLogin} setIsLogin={setIsLogin} />

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<AboutUs />} />
            <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/ours" element={<OurServices />} />
            <Route path="/place" element={<TopPlacedStudents />} />
            <Route path="/inq" element ={<InquiryForm />}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/card" element={<Card/>}/>
           <Route path="/owner" element={<OwnerDashboard/>}/>
           <Route path="/admission" element={<AdmissionForm/>}/>
          

            {/* Protected Routes */}
            {isLogin && <Route path="/add" element={<Add />} />}
            {isLogin && <Route path="/add/:id" element={<Add />} />}
            {isLogin && <Route path="/pending" element={<Pending />} />}
            {isLogin && <Route path="/students" element={<Students />} />}
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
