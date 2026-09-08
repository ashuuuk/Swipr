import { BrowserRouter, Routes, Route } from "react-router-dom";

import Splash from "../screens/Splash";
import Auth from "../screens/Auth";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Home from "../screens/Home";
import VerifyEmail from "../screens/VerifyEmail";
import CompleteProfile from "../screens/CompleteProfile";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}