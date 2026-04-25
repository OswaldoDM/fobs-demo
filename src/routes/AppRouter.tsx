import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import Navbar from "@/ui/Navbar/Navbar";
import Footer from "@/ui/Footer/Footer";
import Landing from "@/pages/Landing/Landing";
import ReviewerSignUp from "@/pages/Auth/ReviewerSignUp/ReviewerSignUp";
import BusinessSignUp from "@/pages/Auth/BusinessSignUp/BusinessSignUp";
import ReviewerProfile from "@/pages/Profile/ReviewerProfile/ReviewerProfile";

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
        {/* Routes with Navbar and Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
        </Route>

        {/* Routes without Navbar and Footer */}
        <Route path="/reviewer-sign-up" element={<ReviewerSignUp />} />
        <Route path="/reviewer-profile" element={<ReviewerProfile />} />
        <Route path="/business-sign-up" element={<BusinessSignUp />} />          
      </Routes>
      
    </BrowserRouter>
  );
}

export default AppRouter;