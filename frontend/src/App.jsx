import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Blog from "./pages/Blogs";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blog url={url} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
