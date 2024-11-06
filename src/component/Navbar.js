import React, { useState } from "react";
import { Link } from 'react-router-dom';
import navlogo from "./../assets/navlogo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-blue-100">
      <nav
        className="flex items-center w-full bg-transparent justify-between p-4 mx-auto"
        style={{ maxWidth: "88%" }}
      >
        <div className="text-slate-700 text-lg font-bold">
          <h6>NavLogo</h6>
        </div>
        <div className="flex-grow flex text-slate-700 justify-center md:hidden space-x-5 font-medium hidden">
          <Link to="/" className="relative group hover:text-blue-600">
            Home
            <span className="block h-0.5 bg-blue-600 transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
          </Link>
          <Link to="/about" className="relative group hover:text-blue-600">
            About
            <span className="block h-0.5 bg-blue-600 transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
          </Link>
          <Link to="/services" className="relative group hover:text-blue-600">
            Services
            <span className="block h-0.5 bg-blue-600 transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
          </Link>
          <Link to="/contact" className="relative group hover:text-blue-600">
            Contact
            <span className="block h-0.5 bg-blue-600 transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
          </Link>
        </div>

        <div className="hidden md:flex">
          <div class="banner">
            <a href="/signup" className="butn bg-gray-300 px-4 py-2 butn__new">
              <button>Sign Up</button>
            </a>
          </div>
          <div class="banner">
            <a href="/login" className="butn px-4 py-2 butn__new">
              <button>Login</button>
            </a>
          </div>
        </div>

        {/* Toggle Button for Mobile Menu */}
        <button
          aria-expanded={isOpen}
          type="button"
          className="group relative h-6 w-6 md:hidden"
          onClick={toggleMenu}
          style={{
            "--width": "1.25rem",
            "--thickness": "0.125rem",
            "--gap": "0.25rem",
            "--color": "#fff",
            "--duration": "300ms",
          }}
        >
          <span
            className={`absolute left-1/2 top-1/2 h-[var(--thickness)] w-[var(--width)] -translate-x-1/2 translate-y-[calc(-150%-var(--gap))] transition-transform duration-[calc(var(--duration)*2/3)] before:absolute before:right-0 before:h-full before:w-full before:rounded-full before:bg-[var(--color)] before:transition-[width] before:delay-[calc(var(--duration)*1/3)] before:duration-[calc(var(--duration)*2/3)] group-aria-expanded:-translate-y-1/2 group-aria-expanded:-rotate-45 group-aria-expanded:delay-[calc(var(--duration)*1/3)] before:group-aria-expanded:w-[60%] before:group-aria-expanded:delay-0`}
          ></span>
          <span
            className={`absolute left-1/2 top-1/2 h-[var(--thickness)] w-[var(--width)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color)] transition-transform duration-[calc(var(--duration)*2/3)] group-aria-expanded:rotate-45 group-aria-expanded:delay-[calc(var(--duration)*1/3)]`}
          ></span>
          <span
            className={`absolute left-1/2 top-1/2 h-[var(--thickness)] w-[var(--width)] -translate-x-1/2 translate-y-[calc(50%+var(--gap))] transition-transform duration-[calc(var(--duration)*2/3)] before:absolute before:right-0 before:h-full before:w-[60%] before:rounded-full before:bg-[var(--color)] before:transition-[right] before:delay-[calc(var(--duration)*1/3)] before:duration-[calc(var(--duration)*2/3)] group-aria-expanded:-translate-y-1/2 group-aria-expanded:-rotate-45 group-aria-expanded:delay-[calc(var(--duration)*1/3)] before:group-aria-expanded:right-[40%] before:group-aria-expanded:delay-0`}
          ></span>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="absolute top-16 left-0 right-0 bg-blue-100 p-4 md:hidden"
            style={{ top: "60px" }}
          >
            <div className="flex flex-col items-center">
              <a href="/" className="text-white hidden py-2">
                Home
              </a>
              <a href="/about" className="text-white hidden  py-2">
                About
              </a>
              <a href="/services" className="text-white hidden  py-2">
                Services
              </a>
              <a href="/contact" className="text-white hidden  py-2">
                Contact
              </a>
              <div className="flex flex-col gap-5 py-8">
                <div class="banner">
                  <a
                    href="/signup"
                    className="butn bg-gray-300 px-4 py-2 butn__new w-full"
                    style={{ margin: "0px" }}
                  >
                    <button>Sign Up</button>
                  </a>
                </div>
                <div class="banner">
                  <a
                    href="/login"
                    className="butn px-4 py-2 butn__new m-0 w-full"
                    style={{ margin: "0px" }}
                  >
                    <button>Login</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
