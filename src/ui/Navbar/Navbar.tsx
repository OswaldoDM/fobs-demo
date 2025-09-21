import { useState } from "react";
import { Link } from "react-router";
import MobileIcon from "./components/MobileIcon";
import DesktopMenu from "./components/DesktopMenu";
import MobileMenu from "./components/MobileMenu";
import Section from "../Section";


export const navLinks = [    
    { path: '/write-a-review', title:'Write a Review' },
    { path: '/categories', title:'Categories' },
    { path: '/articles', title:'Articles' },
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
        <Link to='/fobs-demo/'><img src="/fobs-demo/fobs.svg" alt="fobs-logo" /></Link>
        <MobileIcon mobMenu={mobMenu} toggleMenu={toggleMenu}/>
        <DesktopMenu />
      </div>      
    </Section>
    <MobileMenu mobMenu={mobMenu} toggleMenu={toggleMenu}/>
    </>    
  );
};

export default Navbar;
