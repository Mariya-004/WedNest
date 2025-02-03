import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const WeddingLandingPage = () => {
  return (
    <div
      className="min-h-screen bg-pink-100 flex flex-col items-center py-10 px-5"
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center">
        <img
          src="/wednestHeader.png"
          alt="wedNest Logo"
          className="w-50 h-auto mt-[-40px]"
        />
      </div>

      <div className="mt-10 w-full max-w-6xl space-y-10">
        {/* For Couples Section */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex items-center space-x-6 h-[300px]">
          <img src="/Couple.jpg" alt="Couple" className="w-50 h-50 object-cover rounded-xl" />
          <div>
            <h2 className="text-xl font-bold">FOR COUPLES</h2>
            <p className="text-xl text-black-700 font-serif font-bold mt-10">
              "Turn your dream wedding into reality! Effortlessly plan, organize, and manage every detail with ease. From venues to photographers, everything you need is just a click away."
            </p>
            <div className="mt-10 space-x-4">
              <Link to="/couple-login">
                <button className="bg-purple-500 text-white px-4 py-2 rounded-xl">Login</button>
              </Link>
              <Link to="/couple-signup">
                <button className="bg-purple-500 text-white px-4 py-2 rounded-xl">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>

        {/* For Vendors Section */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex items-center space-x-6 h-[300px]">
          <img src="/Vendors.png" alt="Vendors" className="w-45 h-50 object-cover rounded-xl" />
          <div>
            <h2 className="text-xl font-bold">FOR VENDORS</h2>
            <p className="text-xl text-black-800 font-serif font-bold mt-10">
              "Grow your business and reach couples planning their weddings! Showcase services, manage bookings, and connect with clients—all in one place."
            </p>
            <div className="mt-10 space-x-4">
              <Link to="/vendor-login">
                <button className="bg-purple-500 text-white px-4 py-2 rounded-xl">Login</button>
              </Link>
              <Link to="/vendor-signup">
                <button className="bg-purple-500 text-white px-4 py-2 rounded-xl">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingLandingPage;
