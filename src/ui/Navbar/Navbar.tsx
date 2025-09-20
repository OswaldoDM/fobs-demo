import { useState } from "react";
import { Link } from "react-router";
import MobileIcon from "./components/MobileIcon";
import DesktopMenu from "./components/DesktopMenu";
import MobileMenu from "./components/MobileMenu";


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
    <section className="bg-black font-roboto">
      <div className='container mx-auto items-center px-4 py-3 text-white xl:px-0'>
        <div className='flex justify-between items-center'>          
          <Link to='/fobs-demo/'><img src="/fobs-demo/fobs.svg" alt="fobs-logo" /></Link>
          <MobileIcon mobMenu={mobMenu} toggleMenu={toggleMenu}/>
          <DesktopMenu />
        </div>       
      </div>
      <MobileMenu mobMenu={mobMenu} toggleMenu={toggleMenu}/>      
    </section>
  );
};

export default Navbar;
