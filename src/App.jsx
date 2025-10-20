import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast"; // ✅ Import here
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import Courses from "./Pages/Courses";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  return (
    <>
      {/* All your routes */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>

      {/* ✅ Add the Toaster here, outside Routes */}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default App;
