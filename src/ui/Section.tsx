
interface Props {
    children: React.ReactNode
    bg?: string
    className?: string
}

function Section({children, bg = 'white', className = ''}:Props) {  

  return (
    <section className={`${bg === 'black' ? 'bg-black text-white' : ''} `}>
        <div className={`container mx-auto px-4 xl:px-0 font-roboto ${className}`}>
            {children}
        </div>
    </section>
  )
}

export default Section