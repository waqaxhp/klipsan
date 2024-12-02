import React from "react";
import Navbar from "./Components/navbar";
import Home from "./Components/Home";
import FitnessLayout from "./Components/FitnessLayout";
import Amenities from "./Components/Amenities";
import ScheduleVisit from "./Components/ScheduleVisit";
import TestimonialComponent from "./Components/TestimonialComponent";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <FitnessLayout />
      <Amenities />
      <ScheduleVisit />
      <TestimonialComponent />
      <Footer />
    </>
  );
}

export default App;
