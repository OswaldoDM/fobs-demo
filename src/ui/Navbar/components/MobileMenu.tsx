import { NavLink } from "react-router";
import { navLinks } from "../Navbar";


interface Props {
  mobMenu: boolean;
  toggleMenu: (menuState: boolean) => void;
}

function MobileMenu({ mobMenu, toggleMenu }: Props) {  
  return (   
    <div
      className={`absolute w-full ${mobMenu        
      ? "grid grid-rows-[1fr] transition-all duration-300 ease-in-out"
      : "grid grid-rows-[0fr] transition-all duration-300 ease-in-out"
      }`}
    >
      <nav className='container mx-auto overflow-hidden flex flex-col xl:hidden'>
        {navLinks.map(({ path, title }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => (isActive ? "font-bold" : "")}
            onClick={() => toggleMenu(!mobMenu)}
          >
            <p className='py-4 px-[10px] bg-[#ddd] hover:bg-white'>{title}</p>
          </NavLink>
        ))}
      </nav>
    </div>    
  );
};

export default MobileMenu;