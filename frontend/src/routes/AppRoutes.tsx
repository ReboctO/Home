import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/RegisterPage";
import Login from "../pages/LoginPage";
import Dashboard from "../pages/DashBoardPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
