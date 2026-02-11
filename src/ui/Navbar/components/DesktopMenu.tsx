import { NavLink } from "react-router";
import { navLinks } from "../Navbar";
import Button from "../../Button";
import { useModalStore } from "../../../store/useModalStore";

function DesktopMenu() {   
  const openModal = useModalStore((state) => state.openModal);

  return (
    <nav className='hidden lg:flex lg:items-center lg:gap-10'>
      {navLinks.map(({path,title}) => (
          <span key={path} className={`${title === 'FOBS for Business' ? 'flex items-center gap-2' : ''}`}>
            <NavLink
              to={path}
              className={({isActive}) => isActive ? 'font-bold' : '' }
            >
              {title}
            </NavLink>
            {title === 'FOBS for Business' ? (
              <svg width="12" height="8" className="cursor-pointer" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" fill="white"/>
              </svg>
            ) : null}
          </span>
      ))}
      <div className="flex gap-4">
        <Button variant="primary" className="w-auto hover:bg-white/10">Sign In</Button>
        <Button variant="secondary" onClick={openModal} className="w-auto">Sign Up</Button>
      </div>
    </nav>
  );
};

export default DesktopMenu;

