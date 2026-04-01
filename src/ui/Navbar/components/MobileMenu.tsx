import { NavLink } from "react-router";
import { navLinks } from "../Navbar";
import { useModalStore } from "@/store/useModalStore";
import Button from "../../Button";

interface Props {
  mobMenu: boolean;
  toggleMenu: (menuState: boolean) => void;
}

function MobileMenu({ mobMenu, toggleMenu }:Props) {
  const openModal = useModalStore((state) => state.openModal);

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
            className={({ isActive }) => (isActive && path !== '/fobs-for-business' ? "font-bold" : "")}
            onClick={() => toggleMenu(!mobMenu)}
          >
            <p className='px-4 py-5 text-white bg-black'>{title}</p>
          </NavLink>
        ))}
        <div className="flex flex-col gap-4 pt-4 pb-8 px-4">
          <Button variant="primary" className="hover:bg-white/10">Sign In</Button>
          <Button variant="secondary" onClick={() => {openModal(); toggleMenu(!mobMenu)}}>Sign Up</Button>
        </div>
      </nav>
    </div>    
  );
};

export default MobileMenu;