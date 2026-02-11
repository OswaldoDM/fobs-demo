
interface Props {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  [key: string]: any; // For additional HTML button attributes
}

function Button({ variant = 'primary', children, className = '', ...props }:Props){

  const baseStyles = 'py-[10px] px-7 w-full transition-colors duration-200 rounded-lg ';
  const variantStyles = {
    primary: 'bg-black text-white font-semibold',
    secondary: 'bg-white text-black font-bold',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <button type="button" className={combinedStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;