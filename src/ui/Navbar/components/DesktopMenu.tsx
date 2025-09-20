import { NavLink } from "react-router";
import { navLinks } from "../Navbar";
import Button from "../../Button";


function DesktopMenu() {  

  return (
    <nav className='hidden lg:flex lg:items-center lg:gap-10'>
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
      <div className="flex gap-4">
        <Button variant="primary">Sign In</Button>
        <Button variant="secondary">Sign Up</Button>
      </div>
    </nav>
  );
};

export default DesktopMenu;

