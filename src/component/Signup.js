import React, { useState } from "react";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!fullName) newErrors.fullName = "Full name is required";
    if (!username) newErrors.username = "Username is required";
    if (!email) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!password) newErrors.password = "Password is required";
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", { fullName, username, email, password });
    }
  };

  return (
    <div>
      <div className="h-screen md:flex  mb-7">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-600 to-blue-300 justify-around items-center hidden">
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">
              GoFinance
            </h1>
            <p className="text-white mt-1">
              The most popular peer to peer lending finance system.
            </p>
            <button
              type="submit"
              className="block w-28 bg-white text-blue-400 mt-4 py-2 rounded-3xl font-medium mb-2"
            >
              Read More
            </button>
          </div>
        
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form className="bg-white login-form-custom" onSubmit={handleSubmit}>
            <p className="text-md font-normal text-gray-600">Welcome Back!!</p>
            <h1 className="text-gray-800 font-bold text-2xl mb-4">
              Sign Up Form
            </h1>
            {/* Full Name Field */}
            <div className="flex flex-col mb-4 mt-5">
              <div
                className="flex items-center border-b-2 border-gray-300 py-2 px-3 transition-colors duration-200 focus-within:border-blue-500"
                style={{ paddingLeft: "0px" }}
              >
                <input
                  className="pl-2 outline-none border-none w-full"
                  type="text"
                  placeholder="Full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              {errors.fullName && (
                <span className="text-red-500 text-xs">{errors.fullName}</span>
              )}
            </div>
            <div className="flex flex-col mb-4 mt-5">
              <div
                className="flex items-center border-b-2 border-gray-300 py-2 px-3 transition-colors duration-200 focus-within:border-blue-500"
                style={{ paddingLeft: "0px" }}
              >
                <input
                  className="pl-2 outline-none border-none w-full"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              {errors.username && (
                <span className="text-red-500 text-xs">{errors.username}</span>
              )}
            </div>
            <div className="flex flex-col mb-4 mt-5">
              <div
                className="flex items-center border-b-2 border-gray-300 py-2 px-3 transition-colors duration-200 focus-within:border-blue-500"
                style={{ paddingLeft: "0px" }}
              >
                <input
                  className="pl-2 outline-none border-none w-full"
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {errors.email && (
                <span className="text-red-500 text-xs">{errors.email}</span>
              )}
            </div>

            <div className="flex flex-col mb-4 mt-5">
              <div
                className="flex items-center border-b-2 border-gray-300 py-2 px-3 transition-colors duration-200 focus-within:border-blue-500 justify-between"
                style={{ paddingLeft: "0px" }}
              >
                <input
                  className="pl-2 outline-none border-none"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="ml-2"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.875 18.825A5.992 5.992 0 0112 19c-3.313 0-6-2.687-6-6s2.687-6 6-6c1.23 0 2.375.373 3.333.99M16 14a4.978 4.978 0 001.545-3.663m0 0a4.978 4.978 0 00-1.545-3.663m1.545 3.663H12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.875 18.825A5.992 5.992 0 0112 19c-3.313 0-6-2.687-6-6s2.687-6 6-6c1.23 0 2.375.373 3.333.99M16 14a4.978 4.978 0 001.545-3.663m0 0a4.978 4.978 0 00-1.545-3.663m1.545 3.663H12"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && (
                <span className="text-red-500 text-xs">{errors.password}</span>
              )}
              <div
                className="flex items-center border-b-2 border-gray-300 py-2 px-3 mt-4 transition-colors duration-200 focus-within:border-blue-500 justify-between"
                style={{ paddingLeft: "0px" }}
              >
                <input
                  className="pl-2 outline-none border-none"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="ml-2"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.875 18.825A5.992 5.992 0 0112 19c-3.313 0-6-2.687-6-6s2.687-6 6-6c1.23 0 2.375.373 3.333.99M16 14a4.978 4.978 0 001.545-3.663m0 0a4.978 4.978 0 00-1.545-3.663m1.545 3.663H12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.875 18.825A5.992 5.992 0 0112 19c-3.313 0-6-2.687-6-6s2.687-6 6-6c1.23 0 2.375.373 3.333.99M16 14a4.978 4.978 0 001.545-3.663m0 0a4.978 4.978 0 00-1.545-3.663m1.545 3.663H12"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <span className="text-red-500 text-xs">
                  {errors.confirmPassword}
                </span>
              )}
              {password && confirmPassword && password === confirmPassword && (
                <span className="text-green-500 text-xs">Password matched</span>
              )}
            </div>

            <button
              className="block w-6/12 bg-gradient-to-tr from-blue-600 to-blue-300 my-6 py-2 mx-auto rounded-xl text-white font-semibold mb-4"
              type="submit"
            >
              Sign Up
            </button>
            {/* <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
              Forgot Password?
            </span> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
