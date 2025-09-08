import { NavLink } from "react-router";
import { navLinks } from "../Navbar";


function DesktopMenu() {  

  return (
    <nav className='hidden lg:flex lg:gap-4'>
      {navLinks.map(({path,title}) => (
          <span key={path}>
            <NavLink
              to={path}
              className={({isActive}) => isActive ? 'font-bold' : '' }
            >
              {title}
            </NavLink>
          </span>
        ))}      
    </nav>
  );
};

export default DesktopMenu;

