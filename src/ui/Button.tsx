
interface Props {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  [key: string]: any; // For additional HTML button attributes
}

function Button({ variant = 'primary', children, className = '', ...props }:Props){

  const baseStyles = 'py-[10px] px-7 transition-colors duration-200 rounded-lg mx-4 lg:mx-0';
  const variantStyles = {
    primary: 'bg-black text-white hover:bg-white/10',
    secondary: 'bg-white text-black hover:bg-white font-bold',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <button type="button" className={combinedStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;