import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // To handle redirects after login

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();

    // Perform validation if needed (optional)
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // Send login request to backend
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.status === "success") {
        // Successfully logged in, redirect to the dashboard or home page
        console.log("Login successful!");
        //navigate("/vendor-dashboard"); // Redirect to vendor dashboard (adjust path as necessary)
       // navigate("/vendor-dashboard"); // Redirect to vendor dashboard (adjust path as necessary)
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error logging in", error);
      alert("An error occurred while logging in.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-pink-100"
      style={{
        backgroundImage: "url('/bg.png')", // Update with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
        <p className="text-gray-600 mt-2">Sign in to your account</p>

        {/* Form Fields */}
        <form onSubmit={handleLogin}>
          <div className="mt-6 space-y-4">
            <input
              type="email"
              placeholder="Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 bg-pink-200 focus:ring-2 focus:ring-pink-400 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 bg-pink-200 focus:ring-2 focus:ring-pink-400 focus:outline-none"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition"
          >
            Login
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="mt-4 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/Signup" // Adjust to your vendor signup page route
            className="text-pink-600 font-bold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
