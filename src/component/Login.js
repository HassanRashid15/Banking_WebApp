// LoginSignupComponent.jsx
import React, { useState, useEffect, useRef } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#4a90e2", "#50E3C2", "#9013FE", "#B8E986", "#FF0080"];
    const circles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 10 + 5,
      dx: Math.random() - 0.5,
      dy: Math.random() - 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      circles.forEach((circle) => {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = circle.color;
        ctx.fill();
      });
    };

    const update = () => {
      circles.forEach((circle) => {
        circle.x += circle.dx;
        circle.y += circle.dy;

        if (
          circle.x + circle.radius > canvas.width ||
          circle.x - circle.radius < 0
        )
          circle.dx *= -1;
        if (
          circle.y + circle.radius > canvas.height ||
          circle.y - circle.radius < 0
        )
          circle.dy *= -1;
      });
      draw();
      requestAnimationFrame(update);
    };

    update();
  }, []);

  return (
    <div className="relative flex items-center justify-center h-screen w-screen overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      {/* Background Overlay */}
      <div
        className={`absolute top-0 left-0 h-full w-1/2 z-10 bg-gradient-to-r ${
          isLogin ? "from-indigo-500" : "from-green-500"
        } transition-all duration-500`}
      ></div>
      <div
        className={`absolute top-0 right-0 h-full w-1/2 z-10 bg-gradient-to-r ${
          isLogin ? "to-purple-500" : "to-yellow-500"
        } transition-all duration-500`}
      ></div>

      {/* Container */}
      <div
        className="relative flex z-20 w-10/12 max-w-3xl overflow-hidden bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg transition-transform duration-700 transform"
        style={{ transform: `translateX(${isLogin ? "0" : "-50%"})` }}
      >
        {/* Login Form */}
        <div
          className={`flex flex-col items-center justify-center p-10 w-1/2 space-y-4 ${
            isLogin ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-opacity duration-500`}
        >
          <h2 className="text-3xl font-bold text-white">Login</h2>
          <form className="flex flex-col gap-4 w-full">
            <input
              type="text"
              placeholder="Username"
              className="p-3 rounded bg-white bg-opacity-20 placeholder-white text-white outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded bg-white bg-opacity-20 placeholder-white text-white outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="py-3 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
            >
              Login
            </button>
          </form>
          <p className="text-white">
            Don't have an account?{" "}
            <button
              className="text-blue-300 hover:text-blue-400"
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </p>
        </div>

        {/* Signup Form */}
        <div
          className={`flex flex-col items-center justify-center p-10 w-1/2 space-y-4 ${
            isLogin ? "opacity-0 pointer-events-none" : "opacity-100"
          } transition-opacity duration-500`}
        >
          <h2 className="text-3xl font-bold text-white">Sign Up</h2>
          <form className="flex flex-col gap-4 w-full">
            <input
              type="text"
              placeholder="Username"
              className="p-3 rounded bg-white bg-opacity-20 placeholder-white text-white outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded bg-white bg-opacity-20 placeholder-white text-white outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded bg-white bg-opacity-20 placeholder-white text-white outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="py-3 bg-green-600 hover:bg-green-700 text-white rounded transition"
            >
              Sign Up
            </button>
          </form>
          <p className="text-white">
            Already have an account?{" "}
            <button
              className="text-green-300 hover:text-green-400"
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
