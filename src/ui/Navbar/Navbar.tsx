import { useState } from "react";
import MobileIcon from "./components/MobileIcon";
import DesktopMenu from "./components/DesktopMenu";
import MobileMenu from "./components/MobileMenu";
import Section from "../Section";
import fobsLogo from '/fobs.svg';
import { Link } from "react-router";

export const navLinks = [    
    { path: '/write-a-review', title:'Write a Review' },
    { path: '/categories', title:'Categories' },
    { path: '/articles', title:'Articles' },
    { path: '/fobs-for-business', title:'FOBS for Business' },
]  

function Navbar() {
  const [mobMenu, setMobMenu] = useState(false);  
  
  function toggleMenu(menuState: boolean) {
    setMobMenu(menuState)
  }  
  
  return (    
     <> 
    <Section bg= 'black' className="py-3">
      <div className='flex justify-between items-center'>          
        <Link to='/'><img src={fobsLogo} alt="fobs-logo" /></Link>
        <MobileIcon mobMenu={mobMenu} toggleMenu={toggleMenu}/>
        <DesktopMenu />
      </div>      
    </Section>
    <MobileMenu mobMenu={mobMenu} toggleMenu={toggleMenu}/>
    </>    
  );
};

export default Navbar;

