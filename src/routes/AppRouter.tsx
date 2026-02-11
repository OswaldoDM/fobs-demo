import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import Navbar from "../ui/Navbar/Navbar";
import Landing from "../pages/Landing/Landing";
import Footer from "../ui/Footer/Footer";
import ReviewerSignUp from "../pages/ReviewerSignUp/ReviewerSignUp";
import BusinessSignUp from "../pages/BusinessSignUp/BusinessSignUp";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function AppRouter() {
  return (
    <BrowserRouter basename="/fobs-demo">    
      <Routes>
        {/* Rutas con Navbar y Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
        </Route>

        {/* Rutas SIN Navbar ni Footer */}
        <Route path="/reviewer-sign-up" element={<ReviewerSignUp />} />
        <Route path="/business-sign-up" element={<BusinessSignUp />} />          
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;