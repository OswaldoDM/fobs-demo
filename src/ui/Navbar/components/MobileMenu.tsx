import { NavLink } from "react-router";
import { navLinks } from "../Navbar";
import Button from "../../Button";


interface Props {
  mobMenu: boolean;
  toggleMenu: (menuState: boolean) => void;
}

function MobileMenu({ mobMenu, toggleMenu }:Props) {  
  return (   
    <div
      className={`absolute w-full bg-black ${mobMenu        
      ? "grid grid-rows-[1fr] transition-all duration-300 ease-in-out"
      : "grid grid-rows-[0fr] transition-all duration-300 ease-in-out"
      }`}
    >
      <nav className='container mx-auto overflow-hidden flex flex-col lg:hidden'>
        {navLinks.map(({ path, title }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => (isActive ? "font-bold" : "")}
            onClick={() => toggleMenu(!mobMenu)}
          >
            <p className='px-4 py-5 text-white bg-black'>{title}</p>
          </NavLink>
        ))}
        <div className="flex flex-col gap-4 pt-4 pb-8">
          <Button variant="primary">Sign In</Button>
          <Button variant="secondary">Sign Up</Button>
        </div>
      </nav>
    </div>    
  );
};

export default MobileMenu;