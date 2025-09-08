

interface Props {
  mobMenu: boolean;
  toggleMenu: (menuState: boolean) => void;
}

const MobileIcon = ({mobMenu,toggleMenu}: Props) => {

    const lineClasses = 'bg-white w-full h-[2px] transition duration-200';

  return (
    <div
    className="lg:hidden w-[22px] h-[30px] flex flex-col justify-center cursor-pointer gap-[5px]"
    onClick={() => toggleMenu(!mobMenu)}
    >
    <span className={`${lineClasses} ${mobMenu ? 'relative top-[22%] transform rotate-45' : ''}`}></span>
    <span className={`${lineClasses} ${mobMenu ? 'transform -rotate-45' : ''}`}></span>
    <span className={`${lineClasses} ${mobMenu ? 'opacity-0' : ''}`}></span>
  </div>
  )
}

export default MobileIcon;

