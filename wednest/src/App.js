import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeddingLandingPage from "./WeddingLandingPage";
import Login from "./Login";
import Signup from "./Signup";
import VendorDashboard from "./VendorDashboard";
import CoupleDashboard from "./CoupleDashboard"; // Import the Couple Dashboard
import CoupleProfileSetup from "./CoupleProfileSetup";
import VendorProfileSetup from "./VendorProfileSetup";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WeddingLandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/couple-dashboard" element={<CoupleDashboard/>}/>
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
        <Route path="/couple-profile" element={<CoupleProfileSetup/>}/>
        <Route path="/vendor-profile" element={<VendorProfileSetup />} />
      </Routes>
    </Router>
  );
}

export default App;
