import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home.js";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./component/Login.js";
import ScrollToTopButton from "./component/ScrollToTopButton.js";
import Signup from "./component/Signup.js";
import Preloader from "./component/Preloader"; // Import Preloader component
import { motion } from "framer-motion"; // Import Framer Motion

const Content = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true); // State to manage preloader visibility

  const noFooterPaths = ["/login", "/signup"]; // Paths where the footer should be hidden
  const showFooter = !noFooterPaths.includes(location.pathname);

  // Show the preloader for 1 second after page load to simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide the preloader after 1 second (can be adjusted)
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, [location]); // Re-run this effect on location change

  return (
    <div>
      {isLoading && <Preloader />} {/* Show preloader when loading */}
      <Navbar />
      <motion.div
        className="content-adjustment"
        initial={{ opacity: 0 }} // Initial state: fully transparent
        animate={{ opacity: isLoading ? 0 : 1 }} // Fade in when preloader is complete
        transition={{ duration: 1 }} // Set transition duration for fade-in effect
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </motion.div>
      {showFooter && <Footer />} {/* Show footer based on route */}
      <ScrollToTopButton />
    </div>
  );
};

export default Content;
