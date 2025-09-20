import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "../ui/Navbar/Navbar";
import Landing from "../pages/Landing/Landing";
import Footer from "../ui/Footer/Footer";

function AppRouter() {
  return (
    <BrowserRouter>    
      <Navbar />
      <Routes>
            <Route path="/fobs-demo/" element = { <Landing /> } />               
      </Routes>
      <Footer/>      
    </BrowserRouter>
  );
}

export default AppRouter;