import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home.js";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./component/Login.js";
import ScrollToTopButton from "./component/ScrollToTopButton.js";
import Signup from "./component/Signup.js";

const Content = () => {
  const location = useLocation(); // Get the current location

  // Define an array of paths where the footer should be hidden
  const noFooterPaths = ["/login", "/signup"]; // Only login and signup paths

  // Check if the current path is in the noFooterPaths array
  const showFooter = !noFooterPaths.includes(location.pathname);

  return (
    <div>
      <Navbar />
      <div className="content-adjustment">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* You can add more routes here as needed */}
        </Routes>
      </div>
      {showFooter && <Footer />} {/* Conditionally render the footer */}
      <ScrollToTopButton />
    </div>
  );
};

export default Content;
